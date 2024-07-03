const questions = [
    { category: 'JavaScript', question: 'What is the use of the "let" keyword in JavaScript?', options: ['Declare variables', 'Create constants', 'Define functions', 'Define classes'], answer: 'Declare variables' },
    { category: 'JavaScript', question: 'Which method is used to parse a JSON string into a JavaScript object?', options: ['JSON.parse()', 'JSON.stringify()', 'JSON.toObject()', 'JSON.parseObject()'], answer: 'JSON.parse()' },
    { category: 'JavaScript', question: 'What is the output of "typeof null" in JavaScript?', options: ['object', 'null', 'undefined', 'integer'], answer: 'object' },
    { category: 'JavaScript', question: 'Which of the following is NOT a JavaScript data type?', options: ['Number', 'String', 'Boolean', 'Character'], answer: 'Character' },
    { category: 'JavaScript', question: 'Which method adds one or more elements to the end of an array and returns the new length?', options: ['push()', 'pop()', 'shift()', 'unshift()'], answer: 'push()' },
    { category: 'JavaScript', question: 'What is the correct syntax for referring to an external script called "app.js"?', options: ['<script src="app.js">', '<script name="app.js">', '<script href="app.js">', '<script file="app.js">'], answer: '<script src="app.js">' },
    { category: 'JavaScript', question: 'Which company developed JavaScript?', options: ['Netscape', 'Microsoft', 'Sun Microsystems', 'Oracle'], answer: 'Netscape' },
    { category: 'JavaScript', question: 'Which of the following is used to define a class in JavaScript?', options: ['class', 'def', 'function', 'object'], answer: 'class' },
    { category: 'JavaScript', question: 'How do you create a function in JavaScript?', options: ['function myFunction()', 'def myFunction()', 'create myFunction()', 'function:myFunction()'], answer: 'function myFunction()' },
    { category: 'JavaScript', question: 'How do you write an array in JavaScript?', options: ['var colors = ["red", "green", "blue"]', 'var colors = (1:"red", 2:"green", 3:"blue")', 'var colors = "red", "green", "blue"', 'var colors = {"red", "green", "blue"}'], answer: 'var colors = ["red", "green", "blue"]' },
    { category: 'HTML', question: 'What does HTML stand for?', options: ['HyperText Markup Language', 'Hyperlinks and Text Markup Language', 'Home Tool Markup Language', 'HyperTool Markup Language'], answer: 'HyperText Markup Language' },
    { category: 'HTML', question: 'Which HTML element is used to specify a footer for a document or section?', options: ['<footer>', '<section>', '<bottom>', '<aside>'], answer: '<footer>' },
    { category: 'HTML', question: 'Which HTML element is used to define important text?', options: ['<strong>', '<important>', '<b>', '<i>'], answer: '<strong>' },
    { category: 'HTML', question: 'Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?', options: ['alt', 'title', 'src', 'href'], answer: 'alt' },
    { category: 'HTML', question: 'Which HTML element is used to define a navigation link?', options: ['<nav>', '<navigate>', '<navigation>', '<navlink>'], answer: '<nav>' },
    { category: 'HTML', question: 'What is the correct HTML element for inserting a line break?', options: ['<br>', '<lb>', '<break>', '<linebreak>'], answer: '<br>' },
    { category: 'HTML', question: 'Which HTML element is used to specify a header for a document or section?', options: ['<header>', '<section>', '<top>', '<head>'], answer: '<header>' },
    { category: 'HTML', question: 'Which HTML attribute is used to define inline styles?', options: ['style', 'class', 'styles', 'font'], answer: 'style' },
    { category: 'HTML', question: 'Which HTML element is used to define a table?', options: ['<table>', '<tab>', '<tr>', '<td>'], answer: '<table>' },
    { category: 'HTML', question: 'Which HTML element is used to define emphasized text?', options: ['<em>', '<italic>', '<i>', '<strong>'], answer: '<em>' },
    { category: 'CSS', question: 'What does CSS stand for?', options: ['Cascading Style Sheets', 'Colorful Style Sheets', 'Creative Style Sheets', 'Computer Style Sheets'], answer: 'Cascading Style Sheets' },
    { category: 'CSS', question: 'Which HTML attribute is used to define inline styles?', options: ['style', 'class', 'id', 'font'], answer: 'style' },
    { category: 'CSS', question: 'Which is the correct CSS syntax?', options: ['body {color: black;}', '{body;color:black;}', '{body:color=black;}', 'body:color=black;'], answer: 'body {color: black;}' },
    { category: 'CSS', question: 'Which property is used to change the background color?', options: ['background-color', 'color', 'bgcolor', 'background'], answer: 'background-color' },
    { category: 'CSS', question: 'Which CSS property controls the text size?', options: ['font-size', 'text-style', 'text-size', 'font-style'], answer: 'font-size' },
    { category: 'CSS', question: 'What is the correct CSS syntax to make all the <p> elements bold?', options: ['p {font-weight: bold;}', 'p {text-size: bold;}', 'p {font-style: bold;}', 'p {text-weight: bold;}'], answer: 'p {font-weight: bold;}' },
    { category: 'CSS', question: 'How do you make each word in a text start with a capital letter?', options: ['text-transform: capitalize;', 'text-style: capitalize;', 'transform: capitalize;', 'text-capitalize: true;'], answer: 'text-transform: capitalize;' },
    { category: 'CSS', question: 'Which property is used to change the font of an element?', options: ['font-family', 'font-style', 'font-size', 'font-weight'], answer: 'font-family' },
    { category: 'CSS', question: 'Which property is used to center text?', options: ['text-align', 'align-text', 'center-text', 'text-center'], answer: 'text-align' },
    { category: 'CSS', question: 'How do you select an element with id "demo"?', options: ['#demo', '.demo', 'demo', '*demo'], answer: '#demo' }
];

let currentQuestionIndex = 0;
let correctAnswers = 0;
let timerInterval;
let timeRemaining = 20;
let filteredQuestions = questions;

const timerElement = document.getElementById('timer');
const timeElement = document.getElementById('time');
const timeCircle = document.getElementById('timeCircle');
const questionTitleElement = document.getElementById('questionTitle');
const optionsListElement = document.getElementById('optionsList');
const submitAnswerButton = document.getElementById('submitAnswer');
const resultCardElement = document.getElementById('resultCard');
const resultMessageElement = document.getElementById('resultMessage');
const restartQuizButton = document.getElementById('restartQuiz');
const cancelQuizButton = document.getElementById('cancelQuiz');

function startTimer() {
    timeRemaining = 20;
    timerElement.style.display = 'block';
    timeCircle.style.stroke = 'green';
    timeCircle.style.transition = 'stroke-dashoffset 1s linear, stroke 1s linear';
    updateTimerDisplay();
    timerInterval = setInterval(() => {
        timeRemaining--;
        updateTimerDisplay();
        if (timeRemaining <= 5) {
            timeCircle.style.stroke = 'red';
        }
        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            showResult(false);
        }
    }, 1000);
}

function updateTimerDisplay() {
    timeElement.textContent = `00:${timeRemaining < 10 ? '0' + timeRemaining : timeRemaining}`;
    const dashoffset = (1 - timeRemaining / 20) * 282.743;
    timeCircle.style.strokeDashoffset = dashoffset;
}

function displayQuestion() {
    const question = filteredQuestions[currentQuestionIndex];
    questionTitleElement.textContent = question.question;
    optionsListElement.innerHTML = '';
    question.options.forEach(option => {
        const li = document.createElement('li');
        li.textContent = option;
        li.onclick = () => markAnswer(option);
        optionsListElement.appendChild(li);
    });
    startTimer();
}

function markAnswer(selectedOption) {
    const question = filteredQuestions[currentQuestionIndex];
    if (selectedOption === question.answer) {
        correctAnswers++;
    }
    showResult(selectedOption === question.answer);
}

function showResult(isCorrect) {
    clearInterval(timerInterval);
    const question = filteredQuestions[currentQuestionIndex];
    questionTitleElement.textContent = `The answer is ${question.answer}`;
    optionsListElement.innerHTML = isCorrect ? '<li class="correct">Correct!</li>' : '<li class="incorrect">Wrong!</li>';
    submitAnswerButton.disabled = true;
    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < filteredQuestions.length) {
            displayQuestion();
            submitAnswerButton.disabled = false;
        } else {
            displayFinalResult();
        }
    }, 2000);
}

function displayFinalResult() {
    document.getElementById('quiz').style.display = 'none';
    resultCardElement.style.display = 'block';
    resultMessageElement.textContent = `You answered ${correctAnswers} out of ${filteredQuestions.length} questions correctly.`;
}

function filterQuestions(category) {
    filteredQuestions = questions.filter(question => question.category === category);
    currentQuestionIndex = 0;
    correctAnswers = 0;
    displayQuestion();
    document.querySelectorAll('.filter-buttons button').forEach(button => button.classList.remove('selected'));
    document.getElementById(`filter${category}`).classList.add('selected');
    document.getElementById('quiz').style.display = 'block';
    resultCardElement.style.display = 'none';
}

document.getElementById('filterHTML').onclick = () => filterQuestions('HTML');
document.getElementById('filterCSS').onclick = () => filterQuestions('CSS');
document.getElementById('filterJavaScript').onclick = () => filterQuestions('JavaScript');

cancelQuizButton.onclick = () => {
    document.getElementById('quiz').style.display = 'none';
    resultCardElement.style.display = 'none';
};

restartQuizButton.onclick = () => {
    filterQuestions(document.querySelector('.filter-buttons button.selected').id.replace('filter', ''));
};

// Start with JavaScript questions by default
filterQuestions('JavaScript');