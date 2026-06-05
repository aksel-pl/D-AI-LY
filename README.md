# D[AI]LY

A daily puzzle prototype for distinguishing human-made content from AI-made content.

The playable version includes three separate six-round games:

- Poetry
- Photograph
- News article

Each round shows two specimens. The player picks the one most likely made by a person, gets a short reveal, sees the guess spread from players using the same server, and ends with a shareable score.

## Run Locally

```bash
npm run start
```

Then open `http://127.0.0.1:4173`.

## Source Strategy

- Poetry uses short excerpts from public-domain poems and links to Poetry Foundation pages for poem and poet context.
- Photographs use source-linked historic images from Library of Congress, Wikimedia Commons, NARA, and museum records.
- News can hydrate article titles, summaries, and URLs from RSS feeds through `server.mjs`; static fallback cards remain playable if a feed is unavailable.
- Guess spreads are persisted locally in `data/guess-spreads.json`. In production, that file-backed API should be replaced by a hosted database.
