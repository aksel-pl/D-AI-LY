import { createServer } from "node:http";
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import { extname, join, normalize } from "node:path";

const port = Number(process.env.PORT || 4173);
const root = process.cwd();
const dataDir = join(root, "data");
const guessesPath = join(dataDir, "guess-spreads.json");
const completionsPath = join(dataDir, "completion-stats.json");

const feeds = [
  { source: "BBC News", url: "https://feeds.bbci.co.uk/news/rss.xml" },
  { source: "NPR", url: "https://feeds.npr.org/1001/rss.xml" },
  { source: "The New York Times", url: "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml" },
  { source: "The Guardian", url: "https://www.theguardian.com/world/rss" },
  { source: "Al Jazeera", url: "https://www.aljazeera.com/xml/rss/all.xml" },
  { source: "ABC News", url: "https://feeds.abcnews.com/abcnews/topstories" },
  { source: "Reuters", url: "https://feeds.reuters.com/reuters/topNews" },
  { source: "The Washington Post", url: "https://feeds.washingtonpost.com/rss/world" }
];

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8"
};

createServer(async (request, response) => {
  try {
    const url = new URL(request.url, `http://${request.headers.host}`);

    if (url.pathname === "/api/guess" && request.method === "POST") {
      await handleGuess(request, response);
      return;
    }

    if (url.pathname === "/api/news-rounds" && request.method === "GET") {
      await handleNews(response);
      return;
    }

    if (url.pathname === "/api/complete" && request.method === "POST") {
      await handleCompletion(request, response);
      return;
    }

    await serveStatic(url.pathname, response);
  } catch (error) {
    response.writeHead(500, { "Content-Type": "application/json" });
    response.end(JSON.stringify({ error: error.message }));
  }
}).listen(port, () => {
  console.log(`D[AI]LY running at http://127.0.0.1:${port}`);
});

async function handleGuess(request, response) {
  const body = await readRequestBody(request);
  const { dateKey, roundId, selectedId } = JSON.parse(body || "{}");

  if (!dateKey || !roundId || !["human", "ai"].includes(selectedId)) {
    response.writeHead(400, { "Content-Type": "application/json" });
    response.end(JSON.stringify({ error: "Invalid guess" }));
    return;
  }

  await mkdir(dataDir, { recursive: true });
  const store = existsSync(guessesPath)
    ? JSON.parse(await readFile(guessesPath, "utf8"))
    : {};
  const key = `${dateKey}:${roundId}`;
  store[key] ||= { human: 0, ai: 0 };
  store[key][selectedId] += 1;
  await writeFile(guessesPath, JSON.stringify(store, null, 2));

  response.writeHead(200, { "Content-Type": "application/json" });
  response.end(JSON.stringify(store[key]));
}

async function handleCompletion(request, response) {
  const body = await readRequestBody(request);
  const { dateKey, gameKey, score, total } = JSON.parse(body || "{}");

  if (!dateKey || !gameKey || !Number.isFinite(score) || !Number.isFinite(total)) {
    response.writeHead(400, { "Content-Type": "application/json" });
    response.end(JSON.stringify({ error: "Invalid completion" }));
    return;
  }

  await mkdir(dataDir, { recursive: true });
  const store = existsSync(completionsPath)
    ? JSON.parse(await readFile(completionsPath, "utf8"))
    : {};
  const key = `${dateKey}:${gameKey}`;
  store[key] ||= { plays: 0, totalCorrect: 0, totalQuestions: total };
  store[key].plays += 1;
  store[key].totalCorrect += score;
  store[key].totalQuestions = total;
  await writeFile(completionsPath, JSON.stringify(store, null, 2));

  response.writeHead(200, { "Content-Type": "application/json" });
  response.end(JSON.stringify({
    plays: store[key].plays,
    averageCorrect: store[key].totalCorrect / store[key].plays,
    totalQuestions: store[key].totalQuestions
  }));
}

async function handleNews(response) {
  const items = [];

  for (const feed of feeds) {
    try {
      const feedResponse = await fetch(feed.url, {
        headers: { "User-Agent": "DaiLyPrototype/0.1 (+local development)" }
      });
      if (!feedResponse.ok) continue;
      const xml = await feedResponse.text();
      items.push(...parseRss(xml, feed));
    } catch {
      // Feed hydration is best-effort; the client has static fallbacks.
    }
  }

  response.writeHead(200, { "Content-Type": "application/json" });
  response.end(JSON.stringify(items.slice(0, 6).map(toNewsRound)));
}

function parseRss(xml, feed) {
  return [...xml.matchAll(/<item\b[\s\S]*?<\/item>/gi)]
    .map((match) => match[0])
    .map((item) => ({
      title: cleanXml(readTag(item, "title")),
      link: cleanXml(readTag(item, "link")),
      description: trimWords(cleanXml(readTag(item, "description")), 80),
      source: feed.source,
      category: cleanXml(readTag(item, "category")) || inferCategory(readTag(item, "title")),
      pubDate: cleanXml(readTag(item, "pubDate"))
    }))
    .filter((item) => item.title && item.link && item.description);
}

function toNewsRound(item, index) {
  const id = `news-live-${index}-${slugify(item.title)}`;
  return {
    id,
    correctId: "human",
    human: {
      title: item.title,
      source: item.source,
      url: item.link,
      lead: item.description,
      body: buildHumanBrief(item),
      context: `${item.source}${item.category ? ` · ${item.category}` : ""}${item.pubDate ? ` · ${formatPubDate(item.pubDate)}` : ""}`
    },
    ai: makeNewsDecoy(item, index),
    blurb:
      "This article came from an established RSS feed. The linked source provides the article context; the decoy uses polished but less reported language."
  };
}

function makeNewsDecoy(item, index) {
  const category = inferCategory(`${item.category} ${item.title} ${item.description}`);
  const locations = {
    Politics: ["Westhaven, England", "Calderbridge, England", "Northport, England", "Dunmore, Scotland", "Ashvale, Wales", "Stonebridge, Canada"],
    World: ["Belvarra City", "Port Selene", "Karsk Province", "Valdris, Eastern Europe", "Meron Bay", "Caldera Islands"],
    Business: ["Riverton, England", "Harlowe Quay", "Eastmere, England", "Portbridge, Australia", "Sandway Industrial Park", "Kelvin Docks"],
    Health: ["Lark County, Oregon", "South Fenwick", "Marshfield, England", "Greenvale, New Zealand", "Millhaven District", "Bayport, Canada"],
    Science: ["Arden Observatory", "New Cambridge, England", "Vale Research Park", "Coldshore Station", "Ridgemont Institute", "Saltern Bay Lab"],
    Culture: ["Bramley, England", "Kingwell Arts Quarter", "Oldmere Festival", "Westbrook Gallery", "Harlow Theatre District", "Copse End Studios"],
    Sports: ["Hawthorne Park", "Eastgate Stadium", "Marlford, England", "Torren Arena", "Crestfield Athletic Ground", "Quarry Lane FC"],
    General: ["Fenwick, England", "Brindleford, England", "Ashcombe, England", "Clearwater, Canada", "Millford, Australia", "Oakrest, Scotland"]
  };
  const people = [
    "Mara Singh", "Ellis Rowan", "Catrin Vale", "Jonah Price", "Nadia Bell", "Thomas Ives",
    "Priya Okafor", "Declan Marsh", "Seren Aldous", "Marcus Thein", "Layla Reeves", "Owen Farrant"
  ];
  const motives = [
    "to shore up support before a committee vote",
    "to protect funding promised during last year's campaign",
    "to answer pressure from local business groups",
    "to avoid delaying a policy review already behind schedule",
    "to satisfy a court order before ministers publish broader rules",
    "to calm residents after weeks of public meetings",
    "to preempt scrutiny ahead of an audit due next quarter",
    "to meet a contractual deadline tied to central government grants",
    "to limit fallout from an internal review leaked last week",
    "to secure the support of two independent board members before a confidence motion"
  ];
  const location = locations[category][index % locations[category].length];
  const person = people[index % people.length];
  const motive = motives[index % motives.length];
  const variant = Math.floor(index / locations[category].length) % 2;

  const templates = {
    Politics: [
      {
        title: `Council papers trigger dispute over ${location.split(",")[0]} reform plan`,
        lead: `Officials in ${location} defended a late change to a public-services proposal after opposition councillors said the revision was added without proper scrutiny.`,
        body: `${person}, a senior adviser involved in the talks, said the change was designed ${motive}. Critics said the timing suggested leaders were trying to contain a split inside the governing group before a scheduled confidence vote.`
      },
      {
        title: `${location.split(",")[0]} lawmakers clash over redacted budget report`,
        lead: `A finance committee in ${location} requested unredacted spending data after auditors said key figures had been removed before the document was tabled.`,
        body: `${person}, chair of the oversight panel, said ministers appeared to have withheld the figures ${motive}. Government spokespeople said the redactions were standard practice under commercial confidentiality rules.`
      }
    ],
    World: [
      {
        title: `Border talks stall after convoy delay near ${location}`,
        lead: `Negotiators said a regional security meeting was paused after local authorities reported a new delay affecting aid and commercial traffic near ${location}.`,
        body: `${person}, who chairs the temporary liaison office, said the measure was introduced ${motive}. Residents described conflicting instructions from police, customs officials and relief workers arriving from three different agencies.`
      },
      {
        title: `Ceasefire monitoring suspended in ${location} after access denied`,
        lead: `International observers said they halted inspections in ${location} after armed escorts were withdrawn without explanation during a scheduled patrol.`,
        body: `${person}, the mission's deputy coordinator, said the suspension was ordered ${motive}. Aid groups said the interruption left thousands of displaced people waiting for supply deliveries already two weeks overdue.`
      }
    ],
    Business: [
      {
        title: `${location.split(",")[0]} employers challenge new freight charge`,
        lead: `Business groups warned that a proposed logistics fee could raise costs for smaller firms in ${location} already struggling with slower order volumes.`,
        body: `${person}, director of a local manufacturers' forum, said the charge appeared designed ${motive}. City officials said the money would be ringfenced for road repairs, port staffing and a long-delayed container yard expansion.`
      },
      {
        title: `Merger probe widens as ${location.split(",")[0]} suppliers raise concerns`,
        lead: `Regulators extended a takeover review after suppliers in ${location} said the deal would leave them dependent on a single distribution network.`,
        body: `${person}, who represents mid-sized contractors in the region, said the group filed new evidence ${motive}. The acquiring company said its proposed remedies had already been accepted by authorities in two other jurisdictions.`
      }
    ],
    Health: [
      {
        title: `Clinic plan in ${location} draws questions over staffing`,
        lead: `Health officials in ${location} said a new care network could shorten appointment waits, but doctors' groups questioned whether enough nurses and GPs had been hired to support the expansion.`,
        body: `${person}, the programme's interim director, said the rollout was accelerated ${motive}. Patient advocates asked for monthly data on cancellations, average travel times to the nearest facility, and emergency transfer rates.`
      },
      {
        title: `${location} hospital trust disputes official waiting-time figures`,
        lead: `A hospital trust in ${location} said published waiting-time statistics did not reflect actual patient experience after community nurses reported a surge in home visits for people turned away from clinics.`,
        body: `${person}, the trust's operations lead, said the discrepancy emerged ${motive}. Health ministry officials said the figures were compiled using nationally standardised definitions and would not be revised before an independent review next spring.`
      }
    ],
    Science: [
      {
        title: `${location} team reports unusual readings in long-running survey`,
        lead: `Researchers at ${location} said fresh measurements from an environmental monitoring project differed significantly from the pattern recorded over the previous three years.`,
        body: `${person}, who leads the field team, said the group repeated its checks ${motive}. The team plans to publish full calibration notes before recommending any changes to the survey's regional reporting model.`
      },
      {
        title: `Data gap clouds findings of ${location} climate study`,
        lead: `Scientists at ${location} said a two-month equipment failure created a gap in their atmospheric dataset, complicating efforts to confirm a trend first flagged last year.`,
        body: `${person}, the project's lead analyst, said the team opted to disclose the gap ${motive}. Peer reviewers said the hole was manageable but urged the group to deploy a backup sensor network before publishing.`
      }
    ],
    Culture: [
      {
        title: `${location} venue delays opening after funding dispute`,
        lead: `Organisers in ${location} postponed a new arts programme after trustees questioned whether promised sponsorship money had been properly secured ahead of the first season.`,
        body: `${person}, the festival's acting director, said the delay was intended ${motive}. Artists said they received revised contracts less than a week before rehearsals were scheduled to begin, leaving sets and travel plans in doubt.`
      },
      {
        title: `${location} gallery removes exhibition after authenticity complaint`,
        lead: `A gallery in ${location} temporarily withdrew a group show after a provenance researcher said documentation for three works failed to meet international lending standards.`,
        body: `${person}, the gallery's collections manager, said the decision was taken ${motive}. The artists involved said they had provided all certificates requested and were not contacted before the works were removed from display.`
      }
    ],
    Sports: [
      {
        title: `${location} fixture review follows complaints from clubs`,
        lead: `League officials said they would review scheduling rules after clubs at ${location} objected to travel demands, short rest windows and a cluster of rearranged fixtures in the run-in.`,
        body: `${person}, who sits on the competition board, said the review was opened ${motive}. Supporters' groups asked why television broadcast slots were approved before clubs had seen the final calendar for the second half of the season.`
      },
      {
        title: `Doping tribunal delays verdict for ${location} athlete`,
        lead: `A sports tribunal postponed its ruling in a case involving a competitor from ${location} after new laboratory evidence was submitted by the defence on the final day of hearings.`,
        body: `${person}, the athlete's legal representative, said the adjournment was requested ${motive}. Anti-doping officials said the delay was procedurally necessary but expressed concern that the case had already taken fourteen months to reach a hearing.`
      }
    ],
    General: [
      {
        title: `${location} residents press officials over delayed project`,
        lead: `Local leaders in ${location} faced renewed questions after a public works timetable slipped for the third time this year without a clear explanation from the contractor.`,
        body: `${person}, the project manager, said the delay reflected a decision ${motive}. Residents said the explanation did not match earlier assurances given at a town hall meeting about costs, staffing levels and permit approvals.`
      },
      {
        title: `${location} council divided over rezoning proposal`,
        lead: `A planning vote in ${location} was deferred after two elected members said they had not received the full impact assessment before being asked to approve a large mixed-use development.`,
        body: `${person}, a council officer assigned to the file, said the deferral was advised ${motive}. Developers said the assessment had been available on the planning portal for three weeks and urged the committee to proceed without further delay.`
      }
    ]
  };

  const tpl = templates[category][variant];
  return {
    ...tpl,
    source: `Synthetic ${category.toLowerCase()} article`,
    context: `${category} · ${location}`
  };
}

function buildHumanBrief(item) {
  const category = inferCategory(`${item.category} ${item.title} ${item.description}`);
  const datePart = item.pubDate ? ` Published ${formatPubDate(item.pubDate)}.` : "";
  const categoryPart = item.category && item.category !== category ? ` Filed under: ${item.category}.` : "";
  return `${item.source} reports this ${category.toLowerCase()} story.${datePart}${categoryPart} Open the source link to read the full article.`;
}

function inferCategory(value = "") {
  const text = cleanXml(value).toLowerCase();
  if (/election|minister|parliament|council|court|policy|government|watchdog|royal|king|queen|trump|biden|senate|mayor|politic/.test(text)) return "Politics";
  if (/ukraine|gaza|israel|russia|china|border|war|foreign|world|global/.test(text)) return "World";
  if (/market|business|company|stock|trade|bank|economy|inflation|tariff|freight/.test(text)) return "Business";
  if (/health|hospital|clinic|doctor|disease|vaccine|patient|medical/.test(text)) return "Health";
  if (/science|climate|space|research|study|survey|data|species/.test(text)) return "Science";
  if (/film|music|book|art|museum|festival|culture|theatre|theater/.test(text)) return "Culture";
  if (/sport|football|soccer|basketball|tennis|league|club|match/.test(text)) return "Sports";
  return "General";
}

function formatPubDate(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric"
  }).format(date);
}

async function serveStatic(pathname, response) {
  const requested = pathname === "/" ? "/index.html" : pathname;
  const filePath = normalize(join(root, requested));

  if (!filePath.startsWith(root)) {
    response.writeHead(403);
    response.end("Forbidden");
    return;
  }

  try {
    const content = await readFile(filePath);
    response.writeHead(200, { "Content-Type": mimeTypes[extname(filePath)] || "application/octet-stream" });
    response.end(content);
  } catch {
    if (!extname(filePath)) {
      const content = await readFile(join(root, "index.html"));
      response.writeHead(200, { "Content-Type": mimeTypes[".html"] });
      response.end(content);
      return;
    }
    response.writeHead(404);
    response.end("Not found");
  }
}

function readRequestBody(request) {
  return new Promise((resolve, reject) => {
    let body = "";
    request.on("data", (chunk) => {
      body += chunk;
      if (body.length > 1_000_000) request.destroy();
    });
    request.on("end", () => resolve(body));
    request.on("error", reject);
  });
}

function readTag(xml, tag) {
  const match = xml.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, "i"));
  return match ? match[1] : "";
}

function cleanXml(value) {
  return value
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, "\"")
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function trimWords(value, limit) {
  const words = value.split(" ");
  return words.length > limit ? `${words.slice(0, limit).join(" ")}...` : value;
}

function slugify(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 36);
}
