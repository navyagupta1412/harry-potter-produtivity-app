document.addEventListener("DOMContentLoaded", () => {
  //ToDo List 
  const todoForm = document.getElementById("todoForm");
  const todoInput = document.getElementById("todoInput");
  const todoList = document.getElementById("todoList");

  todoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const task = todoInput.value.trim();
    if (task === "") return;

    const li = document.createElement("li");
    li.textContent = task;
    li.addEventListener("click", () => li.classList.toggle("done"));
    todoList.appendChild(li);

    todoInput.value = "";
  });

  //  Pomodoro Timer 
  const timerDisplay = document.getElementById("timer");
  const startBtn = document.getElementById("startBtn");
  const pauseBtn = document.getElementById("pauseBtn");
  const resetBtn = document.getElementById("resetBtn");

  let time = 25 * 60;
  let timerInterval = null;

  function updateTimer() {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    timerDisplay.textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  }

  startBtn.addEventListener("click", () => {
    if (!timerInterval) {
      timerInterval = setInterval(() => {
        if (time > 0) {
          time--;
          updateTimer();
        }
      }, 1000);
    }
  });

  pauseBtn.addEventListener("click", () => {
    clearInterval(timerInterval);
    timerInterval = null;
  });

  resetBtn.addEventListener("click", () => {
    clearInterval(timerInterval);
    timerInterval = null;
    time = 25 * 60;
    updateTimer();
  });

  updateTimer();

  // Notes
  const notesInput = document.getElementById("notesInput");
  const saveNotes = document.getElementById("saveNotes");

  // Load saved notes
  notesInput.value = localStorage.getItem("userNotes") || "";

  saveNotes.addEventListener("click", () => {
    localStorage.setItem("userNotes", notesInput.value);
    alert("Notes saved!");
  });
});
