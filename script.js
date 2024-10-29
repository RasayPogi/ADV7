const quizData = [
    {
      question: "What is 2 + 2?",
      options: ["3", "4", "5"],
      answer: "4",
    },
    {
      question: "What is 5 - 3?",
      options: ["2", "1", "3"],
      answer: "2",
    },
    {
      question: "What is 3 × 3?",
      options: ["6", "9", "8"],
      answer: "9",
    },
    {
      question: "What is 16 ÷ 4?",
      options: ["2", "3", "4", "5"],
      answer: "4",
    },
    {
      question: "What is 5 + 3?",
      options: ["6", "7", "8", "9"],
      answer: "8",
    },
  ];
  
  const questionEl = document.getElementById("question");
  const optionsListEl = document.getElementById("options-list");
  const nextButton = document.getElementById("next-button");
  const restartButton = document.getElementById("restart-button");
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionEl.textContent = currentQuestion.question;
  
    optionsListEl.innerHTML = "";
    currentQuestion.options.forEach(option => {
      const li = document.createElement("li");
      li.textContent = option;
      li.addEventListener("click", () => selectAnswer(option));
      optionsListEl.appendChild(li);
    });
  
    nextButton.disabled = true; 
  }
  
  function selectAnswer(selectedOption) {
    const correctAnswer = quizData[currentQuestionIndex].answer;
    if (selectedOption === correctAnswer) {
      score++;
    }
    nextButton.disabled = false; 
  }
  
  nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
      loadQuestion();
    } else {
      showFinalScore();
    }
  });
  
  function showFinalScore() {
    questionEl.textContent = `Quiz Complete! Your score is ${score} out of ${quizData.length}.`;
    optionsListEl.innerHTML = "";
    nextButton.classList.add("hidden");
    restartButton.classList.remove("hidden");
  }
  
  restartButton.addEventListener("click", () => {
    score = 0;
    currentQuestionIndex = 0;
    nextButton.classList.remove("hidden");
    restartButton.classList.add("hidden");
    loadQuestion();
  });
  
  loadQuestion();