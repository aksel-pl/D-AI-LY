const games = {
  poetry: {
    label: "Poetry",
    deck: "6 poems",
    intro: "Read two full poems and choose the one written by a human poet.",
    sourceNote: "Human poems are classic public-domain works with Poetry Foundation source links.",
    availableDates: ["2026-06-05"],
    rounds: [
      {
        id: "poetry-hope",
        correctId: "human",
        human: {
          title: "Hope is the thing with feathers",
          author: "Emily Dickinson",
          source: "Poetry Foundation",
          url: "https://www.poetryfoundation.org/poems-and-poets/poems/detail/42889/",
          poem: [
            "Hope is the thing with feathers",
            "That perches in the soul,",
            "And sings the tune without the words,",
            "And never stops at all,",
            "",
            "And sweetest in the gale is heard;",
            "And sore must be the storm",
            "That could abash the little bird",
            "That kept so many warm.",
            "",
            "I've heard it in the chillest land,",
            "And on the strangest sea;",
            "Yet, never, in extremity,",
            "It asked a crumb of me."
          ]
        },
        ai: {
          title: "The Bird That Waits",
          author: "Synthetic verse",
          poem: [
            "Hope is a quiet feathered thing",
            "That settles near the heart,",
            "And hums a song no mouth can sing,",
            "And will not soon depart.",
            "",
            "It brightens most when tempests move",
            "Across the darkened air;",
            "It shelters those who cannot prove",
            "That comfort will be there.",
            "",
            "I heard it where the cold winds rolled,",
            "I heard it out at sea;",
            "And though it gave me warmth to hold,",
            "It asked no gift of me."
          ]
        },
        blurb:
          "Emily Dickinson compressed large metaphysical ideas into startling domestic images. This poem turns hope into a bird that persists without asking anything back."
      },
      {
        id: "poetry-sonnet-18",
        correctId: "human",
        human: {
          title: "Sonnet 18",
          author: "William Shakespeare",
          source: "Poetry Foundation",
          url: "https://www.poetryfoundation.org/poems/45087/sonnet-18-shall-i-compare-thee-to-a-summers-day",
          poem: [
            "Shall I compare thee to a summer's day?",
            "Thou art more lovely and more temperate:",
            "Rough winds do shake the darling buds of May,",
            "And summer's lease hath all too short a date;",
            "Sometime too hot the eye of heaven shines,",
            "And often is his gold complexion dimm'd;",
            "And every fair from fair sometime declines,",
            "By chance or nature's changing course untrimm'd;",
            "But thy eternal summer shall not fade",
            "Nor lose possession of that fair thou ow'st;",
            "Nor shall Death brag thou wander'st in his shade,",
            "When in eternal lines to time thou grow'st:",
            "So long as men can breathe or eyes can see,",
            "So long lives this, and this gives life to thee."
          ]
        },
        ai: {
          title: "Against the Weather",
          author: "Synthetic verse",
          poem: [
            "May I compare you to the summer's light?",
            "You are more gentle than its changing flame;",
            "The wind can bruise the blossoms overnight,",
            "And every season loses what it claims.",
            "The sun grows harsh, then hides behind a cloud,",
            "And every lovely thing is bent by time;",
            "But you shall not be gathered with the crowd,",
            "Nor fade within the weather of my rhyme.",
            "Your brightness will not leave the living page,",
            "Nor death announce your beauty as his own;",
            "For while these lines move forward age by age,",
            "They make a place where you are still known.",
            "While breath remains and reading eyes are free,",
            "This song will keep you living here with me."
          ]
        },
        blurb:
          "Shakespeare's sonnet argues that poetry can preserve beauty against time. Its famous opening is plainspoken, but the poem quickly becomes a wager about art and mortality."
      },
      {
        id: "poetry-tyger",
        correctId: "human",
        human: {
          title: "The Tyger",
          author: "William Blake",
          source: "Poetry Foundation",
          url: "https://www.poetryfoundation.org/poems/43687/the-tyger",
          poem: [
            "Tyger Tyger, burning bright,",
            "In the forests of the night;",
            "What immortal hand or eye,",
            "Could frame thy fearful symmetry?",
            "",
            "In what distant deeps or skies",
            "Burnt the fire of thine eyes?",
            "On what wings dare he aspire?",
            "What the hand, dare seize the fire?",
            "",
            "And what shoulder, and what art,",
            "Could twist the sinews of thy heart?",
            "And when thy heart began to beat,",
            "What dread hand? and what dread feet?",
            "",
            "What the hammer? what the chain?",
            "In what furnace was thy brain?",
            "What the anvil? what dread grasp",
            "Dare its deadly terrors clasp?",
            "",
            "When the stars threw down their spears",
            "And water'd heaven with their tears:",
            "Did he smile his work to see?",
            "Did he who made the Lamb make thee?",
            "",
            "Tyger Tyger burning bright,",
            "In the forests of the night:",
            "What immortal hand or eye,",
            "Dare frame thy fearful symmetry?"
          ]
        },
        ai: {
          title: "The Burning Animal",
          author: "Synthetic verse",
          poem: [
            "Tiger, tiger, bright with flame,",
            "Moving where the shadows came;",
            "What eternal will or art",
            "Dared to shape your blazing heart?",
            "",
            "From what furnace, fierce and high,",
            "Was the fire of your eye?",
            "Who could lift the burning wire?",
            "Who could hold that living fire?",
            "",
            "What strong shoulder, what strange hand,",
            "Made your hidden sinews stand?",
            "When your dreadful pulse was stirred,",
            "What creator spoke the word?",
            "",
            "What dark hammer, what bright chain,",
            "Forged the terror of your brain?",
            "What deep anvil, what command,",
            "Locked such danger in one hand?",
            "",
            "When the stars fell back in fear,",
            "And the heavens filled with tears,",
            "Did he laugh to see you live?",
            "Did the maker also give",
            "",
            "Lambs their softness, fields their light?",
            "Tiger, tiger, burning bright:",
            "What immortal eye could see",
            "And still frame your symmetry?"
          ]
        },
        blurb:
          "William Blake printed this poem in Songs of Experience. Its chant-like repetition and unanswered questions make creation feel beautiful, violent, and unsettling."
      },
      {
        id: "poetry-ozymandias",
        correctId: "human",
        human: {
          title: "Ozymandias",
          author: "Percy Bysshe Shelley",
          source: "Poetry Foundation",
          url: "https://www.poetryfoundation.org/poems/46565/ozymandias/",
          poem: [
            "I met a traveller from an antique land,",
            "Who said: Two vast and trunkless legs of stone",
            "Stand in the desert. Near them, on the sand,",
            "Half sunk, a shattered visage lies, whose frown,",
            "And wrinkled lip, and sneer of cold command,",
            "Tell that its sculptor well those passions read",
            "Which yet survive, stamped on these lifeless things,",
            "The hand that mocked them and the heart that fed;",
            "And on the pedestal these words appear:",
            "My name is Ozymandias, King of Kings;",
            "Look on my Works, ye Mighty, and despair!",
            "Nothing beside remains. Round the decay",
            "Of that colossal Wreck, boundless and bare",
            "The lone and level sands stretch far away."
          ]
        },
        ai: {
          title: "The King in Sand",
          author: "Synthetic verse",
          poem: [
            "A wanderer told me of a ruined plain,",
            "Where broken pillars lifted from the sand;",
            "Beside them lay a face of old disdain,",
            "Its silent mouth still shaped for harsh command.",
            "The maker must have known the ruler's pride,",
            "For arrogance remained in shattered stone;",
            "The sculpted sneer had somehow not yet died,",
            "Though all the king had governed was unknown.",
            "Upon the base, an ancient boasting read:",
            "I am the lord whose empire none can end;",
            "Behold my greatness, mighty ones, and dread.",
            "But only wind replied to him as friend;",
            "Around the wreck, the empty deserts ran,",
            "And time erased the monument of man."
          ]
        },
        blurb:
          "Shelley's sonnet makes imperial pride collapse into desert emptiness. The poem's human sharpness lives in its layered voices and cold irony."
      },
      {
        id: "poetry-daffodils",
        correctId: "human",
        human: {
          title: "I Wandered Lonely as a Cloud",
          author: "William Wordsworth",
          source: "Poetry Foundation",
          url: "https://www.poetryfoundation.org/poems/45521/i-wandered-lonely-as-a-cloud/",
          poem: [
            "I wandered lonely as a cloud",
            "That floats on high o'er vales and hills,",
            "When all at once I saw a crowd,",
            "A host, of golden daffodils;",
            "Beside the lake, beneath the trees,",
            "Fluttering and dancing in the breeze.",
            "",
            "Continuous as the stars that shine",
            "And twinkle on the milky way,",
            "They stretched in never-ending line",
            "Along the margin of a bay:",
            "Ten thousand saw I at a glance,",
            "Tossing their heads in sprightly dance.",
            "",
            "The waves beside them danced; but they",
            "Out-did the sparkling waves in glee:",
            "A poet could not but be gay,",
            "In such a jocund company:",
            "I gazed—and gazed—but little thought",
            "What wealth the show to me had brought:",
            "",
            "For oft, when on my couch I lie",
            "In vacant or in pensive mood,",
            "They flash upon that inward eye",
            "Which is the bliss of solitude;",
            "And then my heart with pleasure fills,",
            "And dances with the daffodils."
          ]
        },
        ai: {
          title: "The Field Remembered",
          author: "Synthetic verse",
          poem: [
            "I drifted lonely as a cloud",
            "Above the valleys, lakes, and hills,",
            "When suddenly I saw a crowd",
            "Of yellow flowers by the rills;",
            "Beside the water, under trees,",
            "They bent and glittered in the breeze.",
            "",
            "They seemed as endless as the stars",
            "That burn along the midnight way;",
            "They ran in bright unbroken bars",
            "Around the curving edge of bay:",
            "A thousand faces shone at once,",
            "All nodding in a golden dance.",
            "",
            "The little waves beside them played,",
            "But flowers won the happier part;",
            "I watched the shining ranks they made",
            "And felt them gathering in my heart.",
            "I looked and looked, but could not know",
            "How far that memory would go.",
            "",
            "For often when the room is still,",
            "And thought has nowhere else to run,",
            "They rise again beside the hill",
            "And fill the inward eye with sun;",
            "Then solitude becomes a field,",
            "And all its hidden blossoms yield."
          ]
        },
        blurb:
          "Wordsworth turns a remembered walk into a theory of imagination: the daffodils return later as inward wealth, not just scenery."
      },
      {
        id: "poetry-remember",
        correctId: "human",
        human: {
          title: "Remember",
          author: "Christina Rossetti",
          source: "Poetry Foundation",
          url: "https://www.poetryfoundation.org/poems/45000/remember-56d224509b7ae",
          poem: [
            "Remember me when I am gone away,",
            "Gone far away into the silent land;",
            "When you can no more hold me by the hand,",
            "Nor I half turn to go yet turning stay.",
            "Remember me when no more day by day",
            "You tell me of our future that you plann'd:",
            "Only remember me; you understand",
            "It will be late to counsel then or pray.",
            "Yet if you should forget me for a while",
            "And afterwards remember, do not grieve:",
            "For if the darkness and corruption leave",
            "A vestige of the thoughts that once I had,",
            "Better by far you should forget and smile",
            "Than that you should remember and be sad."
          ]
        },
        ai: {
          title: "After I Am Gone",
          author: "Synthetic verse",
          poem: [
            "Remember me when I have gone from sight,",
            "Gone past the reach of voices and the hand;",
            "When all our plans have turned to distant sand,",
            "And day has folded softly into night.",
            "Remember me when no familiar light",
            "Falls where we used to sit and understand;",
            "Only remember me, though time command",
            "The heart to loosen what it held so tight.",
            "Yet if you lose me for a little space",
            "And later find my memory, do not weep;",
            "If grief has left a gentler, quieter place,",
            "Let happiness be something you may keep.",
            "Better to smile when sorrow has been shed",
            "Than hold me only sadly with the dead."
          ]
        },
        blurb:
          "Rossetti's sonnet begins as a plea for memory, then softens into generosity. The turn from grief toward release is the poem's emotional signature."
      }
    ]
  },
  photograph: {
    label: "Photograph",
    deck: "6 photographs",
    intro: "Find the real historic photograph among the synthetic decoy.",
    sourceNote: "Human images link to Library of Congress, Wikimedia Commons, NARA, or museum records.",
    availableDates: ["2026-06-05"],
    rounds: [
      {
        id: "photo-migrant-mother",
        correctId: "human",
        human: {
          title: "Migrant Mother",
          author: "Dorothea Lange",
          year: "1936",
          source: "Library of Congress",
          url: "https://www.loc.gov/pictures/item/2017762891/",
          image: "https://commons.wikimedia.org/wiki/Special:FilePath/Lange-MigrantMother02.jpg?width=900"
        },
        ai: {
          title: "Dust Camp Mother",
          author: "Synthetic image",
          image: "./assets/photo-ai/migrant-mother-decoy.png"
        },
        blurb:
          "Dorothea Lange made this image while documenting Depression-era farm labor for the federal government. Its tension comes from both intimacy and economic emergency."
      },
      {
        id: "photo-steerage",
        correctId: "human",
        human: {
          title: "The Steerage",
          author: "Alfred Stieglitz",
          year: "1907",
          source: "Wikimedia Commons / museum records",
          url: "https://commons.wikimedia.org/wiki/File:Alfred_Stieglitz_-_The_Steerage_-_Google_Art_Project.jpg",
          image: "https://commons.wikimedia.org/wiki/Special:FilePath/Alfred%20Stieglitz%20-%20The%20Steerage%20-%20Google%20Art%20Project.jpg?width=900"
        },
        ai: {
          title: "Passenger Deck Study",
          author: "Synthetic image",
          image: "./assets/photo-ai/steerage-decoy.png"
        },
        blurb:
          "Stieglitz saw modernist form in a shipboard scene: gangways, hats, bodies, and class division all become a dense visual structure."
      },
      {
        id: "photo-powerhouse",
        correctId: "human",
        human: {
          title: "Power House Mechanic",
          author: "Lewis Hine",
          year: "1920",
          source: "Brooklyn Museum / Wikimedia Commons",
          url: "https://www.brooklynmuseum.org/objects/112132",
          image: "https://commons.wikimedia.org/wiki/Special:FilePath/Lewis%20Wickes%20Hine%20-%20Power%20House%20Mechanic%20-%20Google%20Art%20Project%20%28black%20and%20white%29.jpg?width=900"
        },
        ai: {
          title: "Machine Room Worker",
          author: "Synthetic image",
          image: "./assets/photo-ai/powerhouse-decoy.png"
        },
        blurb:
          "Lewis Hine used photography as social argument. Here the worker and machine nearly rhyme, making industrial labor look monumental."
      },
      {
        id: "photo-allie-mae",
        correctId: "human",
        human: {
          title: "Allie Mae Burroughs",
          author: "Walker Evans",
          year: "1936",
          source: "Library of Congress",
          url: "https://www.loc.gov/item/2017762301/",
          image: "https://commons.wikimedia.org/wiki/Special:FilePath/Allie%20Mae%20Burroughs%20print.jpg?width=900"
        },
        ai: {
          title: "Tenant Farmer Portrait",
          author: "Synthetic image",
          image: "./assets/photo-ai/allie-mae-decoy.png"
        },
        blurb:
          "Walker Evans photographed Alabama sharecroppers while working around the material that became Let Us Now Praise Famous Men. The portrait is direct, austere, and unsentimental."
      },
      {
        id: "photo-billie-holiday",
        correctId: "human",
        human: {
          title: "Billie Holiday",
          author: "Carl Van Vechten",
          year: "1949",
          source: "Library of Congress",
          url: "https://www.loc.gov/pictures/item/2004663023/",
          image: "https://tile.loc.gov/storage-services/service/pnp/cph/3c00000/3c09000/3c09700/3c09777v.jpg"
        },
        ai: {
          title: "Studio Singer Portrait",
          author: "Synthetic image",
          image: "./assets/photo-ai/billie-holiday-decoy.png"
        },
        blurb:
          "Carl Van Vechten photographed many writers, performers, and artists in formal studio settings. This portrait of Billie Holiday uses theatrical light and pose to make performance feel intimate."
      },
      {
        id: "photo-breadline",
        correctId: "human",
        human: {
          title: "White Angel Breadline",
          author: "Dorothea Lange",
          year: "1932",
          source: "Wikimedia Commons",
          url: "https://commons.wikimedia.org/wiki/File:White_Angel_Breadline,_San_Francisco,_1932,_by_Dorothea_Lange.jpg",
          image: "https://commons.wikimedia.org/wiki/Special:FilePath/White%20Angel%20Breadline%2C%20San%20Francisco%2C%201932%2C%20by%20Dorothea%20Lange.jpg?width=900"
        },
        ai: {
          title: "Soup Line Figure",
          author: "Synthetic image",
          image: "./assets/photo-ai/breadline-decoy.png"
        },
        blurb:
          "Before her FSA work, Lange photographed San Francisco's Depression breadlines. The turned back and clasped hands make private worry public."
      }
    ]
  },
  news: {
    label: "News Article",
    deck: "6 article leads",
    intro: "Find the real news title and lead. The sourced article links out to the original source.",
    sourceNote: "When served through the local Node server, this game hydrates from BBC, NPR, NYT, The Guardian, Al Jazeera, ABC News, Reuters, and The Washington Post RSS feeds.",
    availableDates: ["2026-06-05"],
    rounds: [
      {
        id: "news-bbc",
        correctId: "human",
        human: {
          title: "BBC News live coverage and latest headlines",
          source: "BBC News",
          url: "https://feeds.bbci.co.uk/news/rss.xml",
          lead: "A real article from BBC's RSS feed appears here when the local server can reach the feed. The lead preserves the original summary text as published by the outlet.",
          body: "BBC News reports on UK and world events, politics, business, health and culture. Open the source link after guessing to read the full original article."
        },
        ai: {
          title: "Officials welcome major new chapter after global developments",
          source: "Synthetic politics article",
          lead: "Councillors in Westhaven, England, defended a late change to a public-services proposal after opposition members said the revision was added without proper scrutiny.",
          body: "Catrin Vale, a senior adviser involved in the talks, said the change was designed to shore up support before a committee vote. Critics said the timing suggested leaders were trying to contain a split inside the governing group before a scheduled confidence motion."
        },
        blurb:
          "Real news leads usually preserve concrete nouns, attribution, dates, places, or measured claims. Synthetic leads often drift toward broad civic language."
      },
      {
        id: "news-npr",
        correctId: "human",
        human: {
          title: "NPR top stories feed",
          source: "NPR",
          url: "https://feeds.npr.org/1001/rss.xml",
          lead: "A real NPR article title and summary appears here when the local server can reach the feed. NPR leads typically carry a specific story angle with named sources and a clear news peg.",
          body: "NPR covers US news, politics, science, arts and international affairs. The live version of this card reflects the current top story from NPR's main RSS feed."
        },
        ai: {
          title: "A new report highlights an uncertain but hopeful road ahead",
          source: "Synthetic health article",
          lead: "Health officials in Lark County, Oregon, said a new clinic network could shorten wait times for rural patients by early autumn, but doctors' groups questioned whether enough staff had been hired to support the expansion.",
          body: "Mara Singh, the programme's interim director, said the rollout was accelerated to preempt scrutiny ahead of an audit due next quarter. Patient advocates asked for monthly data on cancellations, average travel times and emergency transfer rates."
        },
        blurb:
          "NPR leads tend to carry a particular story angle and context. Generic summary prose can sound smooth while avoiding the news peg."
      },
      {
        id: "news-nyt",
        correctId: "human",
        human: {
          title: "The New York Times homepage feed",
          source: "The New York Times",
          url: "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml",
          lead: "A real Times headline and feed summary appears here when the local server can reach the feed. Times leads name the action, the actor, and the stakes in the opening sentence.",
          body: "The New York Times covers US and international news, politics, business, science and culture. The original article remains linked after the reveal."
        },
        ai: {
          title: "Analysis shows pressure building as decision-makers face scrutiny",
          source: "Synthetic politics article",
          lead: "A finance committee in Calderbridge, England, requested unredacted spending data after auditors said key figures had been removed before the document was tabled in parliament.",
          body: "Declan Marsh, chair of the oversight panel, said ministers appeared to have withheld the figures to limit fallout from an internal review leaked last week. Government spokespeople said the redactions were standard practice under commercial confidentiality rules and would not be reconsidered before a scheduled independent review."
        },
        blurb:
          "A real article lead usually names the event or person doing the action. AI-ish decoys often substitute atmosphere for reporting."
      },
      {
        id: "news-guardian",
        correctId: "human",
        human: {
          title: "The Guardian world news feed",
          source: "The Guardian",
          url: "https://www.theguardian.com/world/rss",
          lead: "A real Guardian article title and feed summary appears here when the local server can reach the feed. Guardian world leads typically name the country, conflict or institution driving the story.",
          body: "The Guardian covers global news, UK politics, environment and culture. When the RSS feed is reachable, this card reflects a current linked item with enough detail to judge the writing."
        },
        ai: {
          title: "Ceasefire monitoring suspended in Karsk Province after access denied",
          source: "Synthetic world article",
          lead: "International observers said they halted inspections in Karsk Province after armed escorts were withdrawn without explanation during a scheduled patrol near the eastern administrative boundary.",
          body: "Ellis Rowan, the mission's deputy coordinator, said the suspension was ordered to satisfy a court order before ministers publish broader rules on observer access. Aid groups said the interruption left thousands of displaced people waiting for supply deliveries already two weeks overdue."
        },
        blurb:
          "Real reporting has friction: names, stakes, and a reason the story exists today. Decoys often flatten that friction into consensus language."
      },
      {
        id: "news-feed-5",
        correctId: "human",
        human: {
          title: "Al Jazeera or ABC News live headline",
          source: "News feed",
          url: "https://www.aljazeera.com/xml/rss/all.xml",
          lead: "A real linked article is loaded from Al Jazeera, ABC News, Reuters or another available feed when the server is running. The lead reproduces the outlet's own summary language.",
          body: "Al Jazeera covers Middle East, Africa and global affairs from a Doha-based newsroom. ABC News covers US and international breaking news. Open the source link after guessing for the full article."
        },
        ai: {
          title: "Communities respond as new initiative draws attention across region",
          source: "Synthetic general article",
          lead: "A planning vote in Brindleford, England, was deferred after two elected members said they had not received the full impact assessment before being asked to approve a large mixed-use development near the town centre.",
          body: "Priya Okafor, a council officer assigned to the file, said the deferral was advised to meet a contractual deadline tied to central government grants. Developers said the assessment had been available on the planning portal for three weeks and urged the committee to proceed without further delay."
        },
        blurb:
          "RSS feeds are useful for this game because they provide title, summary, and canonical article URL without scraping full pages."
      },
      {
        id: "news-feed-6",
        correctId: "human",
        human: {
          title: "Reuters or Washington Post live article",
          source: "News feed",
          url: "https://feeds.reuters.com/reuters/topNews",
          lead: "A real linked article is loaded from Reuters, The Washington Post or another available feed when the server is running. The lead preserves the outlet's own phrasing and attribution.",
          body: "Reuters is a global wire service covering breaking news, markets and geopolitics. The Washington Post covers US politics, national security and international affairs in depth."
        },
        ai: {
          title: "Merger probe widens as Harlowe Quay suppliers raise concerns",
          source: "Synthetic business article",
          lead: "Regulators extended a takeover review after suppliers in Harlowe Quay said the deal would leave them dependent on a single distribution network, raising concerns about pricing power and delivery reliability.",
          body: "Marcus Thein, who represents mid-sized contractors in the region, said the group filed new evidence to answer pressure from local business groups before a deadline set by the competition authority. The acquiring company said its proposed remedies had already been accepted by regulators in two other jurisdictions."
        },
        blurb:
          "For production, this game should store fetched article metadata with timestamps so a daily board remains stable all day."
      }
    ]
  }
};

const dateKey = new Date().toLocaleDateString("en-CA");

const state = {
  activeGameKey: null,
  boardDate: dateKey,
  roundIndex: 0,
  answers: [],
  spreads: {},
  completionStats: null,
  completionRecorded: false,
  GUESS_MADE: false,
  zoomLevel: 1,
  loadingNews: false
};

const hub = document.querySelector("#hub");
const gameWindow = document.querySelector("#gameWindow");
const gameGrid = document.querySelector("#gameGrid");
const gameTitle = document.querySelector("#gameTitle");
const gameIntro = document.querySelector("#gameIntro");
const gameMeta = document.querySelector("#gameMeta");
const roundCount = document.querySelector("#roundCount");
const choiceGrid = document.querySelector("#choiceGrid");
const revealPanel = document.querySelector("#revealPanel");
const revealTitle = document.querySelector("#revealTitle");
const revealCopy = document.querySelector("#revealCopy");
const spreadBars = document.querySelector("#spreadBars");
const nextButton = document.querySelector("#nextButton");
const closeGameButton = document.querySelector("#closeGameButton");
const finishPanel = document.querySelector("#finishPanel");
const finishTitle = document.querySelector("#finishTitle");
const finishCopy = document.querySelector("#finishCopy");
const finishSummary = document.querySelector("#finishSummary");
const averageLine = document.querySelector("#averageLine");
const shareCard = document.querySelector("#shareCard");
const shareButton = document.querySelector("#shareButton");
const replayButton = document.querySelector("#replayButton");
const homeButton = document.querySelector("#homeButton");
const archivePanel = document.querySelector("#archivePanel");
const helpButton = document.querySelector("#helpButton");
const helpDialog = document.querySelector("#helpDialog");
const closeHelpButton = document.querySelector("#closeHelpButton");
const calendarDialog = document.querySelector("#calendarDialog");
const closeCalendarButton = document.querySelector("#closeCalendarButton");
const calendarLabel = document.querySelector("#calendarLabel");
const calendarPrev = document.querySelector("#calendarPrev");
const calendarNext = document.querySelector("#calendarNext");
const calendarMonthLabel = document.querySelector("#calendarMonthLabel");
const calendarGrid = document.querySelector("#calendarGrid");
const brandLink = document.querySelector(".brand");
const artworkDialog = document.querySelector("#artworkDialog");
const artworkImage = document.querySelector("#artworkImage");
const artworkStage = document.querySelector("#artworkStage");
const closeArtworkButton = document.querySelector("#closeArtworkButton");
const zoomInButton = document.querySelector("#zoomInButton");
const zoomOutButton = document.querySelector("#zoomOutButton");

helpButton.addEventListener("click", () => helpDialog.showModal());
closeHelpButton.addEventListener("click", () => helpDialog.close());
closeCalendarButton.addEventListener("click", () => calendarDialog.close());
calendarPrev.addEventListener("click", () => stepCalendarMonth(-1));
calendarNext.addEventListener("click", () => stepCalendarMonth(1));
brandLink.href = routeHref("/");
closeArtworkButton.addEventListener("click", () => artworkDialog.close());
zoomInButton.addEventListener("click", () => setZoom(state.zoomLevel + 0.25));
zoomOutButton.addEventListener("click", () => setZoom(state.zoomLevel - 0.25));
closeGameButton.addEventListener("click", closeGame);
nextButton.addEventListener("click", nextRound);
shareButton.addEventListener("click", shareResult);
replayButton.addEventListener("click", () => openGame(state.activeGameKey, true));
homeButton.addEventListener("click", closeGame);
window.addEventListener("popstate", routeFromPath);

renderHub();
routeFromPath();

async function renderHub() {
  gameGrid.innerHTML = "";
  Object.entries(games).forEach(([key, game]) => {
    const wrapper = document.createElement("div");
    wrapper.className = "game-card-wrapper";

    const card = document.createElement("a");
    card.className = "game-card";
    card.href = routeHref(`/${key}`);
    card.innerHTML = `
      <span>${game.deck}</span>
      <strong>${game.label}</strong>
      <small>${game.intro}</small>
    `;

    const calBtn = document.createElement("button");
    calBtn.className = "calendar-trigger";
    calBtn.type = "button";
    calBtn.setAttribute("aria-label", `View previous days for ${game.label}`);
    calBtn.textContent = "Previous days";
    calBtn.addEventListener("click", (event) => {
      event.preventDefault();
      openCalendar(key);
    });

    wrapper.appendChild(card);
    wrapper.appendChild(calBtn);
    gameGrid.appendChild(wrapper);
  });
}

function routeHref(path) {
  return location.protocol === "file:" ? `http://127.0.0.1:4173${path}` : path;
}

async function openGame(key, restart = false, options = {}) {
  state.activeGameKey = key;
  state.boardDate = options.dateKey || dateKey;
  state.roundIndex = 0;
  state.answers = restart ? [] : loadAnswers(key);
  state.spreads = {};
  state.completionStats = null;
  state.completionRecorded = !restart && state.answers.length === games[key].rounds.length;

  if (restart) {
    localStorage.removeItem(storageKey(key));
  }

  if (options.push) {
    const query = state.boardDate === dateKey ? "" : `?date=${state.boardDate}`;
    history.pushState({ game: key, dateKey: state.boardDate }, "", `/${key}${query}`);
  }

  if (key === "news") {
    await hydrateNewsRounds();
  }

  hub.hidden = true;
  gameWindow.hidden = false;
  window.scrollTo({ top: 0 });
  renderRound();
}

function closeGame() {
  showHome();
  if (location.pathname !== "/") {
    history.pushState({}, "", "/");
  }
}

function showHome() {
  state.activeGameKey = null;
  state.GUESS_MADE = true;
  document.body.dataset.route = "home";
  document.body.dataset.guessMade = "true";
  gameWindow.dataset.game = "";
  gameWindow.hidden = true;
  finishPanel.hidden = true;
  revealPanel.hidden = true;
  choiceGrid.hidden = true;
  hub.hidden = false;
}

function routeFromPath() {
  const gameKey = location.pathname.slice(1);
  if (games[gameKey]) {
    const requestedDate = new URLSearchParams(location.search).get("date") || dateKey;
    openGame(gameKey, false, { dateKey: requestedDate });
    return;
  }
  showHome();
}

function renderRound() {
  const game = games[state.activeGameKey];

  if (state.answers.length === game.rounds.length) {
    renderFinish();
    return;
  }

  const round = game.rounds[state.roundIndex];
  const answer = state.answers[state.roundIndex];
  state.GUESS_MADE = Boolean(answer);
  gameWindow.dataset.game = state.activeGameKey;
  document.body.dataset.route = state.activeGameKey;
  document.body.dataset.guessMade = String(state.GUESS_MADE);
  gameTitle.textContent = `D[AI]LY ${game.label.toUpperCase()}`;
  gameIntro.textContent = game.intro;
  gameMeta.textContent = game.sourceNote;
  roundCount.textContent = `Round ${state.roundIndex + 1} of ${game.rounds.length}`;
  revealPanel.hidden = true;
  finishPanel.hidden = true;
  choiceGrid.hidden = false;
  choiceGrid.innerHTML = "";

  getDisplayChoices(round).forEach((choice) => {
    choiceGrid.appendChild(createChoiceCard(round, choice));
  });

  if (answer) {
    showReveal(round, answer);
  }
}

function getDisplayChoices(round) {
  const choices = [
    { ...round.human, id: "human", label: "Specimen A" },
    { ...round.ai, id: "ai", label: "Specimen B" }
  ];
  return shouldSwap(round.id) ? choices.reverse() : choices;
}

function shouldSwap(seed) {
  let total = 0;
  for (const character of `${state.boardDate}:${seed}`) total += character.charCodeAt(0);
  return total % 2 === 0;
}

function createChoiceCard(round, choice) {
  const card = document.createElement("article");
  card.className = "choice-card";
  card.dataset.choice = choice.id;
  card.tabIndex = 0;
  card.role = "button";
  card.ariaLabel = "Select this option";
  card.innerHTML = `
    ${renderChoiceTopline(choice)}
    ${renderChoiceBody(choice)}
    <button class="pick-button" type="button">Guess Human</button>
  `;
  card.querySelector(".pick-button").addEventListener("click", () => submitGuess(round, choice.id));
  card.querySelectorAll(".zoom-button").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      const image = card.querySelector("[data-zoomable]");
      openArtwork(image.currentSrc || image.src, image.alt);
    });
  });
  card.addEventListener("click", () => submitGuess(round, choice.id));
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      submitGuess(round, choice.id);
    }
  });
  return card;
}

function renderChoiceTopline(choice) {
  if (state.activeGameKey === "poetry") {
    return `<div class="poem-heading"><h2>${choice.title}</h2></div>`;
  }

  return `
    <div class="choice-topline">
      <strong>${choice.label}</strong>
      <span>${choice.source || choice.author || choice.source}</span>
    </div>
  `;
}

function renderChoiceBody(choice) {
  if (state.activeGameKey === "poetry") {
    return `
      <blockquote class="poem-text">
        ${choice.poem.map((line) => (line ? `<span>${line}</span>` : "<br />")).join("")}
      </blockquote>
    `;
  }

  if (state.activeGameKey === "photograph") {
    if (choice.id === "human") {
      return `
        <figure class="photo-choice">
          <img src="${choice.image}" alt="${choice.title} by ${choice.author}" data-zoomable="true" />
          <button class="zoom-button" type="button" aria-label="View and zoom image">⌕</button>
          <figcaption>${choice.title}, ${choice.author}${choice.year ? `, ${choice.year}` : ""}</figcaption>
        </figure>
      `;
    }
    return `
      <figure class="photo-choice synthetic-photo">
        <img src="${choice.image}" alt="${choice.title}" data-zoomable="true" />
        <button class="zoom-button" type="button" aria-label="View and zoom image">⌕</button>
        <figcaption>${choice.title}, ${choice.author}</figcaption>
      </figure>
    `;
  }

  return `
    <article class="article-choice">
      <h3>${choice.title}</h3>
      <p>${choice.lead}</p>
      ${choice.body ? `<p class="article-body">${choice.body}</p>` : ""}
      ${choice.context ? `<p class="article-context">${choice.context}</p>` : ""}
      <span>${choice.source}</span>
    </article>
  `;
}

async function submitGuess(round, selectedId) {
  if (state.GUESS_MADE) return;
  const answer = {
    roundId: round.id,
    selectedId,
    correct: selectedId === round.correctId
  };
  state.answers[state.roundIndex] = answer;
  state.GUESS_MADE = true;
  document.body.dataset.guessMade = "true";
  saveAnswers();
  await recordGuess(round.id, selectedId);
  showReveal(round, answer);
}

async function recordGuess(roundId, selectedId) {
  const fallback = getFallbackSpread(roundId, selectedId);
  try {
    const response = await fetch("/api/guess", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ dateKey: state.boardDate, roundId, selectedId })
    });
    if (!response.ok) throw new Error("Guess API unavailable");
    const spread = await response.json();
    state.spreads[roundId] = spread;
  } catch {
    state.spreads[roundId] = fallback;
  }
}

function getFallbackSpread(roundId, selectedId) {
  const base = [...roundId].reduce((sum, character) => sum + character.charCodeAt(0), 0);
  const human = 38 + (base % 45);
  const ai = 100 - human;
  return {
    human: selectedId === "human" ? human + 1 : human,
    ai: selectedId === "ai" ? ai + 1 : ai + 0
  };
}

function showReveal(round, answer) {
  document.querySelectorAll(".choice-card").forEach((card) => {
    const pick = card.querySelector(".pick-button");
    pick.disabled = true;
    card.removeAttribute("tabindex");
    card.removeAttribute("role");
    card.removeAttribute("aria-label");
    card.dataset.selected = String(card.dataset.choice === answer.selectedId);
    card.dataset.correct = String(card.dataset.choice === round.correctId);
  });

  const human = round.human;
  revealTitle.textContent = answer.correct ? "Correct" : "Not quite";
  revealCopy.innerHTML = `<strong>${human.title}</strong> is made by ${human.author || human.source}. ${round.blurb} <a href="${human.url}" target="_blank" rel="noreferrer">Open source</a>`;
  renderSpread(round.id);
  nextButton.textContent =
    state.roundIndex === games[state.activeGameKey].rounds.length - 1 ? "See Score" : "Next";
  revealPanel.hidden = false;
}

function renderSpread(roundId) {
  const spread = state.spreads[roundId] || getFallbackSpread(roundId, "human");
  const total = Math.max(1, spread.human + spread.ai);
  const humanPercent = Math.round((spread.human / total) * 100);
  const aiPercent = 100 - humanPercent;
  spreadBars.innerHTML = `
    <p>Guess spread from players on this server</p>
    <div class="spread-row">
      <span>Human</span>
      <div><i style="width: ${humanPercent}%"></i></div>
      <strong>${humanPercent}%</strong>
    </div>
    <div class="spread-row ai">
      <span>AI</span>
      <div><i style="width: ${aiPercent}%"></i></div>
      <strong>${aiPercent}%</strong>
    </div>
  `;
}

function nextRound() {
  if (state.roundIndex < games[state.activeGameKey].rounds.length - 1) {
    state.roundIndex += 1;
    state.GUESS_MADE = false;
    document.body.dataset.guessMade = "false";
    window.scrollTo({ top: 0 });
    renderRound();
    return;
  }
  renderFinish();
}

function renderFinish() {
  const game = games[state.activeGameKey];
  const score = state.answers.filter((answer) => answer.correct).length;
  choiceGrid.hidden = true;
  revealPanel.hidden = true;
  finishPanel.hidden = false;
  state.GUESS_MADE = true;
  document.body.dataset.guessMade = "true";
  roundCount.textContent = "Complete";
  finishTitle.textContent = score >= 5 ? "Sharp eye." : score >= 3 ? "Signal found." : "Synthetic fog.";
  finishCopy.textContent = `You scored ${score} of ${game.rounds.length} in ${game.label}.`;
  finishSummary.innerHTML = buildSummary(game);
  averageLine.textContent = "Loading all-user average...";
  archivePanel.innerHTML = buildArchivePanel();
  shareCard.textContent = buildShareText(score, game.rounds.length);

  if (!state.completionRecorded) {
    state.completionRecorded = true;
    recordCompletion(score, game.rounds.length);
  }
}

function openArtwork(src, alt) {
  state.zoomLevel = 1;
  artworkImage.src = src;
  artworkImage.alt = alt;
  setZoom(1);
  artworkDialog.showModal();
}

function setZoom(level) {
  state.zoomLevel = Math.min(3, Math.max(0.5, level));
  artworkImage.style.transform = `scale(${state.zoomLevel})`;
  artworkStage.dataset.zoomed = String(state.zoomLevel > 1);
}

function buildSummary(game) {
  return state.answers
    .map((answer, index) => {
      const round = game.rounds[index];
      const pickedHuman = answer.selectedId === "human";
      return `
        <article class="summary-card" data-correct="${answer.correct}">
          <strong>${index + 1}. ${round.human.title}</strong>
          <span>${answer.correct ? "Correct" : "Missed"} · You picked ${pickedHuman ? "Human" : "AI"}</span>
        </article>
      `;
    })
    .join("");
}

function buildArchivePanel() {
  const key = state.activeGameKey;
  const days = [1, 2, 3, 4, 5].map((offset) => {
    const archiveDate = getArchiveDate(offset);
    return `<button class="archive-button" type="button" data-date="${archiveDate}">${formatDate(archiveDate)}</button>`;
  });
  setTimeout(() => {
    document.querySelectorAll(".archive-button").forEach((button) => {
      button.addEventListener("click", () => openGame(key, true, { dateKey: button.dataset.date, push: true }));
    });
  });
  return `
    <p class="eyebrow">Previous days</p>
    <div class="archive-buttons">${days.join("")}</div>
  `;
}

async function recordCompletion(score, total) {
  try {
    const response = await fetch("/api/complete", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ dateKey: state.boardDate, gameKey: state.activeGameKey, score, total })
    });
    if (!response.ok) throw new Error("Completion API unavailable");
    state.completionStats = await response.json();
    averageLine.textContent = `All-user average: ${state.completionStats.averageCorrect.toFixed(1)} of ${total} correct across ${state.completionStats.plays} plays.`;
  } catch {
    averageLine.textContent = "All-user average is unavailable while the local stats API is offline.";
  }
}

function buildShareText(score, total) {
  const marks = state.answers.map((answer) => (answer.correct ? "■" : "□")).join("");
  return `D[AI]LY ${games[state.activeGameKey].label} ${state.boardDate}\n${marks} ${score}/${total}`;
}

async function shareResult() {
  const game = games[state.activeGameKey];
  const score = state.answers.filter((answer) => answer.correct).length;
  const text = buildShareText(score, game.rounds.length);
  try {
    if (navigator.share) {
      await navigator.share({ text });
      return;
    }
    await navigator.clipboard.writeText(text);
    shareButton.textContent = "Copied";
    setTimeout(() => {
      shareButton.textContent = "Share Result";
    }, 1400);
  } catch {
    shareButton.textContent = "Copy blocked";
    setTimeout(() => {
      shareButton.textContent = "Share Result";
    }, 1400);
  }
}

function saveAnswers() {
  localStorage.setItem(storageKey(state.activeGameKey), JSON.stringify(state.answers));
}

function loadAnswers(key) {
  return JSON.parse(localStorage.getItem(storageKey(key)) || "[]");
}

function storageKey(key) {
  return `dai-ly:${state.boardDate}:${key}`;
}

function getArchiveDate(offset) {
  const archive = new Date(`${dateKey}T00:00:00`);
  archive.setDate(archive.getDate() - offset);
  return archive.toLocaleDateString("en-CA");
}

function formatDate(value) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric"
  }).format(new Date(`${value}T00:00:00`));
}

const calendarState = {
  gameKey: null,
  year: 0,
  month: 0
};

function openCalendar(gameKey) {
  const today = new Date(`${dateKey}T00:00:00`);
  calendarState.gameKey = gameKey;
  calendarState.year = today.getFullYear();
  calendarState.month = today.getMonth();
  calendarLabel.textContent = `${games[gameKey].label} — previous days`;
  renderCalendar();
  calendarDialog.showModal();
}

function stepCalendarMonth(delta) {
  calendarState.month += delta;
  if (calendarState.month > 11) { calendarState.month = 0; calendarState.year += 1; }
  if (calendarState.month < 0)  { calendarState.month = 11; calendarState.year -= 1; }
  renderCalendar();
}

function renderCalendar() {
  const { gameKey, year, month } = calendarState;
  const available = new Set(games[gameKey].availableDates || []);
  const today = new Date(`${dateKey}T00:00:00`);

  calendarMonthLabel.textContent = new Intl.DateTimeFormat("en", { month: "long", year: "numeric" }).format(new Date(year, month, 1));

  // Disable prev button if we're already before the earliest available date
  const earliest = [...available].sort()[0];
  const earliestDate = earliest ? new Date(`${earliest}T00:00:00`) : today;
  calendarPrev.disabled = year < earliestDate.getFullYear() ||
    (year === earliestDate.getFullYear() && month <= earliestDate.getMonth());
  // Disable next button if we're past current month
  calendarNext.disabled = year > today.getFullYear() ||
    (year === today.getFullYear() && month >= today.getMonth());

  const firstDay = new Date(year, month, 1).getDay(); // 0 = Sun
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const dayHeaders = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
    .map(d => `<span class="cal-day-header">${d}</span>`).join("");

  const blanks = Array.from({ length: firstDay }, () => `<span></span>`).join("");

  const cells = Array.from({ length: daysInMonth }, (_, i) => {
    const day = i + 1;
    const iso = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    const isAvailable = available.has(iso);
    const isToday = iso === dateKey;
    return `<button
      class="cal-day${isAvailable ? " cal-day--available" : ""}${isToday ? " cal-day--today" : ""}"
      type="button"
      data-date="${iso}"
      ${isAvailable ? "" : "disabled"}
      aria-label="${iso}${isAvailable ? "" : " (no game)"}"
    >${day}</button>`;
  }).join("");

  calendarGrid.innerHTML = dayHeaders + blanks + cells;

  calendarGrid.querySelectorAll(".cal-day--available").forEach(btn => {
    btn.addEventListener("click", () => {
      calendarDialog.close();
      openGame(calendarState.gameKey, false, { dateKey: btn.dataset.date, push: true });
    });
  });
}

async function hydrateNewsRounds() {
  if (state.loadingNews) return;
  state.loadingNews = true;
  try {
    const response = await fetch("/api/news-rounds");
    if (!response.ok) throw new Error("News API unavailable");
    const rounds = await response.json();
    if (rounds.length >= 6) {
      games.news.rounds = rounds.slice(0, 6);
    }
  } catch {
    // Static fallback remains playable when external feeds are unreachable.
  } finally {
    state.loadingNews = false;
  }
}
