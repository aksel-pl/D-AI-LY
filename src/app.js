import { games } from "./data/games.js";

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
  loadingNews: false,
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
replayButton.addEventListener("click", () =>
  openGame(state.activeGameKey, true, { dateKey: state.boardDate }),
);
homeButton.addEventListener("click", closeGame);
window.addEventListener("popstate", routeFromPath);

renderHub();
routeFromPath();

async function renderHub() {
  gameGrid.innerHTML = "";
  Object.entries(games).forEach(([key, game]) => {
    const wrapper = document.createElement("div");
    wrapper.className = "game-card-wrapper";

    const card = document.createElement(game.comingSoon ? "article" : "a");
    card.className = "game-card";
    if (game.comingSoon) {
      card.dataset.status = "coming-soon";
      card.setAttribute("aria-label", `${game.label} coming soon`);
    } else {
      card.href = routeHref(`/${key}`);
    }
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
    if (!game.comingSoon) {
      wrapper.appendChild(calBtn);
    }
    gameGrid.appendChild(wrapper);
  });
}

function routeHref(path) {
  return location.protocol === "file:" ? `http://127.0.0.1:4173${path}` : path;
}

async function openGame(key, restart = false, options = {}) {
  state.activeGameKey = key;
  state.boardDate = options.dateKey || dateKey;
  const rounds = getRoundsForDate(key, state.boardDate);
  state.roundIndex = 0;
  state.answers = restart ? [] : loadAnswers(key);
  state.spreads = {};
  state.completionStats = null;
  state.completionRecorded = !restart && state.answers.length === rounds.length;

  if (restart) {
    localStorage.removeItem(storageKey(key));
  }

  if (options.push) {
    const query = state.boardDate === dateKey ? "" : `?date=${state.boardDate}`;
    history.pushState(
      { game: key, dateKey: state.boardDate },
      "",
      `/${key}${query}`,
    );
  }

  if (key === "news" && !hasArchivedRounds(key, state.boardDate)) {
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
  const routeKey = location.pathname.slice(1);
  const gameKey = routeKey === "photograph" ? "visual-art" : routeKey;
  if (games[gameKey]) {
    const requestedDate =
      new URLSearchParams(location.search).get("date") || dateKey;
    openGame(gameKey, false, { dateKey: requestedDate });
    return;
  }
  showHome();
}

function renderRound() {
  const game = games[state.activeGameKey];
  const rounds = getActiveRounds();

  if (state.answers.length === rounds.length) {
    renderFinish();
    return;
  }

  const round = rounds[state.roundIndex];
  const answer = state.answers[state.roundIndex];
  state.GUESS_MADE = Boolean(answer);
  gameWindow.dataset.game = state.activeGameKey;
  document.body.dataset.route = state.activeGameKey;
  document.body.dataset.guessMade = String(state.GUESS_MADE);
  gameTitle.textContent = `D[AI]LY ${game.label.toUpperCase()}`;
  gameIntro.textContent = game.intro;
  gameMeta.textContent = game.sourceNote;
  roundCount.textContent = `Round ${state.roundIndex + 1} of ${rounds.length}`;
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
    { ...round.ai, id: "ai", label: "Specimen B" },
  ];
  return shouldSwap(round.id) ? choices.reverse() : choices;
}

function shouldSwap(seed) {
  let total = 0;
  for (const character of `${state.boardDate}:${seed}`)
    total += character.charCodeAt(0);
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
  card
    .querySelector(".pick-button")
    .addEventListener("click", () => submitGuess(round, choice.id));
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

  if (state.activeGameKey === "visual-art") {
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
    correct: selectedId === round.correctId,
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
      body: JSON.stringify({ dateKey: state.boardDate, roundId, selectedId }),
    });
    if (!response.ok) throw new Error("Guess API unavailable");
    const spread = await response.json();
    state.spreads[roundId] = spread;
  } catch {
    state.spreads[roundId] = fallback;
  }
}

function getFallbackSpread(roundId, selectedId) {
  const base = [...roundId].reduce(
    (sum, character) => sum + character.charCodeAt(0),
    0,
  );
  const human = 38 + (base % 45);
  const ai = 100 - human;
  return {
    human: selectedId === "human" ? human + 1 : human,
    ai: selectedId === "ai" ? ai + 1 : ai + 0,
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
    state.roundIndex === getActiveRounds().length - 1 ? "See Score" : "Next";
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
  if (state.roundIndex < getActiveRounds().length - 1) {
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
  const rounds = getActiveRounds();
  const score = state.answers.filter((answer) => answer.correct).length;
  choiceGrid.hidden = true;
  revealPanel.hidden = true;
  finishPanel.hidden = false;
  state.GUESS_MADE = true;
  document.body.dataset.guessMade = "true";
  roundCount.textContent = "Complete";
  finishTitle.textContent =
    score >= 5 ? "Sharp eye." : score >= 3 ? "Signal found." : "Synthetic fog.";
  finishCopy.textContent = `You scored ${score} of ${rounds.length} in ${game.label}.`;
  finishSummary.innerHTML = buildSummary(game);
  averageLine.textContent = "Loading all-user average...";
  archivePanel.innerHTML = buildArchivePanel();
  shareCard.textContent = buildShareText(score, rounds.length);

  if (!state.completionRecorded) {
    state.completionRecorded = true;
    recordCompletion(score, rounds.length);
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
  const rounds = getActiveRounds();
  return state.answers
    .map((answer, index) => {
      const round = rounds[index];
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
      button.addEventListener("click", () =>
        openGame(key, true, { dateKey: button.dataset.date, push: true }),
      );
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
      body: JSON.stringify({
        dateKey: state.boardDate,
        gameKey: state.activeGameKey,
        score,
        total,
      }),
    });
    if (!response.ok) throw new Error("Completion API unavailable");
    state.completionStats = await response.json();
    averageLine.textContent = `All-user average: ${state.completionStats.averageCorrect.toFixed(1)} of ${total} correct across ${state.completionStats.plays} plays.`;
  } catch {
    averageLine.textContent =
      "All-user average is unavailable while the local stats API is offline.";
  }
}

function buildShareText(score, total) {
  const marks = state.answers
    .map((answer) => (answer.correct ? "■" : "□"))
    .join("");
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
  localStorage.setItem(
    storageKey(state.activeGameKey),
    JSON.stringify(state.answers),
  );
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
    day: "numeric",
  }).format(new Date(`${value}T00:00:00`));
}

const calendarState = {
  gameKey: null,
  year: 0,
  month: 0,
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
  if (calendarState.month > 11) {
    calendarState.month = 0;
    calendarState.year += 1;
  }
  if (calendarState.month < 0) {
    calendarState.month = 11;
    calendarState.year -= 1;
  }
  renderCalendar();
}

function renderCalendar() {
  const { gameKey, year, month } = calendarState;
  const available = new Set(games[gameKey].availableDates || []);
  const today = new Date(`${dateKey}T00:00:00`);

  calendarMonthLabel.textContent = new Intl.DateTimeFormat("en", {
    month: "long",
    year: "numeric",
  }).format(new Date(year, month, 1));

  // Disable prev button if we're already before the earliest available date
  const earliest = [...available].sort()[0];
  const earliestDate = earliest ? new Date(`${earliest}T00:00:00`) : today;
  calendarPrev.disabled =
    year < earliestDate.getFullYear() ||
    (year === earliestDate.getFullYear() && month <= earliestDate.getMonth());
  // Disable next button if we're past current month
  calendarNext.disabled =
    year > today.getFullYear() ||
    (year === today.getFullYear() && month >= today.getMonth());

  const firstDay = new Date(year, month, 1).getDay(); // 0 = Sun
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const dayHeaders = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
    .map((d) => `<span class="cal-day-header">${d}</span>`)
    .join("");

  const blanks = Array.from({ length: firstDay }, () => `<span></span>`).join(
    "",
  );

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

  calendarGrid.querySelectorAll(".cal-day--available").forEach((btn) => {
    btn.addEventListener("click", () => {
      calendarDialog.close();
      openGame(calendarState.gameKey, false, {
        dateKey: btn.dataset.date,
        push: true,
      });
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

function getActiveRounds() {
  return getRoundsForDate(state.activeGameKey, state.boardDate);
}

function getRoundsForDate(gameKey, value) {
  return games[gameKey].archivedRounds?.[value] || games[gameKey].rounds;
}

function hasArchivedRounds(gameKey, value) {
  return Boolean(games[gameKey].archivedRounds?.[value]);
}
