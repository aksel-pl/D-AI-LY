# Editing Game Content

Most content edits should happen in this folder.

- `games.js` contains the current/default decks for Poetry, Image, and News, plus game labels, intros, source notes, and available calendar dates.
- `archiveData.js` contains date-specific decks. Add archived rounds under `archivedRounds.<gameKey>["YYYY-MM-DD"]`.
- The Image game still uses the internal key `photograph` so old URLs and saved results keep working.
- `app.js` handles routing, rendering, scoring, sharing, and server calls. Avoid editing it for ordinary content changes.

Round shape:

- `correctId` should stay `"human"` for the current game format.
- `human` is the sourced original.
- `ai` is the synthetic decoy.
- `blurb` is the reveal explanation shown after a guess.
