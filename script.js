var allQuestions = [
  {
    question: "What is the purpose of the 'if' statement in programming?",
    options: [
      { value: "A", text: "To repeat a block of code multiple times" },
      { value: "B", text: "To define a function" },
      { value: "C", text: "To make decisions based on conditions" },
      { value: "D", text: "To declare a variable" },
    ],
    correctAnswer: "C",
  },
  {
    question: "Which of the following data types is used to store a sequence of characters?",
    options: [
      { value: "A", text: "Integer" },
      { value: "B", text: "Float" },
      { value: "C", text: "Boolean" },
      { value: "D", text: "String" },
    ],
    correctAnswer: "D",
  },
  {
    question: "What is the primary purpose of a loop in programming?",
    options: [
      { value: "A", text: "To read data from a file" },
      { value: "B", text: "To execute a block of code repeatedly" },
      { value: "C", text: "To handle exceptions" },
      { value: "D", text: "To create a new variable" },
    ],
    correctAnswer: "B",
  },
  {
    question: "Which of the following is a comparison operator in programming?",
    options: [
      { value: "A", text: "&&" },
      { value: "B", text: "||" },
      { value: "C", text: "==" },
      { value: "D", text: "=" },
    ],
    correctAnswer: "C",
  },
  {
    question: "What is the purpose of a function in programming?",
    options: [
      { value: "A", text: "To store data" },
      { value: "B", text: "To perform a specific task or calculation" },
      { value: "C", text: "To define a class" },
      { value: "D", text: "To declare a constant" },
    ],
    correctAnswer: "B",
  },
  {
    question: "Which keyword is used to define a variable in JavaScript?",
    options: [
      { value: "A", text: "var" },
      { value: "B", text: "function" },
      { value: "C", text: "if" },
      { value: "D", text: "else" },
    ],
    correctAnswer: "A",
  },
  {
    question: "What does the term 'syntax' refer to in programming?",
    options: [
      { value: "A", text: "The logic of the program" },
      { value: "B", text: "The semantics of the program" },
      { value: "C", text: "The structure and rules of the programming language" },
      { value: "D", text: "The speed of the program" },
    ],
    correctAnswer: "C",
  },
  {
    question: "Which of the following is a logical operator in programming?",
    options: [
      { value: "A", text: "+" },
      { value: "B", text: "&&" },
      { value: "C", text: "-" },
      { value: "D", text: "/" },
    ],
    correctAnswer: "B",
  },
  {
    question: "In programming, what is an array?",
    options: [
      { value: "A", text: "A variable that holds a single value" },
      { value: "B", text: "A collection of variables of different types" },
      { value: "C", text: "A collection of variables of the same type" },
      { value: "D", text: "A variable that can change its type" },
    ],
    correctAnswer: "C",
  },
  {
    question: "What is the purpose of the 'return' statement in a function?",
    options: [
      { value: "A", text: "To end the program" },
      { value: "B", text: "To stop a loop" },
      { value: "C", text: "To exit the function and return a value" },
      { value: "D", text: "To declare a variable" },
    ],
    correctAnswer: "C",
  }
];


function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

var dataDiv = document.querySelector(".allQuestions");
shuffle(allQuestions);
var selectedQuestions = allQuestions.slice(0, 5);
selectedQuestions.forEach((questionData, index) => {
  dataDiv.appendChild(generateQuestion(index + 1, questionData));
});

function generateQuestion(questionNo, questionData) {
  const questionDiv = document.createElement("div");
  questionDiv.className = "questionDiv";

  const questionTitle = document.createElement("h3");
  questionTitle.textContent = "Q" + questionNo + ": " + questionData.question;
  questionDiv.appendChild(questionTitle);

  questionData.options.forEach(option => {
    const input = document.createElement("input");
    input.type = "radio";
    input.name = "q" + questionNo;
    input.value = option.value;

    const label = document.createElement("label");
    label.textContent = option.value + ") " + option.text;

    questionDiv.appendChild(input);
    questionDiv.appendChild(label);
    questionDiv.appendChild(document.createElement("br"));
  });

  return questionDiv;
}

function calculateResult() {
  let score = 0;
  for (let i = 0; i < selectedQuestions.length; i++) {
    const options = document.getElementsByName("q" + (i + 1));
    let selectedValue;
    for (let j = 0; j < options.length; j++) {
      if (options[j].checked) {
        selectedValue = options[j].value;
        break;
      }
    }
    if (selectedQuestions[i].correctAnswer === selectedValue) {
      score++;
    }
    highlightCorrectAnswer(i + 1, selectedQuestions[i].correctAnswer);
  }
  alert("Score is " + score);
}

function highlightCorrectAnswer(questionNo, correctAnswer) {
  const options = document.getElementsByName("q" + questionNo);
  for (let j = 0; j < options.length; j++) {
    if (options[j].value === correctAnswer) {
      options[j].nextSibling.style.color = "green";
    }
  }
}

function startTimer(duration, display) {
  var timer = duration, minutes, seconds;
  var interval = setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);
    
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = "Time left: " + minutes + ":" + seconds;

    if (--timer < 0) {
      clearInterval(interval);
      calculateResult();
    }
  }, 1000);
}

window.onload = function () {
  var sixtySeconds = 60,
      display = document.getElementById('time');
  startTimer(sixtySeconds, display);
};