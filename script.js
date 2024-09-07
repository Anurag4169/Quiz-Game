const questions = [
    {
        question: "What is the capital of India?",
        answers: ["Delhi", "Mumbai", "Bangalore", "Kolkata"],
        correct: 0
    },
    {
        question: "Which Indian festival is known as the Festival of Lights?",
        answers: ["Diwali", "Holi", "Eid", "Pongal"],
        correct: 0
    },
    {
        question: "Who is the first Prime Minister of India?",
        answers: ["Jawaharlal Nehru", "Mahatma Gandhi", "Sardar Patel", "Indira Gandhi"],
        correct: 0
    },
    {
        question: "Which river is considered the holiest in India?",
        answers: ["Ganges", "Yamuna", "Godavari", "Brahmaputra"],
        correct: 0
    },
    {
        question: "What is the national sport of India?",
        answers: ["Field Hockey", "Cricket", "Football", "Badminton"],
        correct: 0
    },
    {
        question: "Which Indian city is known as the 'Pink City'?",
        answers: ["Jaipur", "Hyderabad", "Agra", "Chennai"],
        correct: 0
    },
    {
        question: "Which Indian state is famous for its backwaters?",
        answers: ["Kerala", "Goa", "Rajasthan", "Punjab"],
        correct: 0
    },
    {
        question: "Who is the author of the book 'The God of Small Things'?",
        answers: ["Arundhati Roy", "Chetan Bhagat", "Ruskin Bond", "Jhumpa Lahiri"],
        correct: 0
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answersContainer = document.getElementById('answers');
const nextButton = document.getElementById('next-button');
const scoreElement = document.getElementById('score');

function startGame() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.classList.add('hidden');
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.textContent = question.question;
    answersContainer.innerHTML = '';

    question.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.textContent = answer;
        button.addEventListener('click', () => selectAnswer(index));
        answersContainer.appendChild(button);
    });
}

function selectAnswer(selectedIndex) {
    const correctIndex = questions[currentQuestionIndex].correct;

    if (selectedIndex === correctIndex) {
        score++;
        scoreElement.textContent = `Score: ${score}`;
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
    } else {
        questionElement.textContent = "Quiz Over!";
        answersContainer.innerHTML = '';
        nextButton.classList.remove('hidden');
    }
}

nextButton.addEventListener('click', startGame);

startGame();
