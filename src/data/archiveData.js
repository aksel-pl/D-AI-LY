const poetrySource = {
  source: "Project Gutenberg",
  url: "https://www.gutenberg.org/ebooks/6682"
};

function poemRound(id, human, ai, blurb) {
  return {
    id,
    correctId: "human",
    human: {
      ...poetrySource,
      ...human
    },
    ai,
    blurb
  };
}

function newsRound(id, human, ai, blurb) {
  return {
    id,
    correctId: "human",
    human,
    ai,
    blurb
  };
}

function imageRound(id, title, artist, originalImage, replicaImage, blurb) {
  return {
    id,
    correctId: "human",
    human: {
      title,
      author: artist,
      source: "Local artwork original",
      url: originalImage,
      image: originalImage
    },
    ai: {
      title: `${title} replica`,
      author: "AI-generated replica",
      image: replicaImage
    },
    blurb:
      blurb || "This round uses the user-supplied original artwork as the human-made image and the paired copy file as the AI-generated replica."
  };
}

export const archivedRounds = {
  photograph: {
    "2026-06-04": [
      imageRound(
        "image-2026-06-04-basquiat",
        "Horn Players",
        "Jean-Michel Basquiat",
        "./assets/Artworks/Basquait_org.jpg",
        "./assets/Artworks/Basquait_copy.png",
        "Horn Players is a Jean-Michel Basquiat work rooted in jazz, improvisation, and the visual rhythm of repeated marks, symbols, and fragmented language. In this round, the original carries Basquiat's rough immediacy and charged linework, while the replica may smooth or regularize the very instability that gives the painting its force."
      ),
      imageRound(
        "image-2026-06-04-hopper",
        "Chop Suey",
        "Edward Hopper",
        "./assets/Artworks/Hopper_org.jpg",
        "./assets/Artworks/Hopper_copy.png",
        "Chop Suey is one of Edward Hopper's classic scenes of modern public life, where restaurant light, window geometry, and quiet figures create a mood of social distance. Hopper's human strangeness often lives in small asymmetries of posture and light, so the original feels observed rather than merely staged."
      ),
      imageRound(
        "image-2026-06-04-kahlo",
        "Death Mask",
        "Frida Kahlo",
        "./assets/Artworks/Kahlo_org.jpg",
        "./assets/Artworks/Kahlo_copy.png",
        "Death Mask reflects Frida Kahlo's lifelong use of self-image, pain, costume, and symbolic objects to make inner experience visible. The original's power comes from the tension between direct portraiture and ritualized disguise, a balance replicas can miss when they imitate surface details without the same psychological pressure."
      ),
      imageRound(
        "image-2026-06-04-lichtenstein",
        "Preparedness",
        "Roy Lichtenstein",
        "./assets/Artworks/Liechtenstein_org.jpg",
        "./assets/Artworks/Liechtenstein_copy.png",
        "Preparedness shows Roy Lichtenstein's interest in mass-media style, comic-book graphics, and the strange coolness of mechanical-looking marks. The original is not just pop polish: its flat color, graphic contour, and deliberate Ben-Day-dot language turn reproduced imagery into a carefully controlled painting."
      ),
      imageRound(
        "image-2026-06-04-picasso",
        "Bust of a Woman with a Flowered Hat (Dora Maar), 1943",
        "Pablo Picasso",
        "./assets/Artworks/Picasso_org.jpeg",
        "./assets/Artworks/Picasso_copy.png",
        "Bust of a Woman with a Flowered Hat (Dora Maar), 1943 comes from Picasso's wartime portraits of Dora Maar, where fractured form and decorative intensity sit beside emotional unease. The original's distortions are purposeful and tense, not errors; each angled plane and color decision contributes to the portrait's uneasy presence."
      ),
      imageRound(
        "image-2026-06-04-minun",
        "Free Sky",
        "Yue Minjun",
        "./assets/Artworks/minun_org.jpg",
        "./assets/Artworks/minun_copy.png",
        "Free Sky is by Yue Minjun, whose instantly recognizable laughing figures often turn cheerfulness into something uncanny, satirical, and uneasy. In the original, repetition, expression, and open space work together; the AI copy may reproduce the grin while losing the deliberate social bite behind it."
      )
    ]
  },
  news: {
    "2026-06-04": [
      newsRound(
        "news-2026-06-04-aljazeera-iran",
        {
          title: "Iran war day 97: Tehran says no progress in talks; Israel attacks Lebanon",
          source: "Al Jazeera",
          url: "https://www.aljazeera.com/news/2026/6/4/iran-war-day-97-tehran-says-no-progress-in-talks-israel-attacks-lebanon",
          lead: "Iran's foreign minister said channels with the United States remained open even as talks showed no progress, while Kuwait reported casualties after Iranian strikes and Israel carried out new attacks in Lebanon.",
          body: "Al Jazeera's June 4 live-style roundup tracked the US-Iran conflict, Gulf attacks, and a conditional Israel-Lebanon ceasefire.",
          context: "World · Jun 4, 2026"
        },
        {
          title: "Regional talks continue as officials describe cautious opening",
          source: "Synthetic world article",
          lead: "Diplomats in Meron Bay said negotiators had agreed to extend shuttle talks after several delegations reported progress on a framework for maritime inspections.",
          body: "A liaison official said the talks were designed to reduce uncertainty before a ministerial summit, but aid groups said the announcement did not address worsening conditions in nearby border towns.",
          context: "World · Jun 4, 2026"
        },
        "The real item carries specific actors, casualties, and named theaters of conflict. The decoy smooths those tensions into diplomatic atmosphere."
      ),
      newsRound(
        "news-2026-06-04-guardian-war-powers",
        {
          title: "Trump news at a glance: rare rebuke for president as four House Republicans side with Democrats to pass war powers resolution",
          source: "The Guardian",
          url: "https://www.theguardian.com/us-news/2026/jun/04/all",
          lead: "The Guardian summarized a House vote aimed at curbing Trump's Iran war powers, noting that four Republicans joined Democrats and that the president attacked the defectors afterward.",
          body: "The story appeared in The Guardian's June 4 US news archive alongside live politics coverage.",
          context: "US politics · Jun 4, 2026"
        },
        {
          title: "Lawmakers seek review after executive order draws bipartisan concern",
          source: "Synthetic politics article",
          lead: "A congressional oversight panel requested a classified briefing after members from both parties said a recent national security order had bypassed normal consultation procedures.",
          body: "Committee staff said the review would clarify whether agencies had been given consistent instructions, while administration officials insisted the order was limited and temporary.",
          context: "US politics · Jun 4, 2026"
        },
        "Real political copy usually names the chamber, vote, factional split, and immediate response. The decoy stays plausible but avoids the hard numbers."
      ),
      newsRound(
        "news-2026-06-04-euronews-spacex",
        {
          title: "SpaceX targets biggest IPO in history with $1.75tn valuation",
          source: "Euronews",
          url: "https://www.euronews.com/2026/06/04",
          lead: "Euronews reported that SpaceX planned to list shares at $135, valuing the company at about $1.77 trillion and potentially making the offering the largest IPO on record.",
          body: "The item appeared in Euronews' June 4 archive under business coverage.",
          context: "Business · Jun 4, 2026"
        },
        {
          title: "Launch company prepares market debut after private valuation surge",
          source: "Synthetic business article",
          lead: "A privately held aerospace group told investors it was preparing a public listing that could value the company above several established industrial giants.",
          body: "Bankers said the timing reflected renewed appetite for space infrastructure, though analysts warned that regulatory reviews could delay the proposed share sale.",
          context: "Business · Jun 4, 2026"
        },
        "The real lead is anchored by a valuation, share price, and source archive. The decoy imitates business framing while withholding the concrete filing details."
      ),
      newsRound(
        "news-2026-06-04-ap-putin",
        {
          title: "Putin says Russia will bolster its air defenses in response to Ukrainian drone attacks",
          source: "Associated Press",
          url: "https://apnews.com/article/33f3e7f260e23563ed8a6b509650079e",
          lead: "AP reported from St. Petersburg that Vladimir Putin said Russia would strengthen air defenses after Ukrainian drone strikes reached deep inside the country and overshadowed a major economic forum.",
          body: "The story followed a Ukrainian strike on a St. Petersburg oil terminal the previous day.",
          context: "World · Jun 4, 2026"
        },
        {
          title: "Moscow officials announce security review after overnight air incidents",
          source: "Synthetic world article",
          lead: "Russian officials said a federal review would examine gaps in regional air protection after several unmanned aircraft were intercepted near transport hubs.",
          body: "Local governors said the review was precautionary and would not disrupt a scheduled trade conference, while residents reported temporary internet outages.",
          context: "World · Jun 4, 2026"
        },
        "AP's version names Putin, St. Petersburg, Ukraine, and the economic forum. The decoy blurs those into official process language."
      ),
      newsRound(
        "news-2026-06-04-guardian-amazon",
        {
          title: "Amazon expands ultra-fast deliveries in UK and adds same-day fruit and veg",
          source: "The Guardian",
          url: "https://www.theguardian.com/technology/2026/jun/04/all",
          lead: "The Guardian reported that Amazon would bring deliveries in 30 minutes or less to Manchester and Birmingham while starting a same-day fresh grocery service in London.",
          body: "The story appeared in The Guardian's June 4 technology archive.",
          context: "Technology · Jun 4, 2026"
        },
        {
          title: "Retail platform widens rapid courier service in major cities",
          source: "Synthetic technology article",
          lead: "A large online retailer said customers in three metropolitan areas would soon be able to receive household essentials through a faster local courier network.",
          body: "The company said the expansion would rely on smaller fulfillment sites, though labor groups questioned whether the timetable gave drivers enough preparation.",
          context: "Technology · Jun 4, 2026"
        },
        "The real lead has city names and a concrete service promise. The decoy replaces those with category language."
      ),
      newsRound(
        "news-2026-06-04-euronews-drought",
        {
          title: "How soil health could be Europe's best drought defence",
          source: "Euronews",
          url: "https://www.euronews.com/2026/06/04",
          lead: "Euronews covered a French study arguing that regenerative farming could preserve enough wheat during drought to make roughly 130 million baguettes.",
          body: "The item appeared in Euronews' June 4 archive under water and climate coverage.",
          context: "Environment · Jun 4, 2026"
        },
        {
          title: "Researchers say farm soil programme may soften drought losses",
          source: "Synthetic environment article",
          lead: "Agricultural researchers said improved soil practices could help European farms retain more moisture during dry spells, but warned that benefits would vary by region.",
          body: "The study's authors called for pilot projects before subsidy rules are rewritten, saying farmers needed clearer evidence about costs and yields.",
          context: "Environment · Jun 4, 2026"
        },
        "The real summary includes a memorable quantified comparison. The decoy sounds reasonable but lacks the reporting hook."
      )
    ],
    "2026-06-03": [
      newsRound(
        "news-2026-06-03-ap-ukraine-drones",
        {
          title: "Ukrainian drones hit St. Petersburg oil terminal before city hosts Russian economic forum",
          source: "Associated Press",
          url: "https://apnews.com/article/887969921c595f3a81c3b6c0b120b5f3",
          lead: "AP reported that Ukrainian long-range drones struck an oil terminal in St. Petersburg, sending smoke over the city before Russia's major investment forum opened there.",
          body: "The report said the drones traveled more than 1,000 kilometers and followed a major Russian attack on Kyiv and other Ukrainian cities.",
          context: "World · Jun 3, 2026"
        },
        {
          title: "Drone fire near northern port disrupts investment gathering",
          source: "Synthetic world article",
          lead: "Authorities said an overnight drone incident near a northern port caused a brief airport delay as officials prepared to host an international business conference.",
          body: "Regional leaders said no major infrastructure was damaged, but residents described smoke near industrial storage sites and reduced mobile service through the morning.",
          context: "World · Jun 3, 2026"
        },
        "The real AP lead carries distance, place, actor, and timing. The decoy keeps the silhouette but strips out identifying pressure."
      ),
      newsRound(
        "news-2026-06-03-ap-hostage",
        {
          title: "Suspect who took 10 people hostage in California standoff has been shot and killed, police say",
          source: "Associated Press",
          url: "https://apnews.com/article/bf4cf78abb0f06cc4bb2c9a92d799d34",
          lead: "AP reported that the FBI shot and killed a man who had taken 10 school employees hostage in a Southern California office building and claimed explosives were involved.",
          body: "The story was published June 3 and cited local police accounts of the overnight standoff.",
          context: "US · Jun 3, 2026"
        },
        {
          title: "Police end office standoff after threats force evacuation",
          source: "Synthetic crime article",
          lead: "Federal officers ended a standoff at a suburban office complex after a man threatened staff and claimed he had access to explosive materials.",
          body: "Investigators said they were reviewing communications from the suspect, while nearby schools delayed opening as a precaution.",
          context: "US · Jun 3, 2026"
        },
        "The real lead is specific about the hostage count, school employees, and Southern California. The decoy is deliberately generic."
      ),
      newsRound(
        "news-2026-06-03-guardian-el-nino",
        {
          title: "Prepare for imminent return of El Nino, UN warns",
          source: "The Guardian",
          url: "https://www.theguardian.com/theguardian/2026/jun/03",
          lead: "The Guardian's June 3 front page reported a UN warning that El Nino, which can intensify weather extremes, had an 80% chance of forming before September.",
          body: "The item appeared in The Guardian's June 3 top stories archive.",
          context: "Climate · Jun 3, 2026"
        },
        {
          title: "Forecasters warn ocean pattern could intensify summer extremes",
          source: "Synthetic climate article",
          lead: "International meteorologists said a warming pattern in the Pacific may return later this year, raising the odds of heat, drought, and heavy rainfall in vulnerable regions.",
          body: "Officials urged governments to update emergency plans while noting that local impacts would depend on the timing and strength of the pattern.",
          context: "Climate · Jun 3, 2026"
        },
        "The real item has a UN attribution and a sharp probability. The decoy has the correct topic but softer sourcing."
      ),
      newsRound(
        "news-2026-06-03-guardian-water",
        {
          title: "South West Water fined GBP1.85m over parasite outbreak in Devon",
          source: "The Guardian",
          url: "https://www.theguardian.com/theguardian/2026/jun/03",
          lead: "The Guardian reported that South West Water was fined after pleading guilty to supplying water unfit for human consumption during a parasite outbreak in Devon.",
          body: "The story appeared in The Guardian's June 3 UK news listings.",
          context: "UK · Jun 3, 2026"
        },
        {
          title: "Utility accepts penalty after contamination report",
          source: "Synthetic UK article",
          lead: "A regional water supplier accepted a financial penalty after investigators found failures in how it responded to a contamination alert affecting several villages.",
          body: "The company said it had upgraded monitoring systems and apologized to customers, while local officials called for stronger enforcement powers.",
          context: "UK · Jun 3, 2026"
        },
        "The real lead names the company, amount, legal plea, disease context, and county. The decoy sounds like a regulatory brief without those anchors."
      ),
      newsRound(
        "news-2026-06-03-euronews-microsoft",
        {
          title: "Microsoft launches its own AI models to take on OpenAI and Anthropic",
          source: "Euronews",
          url: "https://www.euronews.com/2026/06/03?p=3",
          lead: "Euronews reported that Microsoft unveiled seven in-house AI models at Build 2026, signaling an effort to cut costs and compete directly at the frontier.",
          body: "The story appeared in Euronews' June 3 technology archive.",
          context: "Technology · Jun 3, 2026"
        },
        {
          title: "Software giant unveils model suite as AI costs rise",
          source: "Synthetic technology article",
          lead: "A major cloud provider introduced a new family of AI systems aimed at reducing dependence on outside labs while giving developers more control over price and latency.",
          body: "Executives said the models would be available in preview to enterprise customers, though independent benchmarks had not yet been released.",
          context: "Technology · Jun 3, 2026"
        },
        "The real lead names Microsoft, OpenAI, Anthropic, Build 2026, and the number of models. The decoy floats in industry generalities."
      ),
      newsRound(
        "news-2026-06-03-reuters-markets",
        {
          title: "Wall Street eases as Middle East tensions escalate",
          source: "Reuters",
          url: "https://ca.investing.com/news/economy-news/wall-street-eases-as-middle-east-tensions-escalate-4674449",
          lead: "Reuters reported that US stocks pulled back from record highs as Middle East tensions pushed crude prices higher and prompted investors to take profits.",
          body: "The Reuters story, mirrored by Investing.com, was published June 3 and cited pressure on financials, tech, and small-cap shares.",
          context: "Markets · Jun 3, 2026"
        },
        {
          title: "Stocks slip as traders weigh overseas risks and rate outlook",
          source: "Synthetic markets article",
          lead: "Major indexes edged lower after investors reassessed geopolitical risks, energy prices, and the path of interest rates following a strong multiweek rally.",
          body: "Market strategists said trading remained orderly, though several growth sectors gave back part of the previous session's gains.",
          context: "Markets · Jun 3, 2026"
        },
        "The real Reuters lead links oil, regional tensions, record highs, and profit-taking. The decoy reads like a reusable market wrap."
      )
    ]
  }
};

archivedRounds.poetry = {
  "2026-06-04": [
    poemRound(
      "poetry-2026-06-04-joyce-army",
      {
        title: "I Hear an Army",
        author: "James Joyce",
        source: "Project Gutenberg",
        url: "https://www.gutenberg.org/ebooks/20601",
        poem: [
          "I hear an army charging upon the land,",
          "And the thunder of horses plunging, foam about their heels:",
          "Arrogant, in black armour, behind them stand,",
          "Disdaining the reins, with fluttering whips, the charioteers.",
          "",
          "They cry unto the night their battle-name:",
          "I moan in sleep when I hear afar their whirling laughter.",
          "They cleave the gloom of dreams, a blinding flame,",
          "Clanging, clanging upon the heart as upon an anvil.",
          "",
          "They come shaking in triumph their long, green hair:",
          "They come out of the sea and run shouting by the shore.",
          "My heart, have you no wisdom thus to despair?",
          "My love, my love, my love, why have you left me alone?"
        ]
      },
      {
        title: "Riders in the Sleep",
        author: "Synthetic verse",
        poem: [
          "I hear a cavalry breaking through the foam,",
          "And iron hooves come beating at the sand;",
          "Black-helmed figures drive the darkness home,",
          "With lifted lashes trembling in the hand.",
          "",
          "They shout a name the sleeping world cannot keep,",
          "And laughter circles like a burning wheel;",
          "They strike the heart's locked anvil out of sleep,",
          "Until the dreamer wakes to what is real.",
          "",
          "They rise from waves with streaming hair and cries,",
          "They run along the shore and leave no track;",
          "O heart, why answer terror with surprise?",
          "O love, why do you never answer back?"
        ]
      },
      "Before Joyce became famous for radical prose, Chamber Music showed his early ear for lyric pattern, song, and dreamlike repetition. This poem begins like a martial vision and ends as abandoned love; the invasion imagery turns private heartbreak into a nightmare of hooves, armour, sea-wind, and sound."
    ),
    poemRound(
      "poetry-2026-06-04-pound-metro",
      {
        title: "In a Station of the Metro",
        author: "Ezra Pound",
        source: "Project Gutenberg",
        url: "https://www.gutenberg.org/ebooks/41162",
        poem: [
          "The apparition of these faces in the crowd:",
          "Petals on a wet, black bough."
        ]
      },
      {
        title: "Platform Image",
        author: "Synthetic verse",
        poem: [
          "Faces flare briefly under the station lamps:",
          "Pale blossoms caught on a rain-dark branch."
        ]
      },
      "Ezra Pound's Imagist work pushed for compression, hardness, and direct presentation rather than explanation. This tiny poem is almost all image: a crowd in a modern transit space is suddenly seen as petals on a dark branch, making urban perception feel momentary, visual, and exact."
    ),
    poemRound(
      "poetry-2026-06-04-hd-oread",
      {
        title: "Oread",
        author: "H.D.",
        source: "Poetry Foundation",
        url: "https://www.poetryfoundation.org/poems/48186/oread",
        poem: [
          "Whirl up, sea--",
          "whirl your pointed pines,",
          "splash your great pines",
          "on our rocks,",
          "hurl your green over us,",
          "cover us with your pools of fir."
        ]
      },
      {
        title: "Mountain Surf",
        author: "Synthetic verse",
        poem: [
          "Rise up, water--",
          "lift your needled forests,",
          "throw your dark branches",
          "against our stone,",
          "pour your green weather over us,",
          "bury us under your cedar foam."
        ]
      },
      "H.D. was central to Imagism, a movement that prized sharp images, compression, and exact sensory force. Oread fuses sea and forest so completely that waves become pines and foam becomes fir; the poem's power comes from its imperative rush and its refusal to explain the image after striking it."
    ),
    poemRound(
      "poetry-2026-06-04-teasdale-rains",
      {
        title: "There Will Come Soft Rains",
        author: "Sara Teasdale",
        source: "Project Gutenberg",
        url: "https://www.gutenberg.org/ebooks/591",
        poem: [
          "There will come soft rains and the smell of the ground,",
          "And swallows circling with their shimmering sound;",
          "",
          "And frogs in the pools singing at night,",
          "And wild plum trees in tremulous white;",
          "",
          "Robins will wear their feathery fire",
          "Whistling their whims on a low fence-wire;",
          "",
          "And not one will know of the war, not one",
          "Will care at last when it is done.",
          "",
          "Not one would mind, neither bird nor tree",
          "If mankind perished utterly;",
          "",
          "And Spring herself, when she woke at dawn,",
          "Would scarcely know that we were gone."
        ]
      },
      {
        title: "After the Sirens",
        author: "Synthetic verse",
        poem: [
          "There will be mild rain and a smell in the grass,",
          "And swallows over the empty glass;",
          "",
          "And frogs will sing where the field pools shine,",
          "And branches will whiten along the line;",
          "",
          "Birds will flare in the morning wire",
          "With throats made red by a hidden fire;",
          "",
          "And nothing will ask where the soldiers went,",
          "Or what all the burning towers meant.",
          "",
          "No leaf will grieve and no root will know",
          "If human voices vanish below;",
          "",
          "And Spring, returning with light on her face,",
          "Will open the world in the same green place."
        ]
      },
      "Sara Teasdale's lyric is quiet, musical, and devastating. Written in the shadow of war, it imagines nature continuing beautifully after humanity's self-destruction; the poem's gentleness is what makes its judgment so severe."
    ),
    poemRound(
      "poetry-2026-06-04-mckay-die",
      {
        title: "If We Must Die",
        author: "Claude McKay",
        source: "Poetry Foundation",
        url: "https://www.poetryfoundation.org/poems/44694/if-we-must-die",
        poem: [
          "If we must die, let it not be like hogs",
          "Hunted and penned in an inglorious spot,",
          "While round us bark the mad and hungry dogs,",
          "Making their mock at our accursed lot.",
          "If we must die, O let us nobly die,",
          "So that our precious blood may not be shed",
          "In vain; then even the monsters we defy",
          "Shall be constrained to honor us though dead!",
          "O kinsmen! we must meet the common foe!",
          "Though far outnumbered let us show us brave,",
          "And for their thousand blows deal one death-blow!",
          "What though before us lies the open grave?",
          "Like men we'll face the murderous, cowardly pack,",
          "Pressed to the wall, dying, but fighting back!"
        ]
      },
      {
        title: "At the Wall",
        author: "Synthetic verse",
        poem: [
          "If we are doomed, let no one see us fall",
          "Like frightened beasts behind a broken gate,",
          "While jeering voices gather at the wall",
          "To celebrate the sentence of our fate.",
          "If we must fall, then let the fall be high,",
          "So even those who drove us to the ground",
          "Must turn their faces upward where we lie",
          "And hear our courage making its last sound.",
          "Companions, though the odds around us rise,",
          "Let every hand be lifted, every breath",
          "Become a flame before the darkened skies;",
          "What if the road ahead descends to death?",
          "Pinned by the brutal crowd that blocks the track,",
          "We meet the end, but strike our answer back."
        ]
      },
      "Claude McKay wrote this sonnet during the violence of 1919, and its formal control intensifies its defiance. The poem turns mortal danger into collective dignity, using the sonnet's tight argument to insist that even defeat can be faced with courage and moral force."
    ),
    poemRound(
      "poetry-2026-06-04-crapsey-amaze",
      {
        title: "Amaze",
        author: "Adelaide Crapsey",
        source: "Project Gutenberg",
        url: "https://www.gutenberg.org/ebooks/63010",
        poem: [
          "I know",
          "Not these my hands",
          "And yet I think there was",
          "A woman like me once had hands",
          "Like these."
        ]
      },
      {
        title: "Hands Remembered",
        author: "Synthetic verse",
        poem: [
          "I see",
          "These hands and feel",
          "Some stranger in their bones",
          "Who must have carried such pale hands",
          "Before."
        ]
      },
      "Adelaide Crapsey developed the English cinquain: five lines with a strict syllabic pattern and a sharp final turn. Amaze is tiny but eerie, making self-recognition feel uncertain; the speaker's own hands become evidence of another life almost remembered."
    )
  ],
  "2026-06-03": [
    poemRound(
      "poetry-2026-06-03-joyce-strings",
      {
        title: "Strings in the Earth and Air",
        author: "James Joyce",
        source: "Project Gutenberg",
        url: "https://www.gutenberg.org/ebooks/20601",
        poem: [
          "Strings in the earth and air",
          "Make music sweet;",
          "Strings by the river where",
          "The willows meet.",
          "",
          "There's music along the river",
          "For Love wanders there,",
          "Pale flowers on his mantle,",
          "Dark leaves on his hair.",
          "",
          "All softly playing,",
          "With head to the music bent,",
          "And fingers straying",
          "Upon an instrument."
        ]
      },
      {
        title: "River Instrument",
        author: "Synthetic verse",
        poem: [
          "Strings under leaf and cloud",
          "Make evening clear;",
          "Strings near the water's edge",
          "Are trembling here.",
          "",
          "There is song beside the river",
          "Where Love walks slowly by,",
          "With blossoms at his shoulder",
          "And branches in his eye.",
          "",
          "All gently sounding,",
          "With face to the music turned,",
          "And wandering fingers",
          "On a hidden chord."
        ]
      },
      "This Chamber Music lyric shows Joyce in a deliberately songlike mode, far from the density of Ulysses or Finnegans Wake. The poem personifies Love as a wandering musician, letting river, willow, flower, and instrument merge into a single pastoral soundscape."
    ),
    poemRound(
      "poetry-2026-06-03-pound-pact",
      {
        title: "A Pact",
        author: "Ezra Pound",
        source: "Project Gutenberg",
        url: "https://www.gutenberg.org/ebooks/41162",
        poem: [
          "I make a pact with you, Walt Whitman--",
          "I have detested you long enough.",
          "I come to you as a grown child",
          "Who has had a pig-headed father;",
          "I am old enough now to make friends.",
          "It was you that broke the new wood,",
          "Now is a time for carving.",
          "We have one sap and one root--",
          "Let there be commerce between us."
        ]
      },
      {
        title: "Truce with the Elder",
        author: "Synthetic verse",
        poem: [
          "I strike a bargain with you, old singer--",
          "I have resisted you long enough.",
          "I come like a child grown stubborn",
          "Before a difficult father;",
          "I am old enough now to listen.",
          "You split the timber first,",
          "Now other hands may shape it.",
          "We rise from a common root--",
          "Let speech pass between us."
        ]
      },
      "Pound's A Pact stages literary inheritance as a tense reconciliation with Walt Whitman. The poem is brief, blunt, and almost argumentative: Pound rejects Whitman, then admits a shared American root. Its force comes from turning influence into family conflict, then into a working alliance."
    ),
    poemRound(
      "poetry-2026-06-03-sandburg-fog",
      {
        title: "Fog",
        author: "Carl Sandburg",
        source: "Poetry Foundation",
        url: "https://www.poetryfoundation.org/poems/45032/fog-56d2245d7b36c",
        poem: [
          "The fog comes",
          "on little cat feet.",
          "",
          "It sits looking",
          "over harbor and city",
          "on silent haunches",
          "and then moves on."
        ]
      },
      {
        title: "Mist",
        author: "Synthetic verse",
        poem: [
          "The mist arrives",
          "on soundless animal paws.",
          "",
          "It crouches watching",
          "the docks and streets",
          "with gray shoulders",
          "and then slips away."
        ]
      },
      "Carl Sandburg's free verse often finds American modernity in plain objects, labor, weather, and city life. Fog is famous for its softness and brevity: one metaphor makes the weather alive, watchful, and temporary without adding any explanation."
    ),
    poemRound(
      "poetry-2026-06-03-teasdale-barter",
      {
        title: "Barter",
        author: "Sara Teasdale",
        source: "Project Gutenberg",
        url: "https://www.gutenberg.org/ebooks/442",
        poem: [
          "Life has loveliness to sell,",
          "All beautiful and splendid things,",
          "Blue waves whitened on a cliff,",
          "Soaring fire that sways and sings,",
          "And children's faces looking up",
          "Holding wonder like a cup.",
          "",
          "Life has loveliness to sell,",
          "Music like a curve of gold,",
          "Scent of pine trees in the rain,",
          "Eyes that love you, arms that hold,",
          "And for your spirit's still delight,",
          "Holy thoughts that star the night.",
          "",
          "Spend all you have for loveliness,",
          "Buy it and never count the cost;",
          "For one white singing hour of peace",
          "Count many a year of strife well lost,",
          "And for a breath of ecstasy",
          "Give all you have been, or could be."
        ]
      },
      {
        title: "Exchange",
        author: "Synthetic verse",
        poem: [
          "The world has brightness to trade,",
          "All tender and astonishing things,",
          "Foam opening against a stone,",
          "A fire that leans and sings,",
          "And children's faces lifted high",
          "Holding wonder to the sky.",
          "",
          "The world has brightness to trade,",
          "A song like a golden thread,",
          "Rain in the needles of pine,",
          "Arms that gather, words that are said,",
          "And for the mind's untroubled sight,",
          "Thoughts that glitter through the night.",
          "",
          "Give all you own for loveliness,",
          "Take it and do not measure loss;",
          "For one white hour of quietness",
          "Let years of trouble pay the cost,",
          "And for one breath of lifted being",
          "Spend every dream you have been seeing."
        ]
      },
      "Teasdale's lyric gift is direct, musical, and emotionally lucid. Barter treats beauty as something worth any price, but the poem's catalogue is concrete rather than abstract: waves, fire, faces, rain, arms, and thought all become forms of spiritual currency."
    ),
    poemRound(
      "poetry-2026-06-03-lowell-decade",
      {
        title: "A Decade",
        author: "Amy Lowell",
        source: "Project Gutenberg",
        url: "https://www.gutenberg.org/ebooks/1020",
        poem: [
          "When you came, you were like red wine and honey,",
          "And the taste of you burnt my mouth with its sweetness.",
          "Now you are like morning bread,",
          "Smooth and pleasant.",
          "I hardly taste you at all for I know your savour,",
          "But I am completely nourished."
        ]
      },
      {
        title: "After Years",
        author: "Synthetic verse",
        poem: [
          "When you arrived, you were like summer wine and sugar,",
          "And the flavor of you stung my tongue with brightness.",
          "Now you are like bread at morning,",
          "Plain and warm.",
          "I scarcely notice your taste because I know it,",
          "But I am wholly fed."
        ]
      },
      "Amy Lowell championed Imagism and wrote sensuous, exact poems that often treat feeling through taste, color, and texture. A Decade is a compact love poem about change: passion has not vanished, but it has become sustenance."
    ),
    poemRound(
      "poetry-2026-06-03-crapsey-night",
      {
        title: "November Night",
        author: "Adelaide Crapsey",
        source: "Project Gutenberg",
        url: "https://www.gutenberg.org/ebooks/63010",
        poem: [
          "Listen...",
          "With faint dry sound,",
          "Like steps of passing ghosts,",
          "The leaves, frost-crisp'd, break from the trees",
          "And fall."
        ]
      },
      {
        title: "Autumn Passing",
        author: "Synthetic verse",
        poem: [
          "Hear them...",
          "With thin dry noise,",
          "Like feet of unseen souls,",
          "The leaves, cold-stiffened, loosen from boughs",
          "And drop."
        ]
      },
      "Crapsey's cinquains compress atmosphere into a few exact beats. November Night is almost all sound: frost-crisp leaves become ghostly footsteps, and the final fall arrives with the quiet force of an ending."
    )
  ]
};
