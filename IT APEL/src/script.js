async function getQuestionFromServerById(questionId) {
  const baseUrl = "https://idefix.informatik.htw-dresden.de:8888/api/quizzes/";
  const response = await fetch(baseUrl + questionId, {
    method: "GET",
    
        headers: {
      "Content-Type": "application/json",
      Authorization: "Basic " + btoa("test@gmail.com:secret"),
    },
  });
  return await response.json();
}

// doRequest-Funktion
function doRequest(questionId) {
  const questionFromServer = getQuestionFromServerById(questionId);
  questionFromServer.then((questions) => {
    console.log(questions);
  });
}

// sendQuestion-Funktion
function sendQuestion() {
  // Frage aus dem Textfeld abrufen
  var question = document.getElementById("question").value;

  // AJAX-Anfrage erstellen
  var xhr = new XMLHttpRequest();

  // URL des Servers festlegen
  var url = "http://irene.informatik.htw-dresden.de";

  // Daten für die Anfrage vorbereiten
  var data = JSON.stringify({ question: question });

  // Anfrage öffnen
  xhr.open("POST", url, true);

  // Setze den Content-Type auf JSON
  xhr.setRequestHeader("Content-Type", "application/json");

  // Callback-Funktion für die Serverantwort
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      // Serverantwort erhalten
      var response = JSON.parse(xhr.responseText);

      // Die Antwort anzeigen
      document.getElementById("answer").innerHTML = response.answer;
    }
  };

  // Anfrage senden
  xhr.send(data);
}

let questions = {
  math: [
    {
      question:
        "Welcher Begriff beschreibt eine Zahl, die durch sich selbst und eins teilbar ist?",
      options: [
        "Primzahl",
        "Zusammengesetzte Zahl",
        "Ganzzahl",
        "Rationale Zahl",
      ],
      correctAnswer: 0,
    },
    {
      question: "Was ist die Nullstelle von",
      mathQuestion: "x^2",
      options: ["0", "3", "4", "5"],
      correctAnswer: 0,
    },
    {
      question: "Wie lautet das Ergebnis",
      mathQuestion: "\\sqrt{81}",
      options: ["9", "10", "15", "6"],
      correctAnswer: 0,
    },
    {
      question: "Was ist die Nullstelle von",
      mathQuestion: "x^2-4x+4",
      options: ["2", "3", "4", "5"],
      correctAnswer: 0,
    },
    {
      question: "Was ist die Nullstelle für",
      mathQuestion: "f(x)=sin(x)",
      options: ["0", "1", "3", "4"],
      correctAnswer: 0,
    },
  ],
  internet: [
    {
      question:
        "Welche der folgenden Protokolle wird verwendet, um Webseiten im World Wide Web (WWW) anzuzeigen?",
      options: ["SMTP", "FTP", "HTTP", "DHCP"],
      correctAnswer: 2,
    },
    {
      question:
        "Welche der folgenden Technologien ermöglicht die drahtlose Verbindung von Geräten mit dem Internet?",
      options: ["WLAN", "Ethernet", "USB", "HDMI"],
      correctAnswer: 0,
    },
    {
      question:
        "Welche der folgenden Sprachen wird hauptsächlich für die Gestaltung des visuellen Erscheinungsbildes von Webseiten verwendet?",
      options: ["Java", "Python", "HTML", "SQL"],
      correctAnswer: 2,
    },
    {
      question:
        "Welche der folgenden Technologien wird verwendet, um eine sichere Verbindung zwischen einem Webserver und einem Browser herzustellen?",
      options: ["SSL/TLS", "FTP", "POP3", "UDP"],
      correctAnswer: 0,
    },
    {
      question:
        "Welches der folgenden Konzepte beschreibt das Verhalten von Webseiten basierend auf Benutzerinteraktionen, ohne die Seite neu zu laden?",
      options: ["AJAX", "HTML5", "XML", "FTP"],
      correctAnswer: 0,
    },
    {
      question:
        "Welche der folgenden Technologien wird verwendet, um Webinhalte auf verschiedenen Bildschirmgrößen und Gerätetypen optimal darzustellen?",
      options: ["JavaScript", "CSS", "JSON", "Ruby"],
      correctAnswer: 1,
    },
  ],
  global: [
    {
      "question": "Welches Getränk wird häufig aus gerösteten Bohnen hergestellt?",
      "options": [
        "Das ist Kaffee",
        "Das ist Tee",
        "Das ist Wasser",
        "Das ist Milch"
      ],
      "correctAnswer": 0
    },
    {
      "question": "Welches Getränk wird typischerweise aus getrockneten Blättern gebrüht?",
      "options": [
        "Das ist Kaffee",
        "Das ist Tee",
        "Das ist Wasser",
        "Das ist Milch"
      ],
      "correctAnswer": 1
    },
    {
      "question": "Welches Getränk ist farblos und geschmacksneutral?",
      "options": [
        "Das ist Kaffee",
        "Das ist Tee",
        "Das ist Wasser",
        "Das ist Milch"
      ],
      "correctAnswer": 2
    },
    {
      "question": "Welches Getränk wird aus Kuhmilch gewonnen?",
      "options": [
        "Das ist Kaffee",
        "Das ist Tee",
        "Das ist Wasser",
        "Das ist Milch"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Welches Getränk enthält normalerweise Koffein und wird heiß serviert?",
      "options": [
        "Das ist Kaffee",
        "Das ist Tee",
        "Das ist Wasser",
        "Das ist Milch"
      ],
      "correctAnswer": 0
    }
  ] ,extrnal:[
    {
      question: "What is this",
      options: [
        "this is caffee",
        "this is Tea",
        "this is water",
        "this is milk",
      ],
      correctAnswer: 1,
    }
   
  ]
 
};






const saveScore = (score) => localStorage.setItem("score", score);
const getScore = () => localStorage.getItem("score");
const removeScore = () => localStorage.removeItem("score");

const openTab = (evt, tabName) => {
  
  var i, tabContent, tabButton;
  

  const nameElement = document.getElementById("name");
  const tabsElement = document.getElementById("tabs");
  const progressElement = document.getElementById("progress");

  nameElement.style.display = "none";
  tabsElement.style.display = "none";
  progressElement.style.display = "block";

  removeScore();


  // to display div  title above question 
  tabContent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }

  // to hide three button in first page
  tabButton = document.getElementsByClassName("tab-button");

  for (i = 0; i < tabButton.length; i++) {
    tabButton[i].className = tabButton[i].className.replace(" active", "");
  }

  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
};

const loadQuestions = (tabID, quetionID, optionsID) => {
  let currentQuestion = 0;
  const quetionElement = document.getElementById(quetionID);
  const optionsElement = document.getElementById(optionsID);

  loadNextQuestions(tabID, quetionElement, optionsElement, currentQuestion);
};

const selectOption = (evt, tabID, correctAnswer, selectedOption) => {
  var i, optionItems;

  let score = getScore() ?? 0;

  optionItems = document.getElementsByClassName("option-item");

  for (i = 0; i < optionItems.length; i++) {
    optionItems[i].className = optionItems[i].className.replace(" active", "");
  }

  evt.target.className += " active";

  if (correctAnswer === selectedOption) {
    score++;
    saveScore(score);
  }

  nextQuestion(tabID.id);
};

const nextQuestion = (tabID) => {
  const quiz = questions[tabID];
  let activeTab = document.getElementById(tabID);
  let question = activeTab.querySelector(".question");
  let options = activeTab.querySelector(".options");
  const steps = document.getElementById("progress-done");

  let currentQuestion = question.getAttribute("data-question");

  let score = getScore() ?? 0;

  if (currentQuestion < quiz.length - 1) {
    currentQuestion++;

    loadNextQuestions(tabID, question, options, currentQuestion);
    setSteps(steps, currentQuestion, quiz.length);
  } else {
    steps.style.width = `100%`;
    loadStatistics(score, activeTab);
  }
};

const setSteps = (steps, currentQuestion, questionsLength) => {
  const procent = (currentQuestion / questionsLength) * 100;

  steps.style.width = `${procent}%`;
};

const loadStatistics = (score, activeTab) => {
  const statisticsElement = document.getElementById("statistics");
  const resultElement = document.getElementById("result");

  activeTab.style.display = "none";
  statisticsElement.style.display = "block";
  resultElement.textContent = score;
};

const loadNextQuestions = (
  tabID,
  quetionElement,
  optionsElement,
  currentQuestion
) => {
  const quiz = questions[tabID];
  let quetion = quiz[currentQuestion];
  let correctAnswer = quetion.correctAnswer;

  let optionElement = "";

  const mathQuestion = document.getElementById("math-quetion-katex");

  quetionElement.textContent = `${currentQuestion + 1}- ${quetion.question}`;

  if (tabID === "math" && quetion.mathQuestion !== undefined) {
    katex.render(quetion.mathQuestion, mathQuestion);
  }

  quetionElement.setAttribute("data-question", currentQuestion);

  quetion.options.forEach((option, idx) => {
    optionElement += `<div class='option-item' onclick='selectOption(event,${tabID},${correctAnswer},${idx})'>${option}</div>`;
  });

  optionsElement.innerHTML = optionElement;
};


  // Your code here
  Object.entries(questions).map(([key, values]) => {
    loadQuestions(key, `${key}-quetion`, `${key}-options`);
  });

const reset = () => {
  removeScore();
  location.reload();
};




 function loadExtenalQuistion() {

  let extrnal = [];
for(let i=0; i<5;i++) {
  let rondomnumber = Math.floor(Math.random() * 10) + 1;

  const questionFromServer = getQuestionFromServerById(rondomnumber);
questionFromServer.then((questions) => {
  let qustionobj = {
    question:questions.text,
    options:questions.options
 
  }
  extrnal.push(qustionobj);
 
});
}
questions.extrnal = extrnal;

}

loadExtenalQuistion();
console.log(questions); 