# D[AI]LY

A daily puzzle prototype for distinguishing human-made content from AI-made content.

The playable version includes three separate six-round games:

- Poetry
- Visual Art
- News article

It also previews one coming-soon game:

- AI or Nah

Each round shows two specimens. The player picks the one most likely made by a person, gets a short reveal, sees the guess spread from players using the same server, and ends with a shareable score.

## Run Locally

```bash
npm run start
```

Then open `http://127.0.0.1:4173`.

## Editing Content

- `src/data/games.js` contains current/default game labels, intros, source notes, available dates, and default rounds.
- `src/data/archiveData.js` contains date-specific archived rounds for previous-day calendars.
- `src/data/README.md` gives the round shape and editing notes.
- `src/app.js` contains rendering, routing, scoring, sharing, and API behavior.
- `src/styles.css` contains all visual styling.

## Source Strategy

- Poetry uses public-domain poems and links to Poetry Foundation, Project Gutenberg, or Wikisource pages for poem and poet context.
- Visual Art uses source-linked works from Library of Congress, Wikimedia Commons, NARA, museum records, and other source records as the category expands.
- News can hydrate article titles, summaries, and URLs from RSS feeds through `server.mjs`; static fallback cards remain playable if a feed is unavailable.
- Guess spreads are persisted locally in `data/guess-spreads.json`. In production, that file-backed API should be replaced by a hosted database.
