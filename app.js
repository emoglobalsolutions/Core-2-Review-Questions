const QUIZZES = [
 ["Operating Systems","Windows tools, installation, configuration and system utilities."],
 ["Security","Threats, malware, access control, authentication and protection."],
 ["Software Troubleshooting","Common operating system and application problems."],
 ["Operational Procedures","Safety, professionalism, documentation and best practices."],
 ["Mixed Review 1","A mixed review across all Core 2 objective areas."],
 ["Mixed Review 2","A mixed review across all Core 2 objective areas."],
 ["Mixed Review 3","A mixed review across all Core 2 objective areas."],
 ["Mixed Review 4","A mixed review across all Core 2 objective areas."],
 ["Mixed Review 5","A mixed review across all Core 2 objective areas."],
 ["Final Practice Test","A comprehensive mixed practice assessment."]
];
const PASS_MARK=75, QUESTION_COUNT=100, TIME_LIMIT=90*60;
let activeQuiz=0, questions=[], answers={}, flagged=new Set(), current=0, seconds=TIME_LIMIT, clock=null;
const $=id=>document.getElementById(id);
const bank=Array.isArray(window.QUESTION_BANK)?window.QUESTION_BANK:[];
function shuffle(arr){const a=[...arr];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
function escapeHtml(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function init(){
  $("quizGrid").innerHTML=QUIZZES.map((q,i)=>`<article class="quiz-card"><p class="eyebrow">QUIZ ${String(i+1).padStart(2,"0")}</p><h3>${q[0]}</h3><p>${q[1]}</p><div class="card-meta">100 questions · 90 minutes · Pass: 75%</div><button class="btn primary start-btn" data-index="${i}" ${bank.length<100?"disabled":""}>Start quiz</button></article>`).join("");
  document.querySelectorAll(".start-btn").forEach(b=>b.addEventListener("click",()=>startQuiz(Number(b.dataset.index))));
  $("bankNotice").innerHTML=bank.length>=100?`Question bank ready: ${bank.length} questions available. Each attempt randomly selects 100 unique questions.`:`Question bank setup: <strong>${bank.length} sample questions</strong> are included. Add at least 100 reviewed questions to <code>data/questions.js</code> to enable quiz attempts. The ZIP includes the question format and setup guide; the remaining question bank has not been fabricated.`;
}
function startQuiz(index){
  if(bank.length<100)return;
  activeQuiz=index;questions=shuffle(bank).slice(0,QUESTION_COUNT).map(q=>({...q,options:shuffle(q.options)}));answers={};flagged=new Set();current=0;seconds=TIME_LIMIT;
  $("quizPanel").classList.remove("hidden");$("resultPanel").classList.add("hidden");$("quizGrid").classList.add("hidden");
  $("quizTitle").textContent=QUIZZES[index][0];$("quizEyebrow").textContent=`QUIZ ${index+1} · RANDOM QUESTION SET`;
  render();startTimer();$("quizPanel").scrollIntoView({behavior:"smooth"});
}
function startTimer(){clearInterval(clock);updateTimer();clock=setInterval(()=>{seconds--;updateTimer();if(seconds<=0){clearInterval(clock);submitQuiz(true);}},1000);}
function updateTimer(){const m=Math.floor(seconds/60),s=seconds%60;$("timer").textContent=`${m}:${String(s).padStart(2,"0")}`;$("timer").style.color=seconds<300?"#c43d45":"#0d233a";}
function render(){
 const q=questions[current],selected=answers[q.id];
 $("questionCounter").textContent=`Question ${current+1} of ${QUESTION_COUNT}`;
 $("answeredCount").textContent=`${Object.keys(answers).length} answered`;
 $("progressBar").style.width=`${Object.keys(answers).length}%`;
 $("questionArea").innerHTML=`<h3>${escapeHtml(q.question)}</h3>${q.options.map((o,i)=>`<label class="option ${selected===o?"selected":""}"><input type="radio" name="answer" value="${escapeHtml(o)}" ${selected===o?"checked":""}><span><strong>${"ABCD"[i]}.</strong> ${escapeHtml(o)}</span></label>`).join("")}`;
 document.querySelectorAll('input[name="answer"]').forEach(r=>r.addEventListener("change",()=>{answers[q.id]=r.value;render();}));
 $("prevBtn").disabled=current===0;$("nextBtn").textContent=current===99?"Last question":"Next question";
 $("flagBtn").textContent=flagged.has(q.id)?"★ Flagged for review":"☆ Flag for review";
 $("questionNav").innerHTML=questions.map((x,i)=>`<button class="qnav ${i===current?"current":""} ${answers[x.id]?"done":""} ${flagged.has(x.id)?"flagged":""}" data-q="${i}">${i+1}</button>`).join("");
 document.querySelectorAll(".qnav").forEach(b=>b.addEventListener("click",()=>{current=Number(b.dataset.q);render();}));
}
$("prevBtn").addEventListener("click",()=>{if(current>0){current--;render();}});
$("nextBtn").addEventListener("click",()=>{if(current<99){current++;render();}});
$("flagBtn").addEventListener("click",()=>{const id=questions[current].id;flagged.has(id)?flagged.delete(id):flagged.add(id);render();});
$("submitBtn").addEventListener("click",()=>{const unanswered=QUESTION_COUNT-Object.keys(answers).length;if(unanswered&&!confirm(`You have ${unanswered} unanswered questions. Submit anyway?`))return;submitQuiz(false);});
function submitQuiz(timedOut){
 clearInterval(clock);let correct=0;
 questions.forEach(q=>{if(answers[q.id]===q.answer)correct++;});
 const pct=Math.round(correct/QUESTION_COUNT*100),passed=pct>=PASS_MARK;
 $("quizPanel").classList.add("hidden");$("resultPanel").classList.remove("hidden");
 $("resultPanel").innerHTML=`<p class="eyebrow">QUIZ RESULTS ${timedOut?"· TIME EXPIRED":""}</p><h2>${passed?'<span class="pass">Congratulations — PASS</span>':'<span class="fail">Not passed yet — KEEP PRACTISING</span>'}</h2><div class="result-score">${pct}%</div><p><strong>${correct} / 100 correct</strong> · ${100-correct} incorrect or unanswered · Pass mark: ${PASS_MARK}%</p><div class="progress-wrap"><div style="width:${pct}%;background:${passed?'#16834a':'#c43d45'}"></div></div><button class="btn primary" id="retryBtn">Try another random attempt</button> <button class="btn secondary" id="homeBtn">Back to quizzes</button><h3 style="margin-top:28px">Answer review</h3>${questions.map((q,i)=>{const ok=answers[q.id]===q.answer;return `<article class="result-question"><h4>${i+1}. ${escapeHtml(q.question)} <span class="${ok?'pass':'fail'}">${ok?'✓ Correct':'✗ Incorrect'}</span></h4><p class="small">Your answer: ${escapeHtml(answers[q.id]||"Not answered")}</p><p><strong>Correct answer:</strong> ${escapeHtml(q.answer)}</p><div class="explanation">${escapeHtml(q.explanation||"Review this topic in your study materials.")}</div></article>`;}).join("")}`;
 $("retryBtn").addEventListener("click",()=>startQuiz(activeQuiz));$("homeBtn").addEventListener("click",()=>{$("resultPanel").classList.add("hidden");$("quizGrid").classList.remove("hidden");$("quizGrid").scrollIntoView({behavior:"smooth"});});
 $("resultPanel").scrollIntoView({behavior:"smooth"});
}
init();