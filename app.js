const QUIZZES = [
  ["Operating Systems", "Windows tools, installation, configuration and system utilities."],
  ["Security", "Threats, malware, access control, authentication and protection."],
  ["Software Troubleshooting", "Common operating system and application problems."],
  ["Operational Procedures", "Safety, professionalism, documentation and best practices."],
  ["Mixed Review 1", "A mixed review across all Core 2 objective areas."],
  ["Mixed Review 2", "A mixed review across all Core 2 objective areas."],
  ["Mixed Review 3", "A mixed review across all Core 2 objective areas."],
  ["Mixed Review 4", "A mixed review across all Core 2 objective areas."],
  ["Mixed Review 5", "A mixed review across all Core 2 objective areas."],
  ["Final Practice Test", "A comprehensive mixed practice assessment."]
];
const PASS_MARK = 75;
const QUESTION_COUNT = 100;
const TIME_LIMIT = 90 * 60;

let activeQuiz = 0;
let activeQuestionCount = 0;
let questions = [];
let answers = {};
let flagged = new Set();
let current = 0;
let seconds = TIME_LIMIT;
let clock = null;

const $ = id => document.getElementById(id);
const bank = Array.isArray(window.QUESTION_BANK) ? window.QUESTION_BANK : [];

function shuffle(arr) {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[character]);
}

function init() {
  const questionTotal = Math.min(QUESTION_COUNT, bank.length);
  $("quizGrid").innerHTML = QUIZZES.map((quiz, index) => `
    <article class="quiz-card">
      <p class="eyebrow">QUIZ ${String(index + 1).padStart(2, "0")}</p>
      <h3>${quiz[0]}</h3>
      <p>${quiz[1]}</p>
      <div class="card-meta">${questionTotal} questions · 90 minutes · ${PASS_MARK}% to pass</div>
      <button class="btn primary start-btn" data-index="${index}" ${questionTotal ? "" : "disabled"}>Start quiz</button>
    </article>
  `).join("");

  document.querySelectorAll(".start-btn").forEach(button => {
    button.addEventListener("click", () => startQuiz(Number(button.dataset.index)));
  });

  // Do not show a setup warning: quizzes use the available reviewed questions.
  $("bankNotice").hidden = true;
}

function startQuiz(index) {
  if (!bank.length) return;

  activeQuiz = index;
  activeQuestionCount = Math.min(QUESTION_COUNT, bank.length);
  questions = shuffle(bank).slice(0, activeQuestionCount).map(question => ({
    ...question,
    options: shuffle(question.options)
  }));
  answers = {};
  flagged = new Set();
  current = 0;
  seconds = TIME_LIMIT;

  $("quizPanel").classList.remove("hidden");
  $("resultPanel").classList.add("hidden");
  $("quizGrid").classList.add("hidden");
  $("quizTitle").textContent = QUIZZES[index][0];
  $("quizEyebrow").textContent = `QUIZ ${index + 1} · ${activeQuestionCount} QUESTIONS`;
  render();
  startTimer();
  $("quizPanel").scrollIntoView({ behavior: "smooth" });
}

function startTimer() {
  clearInterval(clock);
  updateTimer();
  clock = setInterval(() => {
    seconds--;
    updateTimer();
    if (seconds <= 0) {
      clearInterval(clock);
      submitQuiz(true);
    }
  }, 1000);
}

function updateTimer() {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  $("timer").textContent = `${minutes}:${String(remainingSeconds).padStart(2, "0")}`;
  $("timer").style.color = seconds < 300 ? "#c43d45" : "#0d233a";
}

function render() {
  const question = questions[current];
  const selected = answers[question.id];
  const answeredCount = Object.keys(answers).length;

  $("questionCounter").textContent = `Question ${current + 1} of ${activeQuestionCount}`;
  $("answeredCount").textContent = `${answeredCount} answered`;
  $("progressBar").style.width = `${answeredCount / activeQuestionCount * 100}%`;
  $("questionArea").innerHTML = `
    <h3>${escapeHtml(question.question)}</h3>
    ${question.options.map(option => `
      <label class="option ${selected === option ? "selected" : ""}">
        <input type="radio" name="answer" value="${escapeHtml(option)}" ${selected === option ? "checked" : ""}>
        <span>${escapeHtml(option)}</span>
      </label>
    `).join("")}
  `;

  document.querySelectorAll('input[name="answer"]').forEach(radio => {
    radio.addEventListener("change", () => {
      answers[question.id] = radio.value;
      render();
    });
  });

  $("prevBtn").disabled = current === 0;
  $("nextBtn").textContent = current === activeQuestionCount - 1 ? "Last question" : "Next question";
  $("flagBtn").textContent = flagged.has(question.id) ? "★ Flagged for review" : "☆ Flag for review";
  $("questionNav").innerHTML = questions.map((item, index) => `
    <button class="qnav ${index === current ? "current" : ""} ${answers[item.id] ? "done" : ""} ${flagged.has(item.id) ? "flagged" : ""}" data-q="${index}">${index + 1}</button>
  `).join("");
  document.querySelectorAll(".qnav").forEach(button => {
    button.addEventListener("click", () => {
      current = Number(button.dataset.q);
      render();
    });
  });
}

$("prevBtn").addEventListener("click", () => {
  if (current > 0) {
    current--;
    render();
  }
});

$("nextBtn").addEventListener("click", () => {
  if (current < activeQuestionCount - 1) {
    current++;
    render();
  }
});

$("flagBtn").addEventListener("click", () => {
  const id = questions[current].id;
  flagged.has(id) ? flagged.delete(id) : flagged.add(id);
  render();
});

$("submitBtn").addEventListener("click", () => {
  const unanswered = activeQuestionCount - Object.keys(answers).length;
  if (unanswered && !confirm(`You have ${unanswered} unanswered questions. Submit anyway?`)) return;
  submitQuiz(false);
});

function submitQuiz(timedOut) {
  clearInterval(clock);
  let correct = 0;
  questions.forEach(question => {
    if (answers[question.id] === question.answer) correct++;
  });

  const percentage = Math.round(correct / activeQuestionCount * 100);
  const passed = percentage >= PASS_MARK;
  $("quizPanel").classList.add("hidden");
  $("resultPanel").classList.remove("hidden");
  $("resultPanel").innerHTML = `
    <p class="eyebrow">QUIZ RESULTS ${timedOut ? "· TIME EXPIRED" : ""}</p>
    <h2>${passed ? '<span class="pass">Congratulations — PASS</span>' : '<span class="fail">Not passed yet</span>'}</h2>
    <p class="score">${percentage}%</p>
    <p>You answered ${correct} of ${activeQuestionCount} questions correctly. ${PASS_MARK}% is required to pass.</p>
    <div class="result-actions"><button class="btn primary" id="retryBtn">Try again</button><button class="btn secondary" id="homeBtn">Back to quizzes</button></div>
    <h3>Answer review</h3>
    <div class="answer-review">${questions.map((question, index) => `
      <article><strong>${index + 1}. ${escapeHtml(question.question)}</strong>
      <p class="${answers[question.id] === question.answer ? "pass" : "fail"}">Your answer: ${answers[question.id] ? escapeHtml(answers[question.id]) : "Not answered"}</p>
      <p>Correct answer: ${escapeHtml(question.answer)}</p>
      <p>${escapeHtml(question.explanation || "")}</p></article>
    `).join("")}</div>
  `;
  $("retryBtn").addEventListener("click", () => startQuiz(activeQuiz));
  $("homeBtn").addEventListener("click", () => {
    $("resultPanel").classList.add("hidden");
    $("quizGrid").classList.remove("hidden");
    $("quizGrid").scrollIntoView({ behavior: "smooth" });
  });
  $("resultPanel").scrollIntoView({ behavior: "smooth" });
}

init();
