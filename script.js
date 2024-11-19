const app = document.getElementById('app');

let currentPage = 1;
let currentQuestion = 0;

const questions = [
    { question: "What is Python primarily used for?", options: ["Web Development", "Data Science", "Gaming", "All of the above"], answer: 3 },
    { question: "Which keyword is used for defining a function in Python?", options: ["def", "func", "function", "define"], answer: 0 },
    { question: "HTML stands for?", options: ["HyperText Markup Language", "HyperText Markdown Language", "HyperText Machine Language", "None"], answer: 0 },
    { question: "Which keyword is used to insert a line break in an HTML document?", options: ["Line Break", "BR", "Break Tag", "New Line"], answer: 1 },
    { question: "Which property is used to change the background color in CSS?", options: ["background", "background-color", "color", "bgcolor"], answer: 1 },
    { question: "How do you make text bold in CSS?", options: ["font-bold", "font-weight: bold;", "bold: true;", "font-style: bold;"], answer: 1 },
    { question: "Who is the Deputy CM of Andhra Pradesh?", options: ["Narayana Swamy", "Pushpa Srivani", "Pawan Kalyan", "Pilli Subhash"], answer: 0 },
];

function renderPage() {
    if (currentPage === 1) {
        app.innerHTML = `
            <h1>Welcome to Varshitha Quiz Application!</h1>
            <p>Test your knowledge with this fun quiz.</p>
            <button onclick="startQuiz()">Start Quiz</button>
        `;
    } else if (currentPage === 2) {
        renderQuiz();
    } else if (currentPage === 3) {
        app.innerHTML = `
            <h2>Feedback</h2>
            <p>Please provide your feedback using the form below.</p>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfsSorKsf7BNgtd2E_MgNuZ0m9T3Jxo8XHwU34GOMod3BBt5Q/viewform?usp=sf_link" target="_blank" onclick="showAboutUs()">Fill Feedback Form</a>
        `;
    } else if (currentPage === 4) {
        app.innerHTML = `
            <h1>About Us</h1>
            <p>I am Varshitha.</p>
            <p>Studying at Madanapalle Institute of Technology (MITS) in ECE branch.</p>
            <p>Recently completed a frontend internship and prepared this mini-project.</p>
            <p>Through this project, I enhanced my skills in HTML, CSS, and JavaScript.</p>
            <p>I learned how to create dynamic web pages and manage user interactions efficiently.</p>
            <p>This project allowed me to practice implementing forms and handling user input.</p>
            <p>Understanding page navigation and structuring content has been another key takeaway.</p>
            <p>I also explored responsive design principles to make web pages mobile-friendly.</p>
            <p>Thank you for taking part in this quiz and providing your valuable feedback!</p>
        `;
    }
}

function startQuiz() {
    currentPage = 2;
    renderPage();
}

function renderQuiz() {
    if (currentQuestion < questions.length) {
        const question = questions[currentQuestion];
        app.innerHTML = `
            <h2>Question ${currentQuestion + 1}</h2>
            <p>${question.question}</p>
            <form id="quizForm" style="display: flex; flex-direction: column; gap: 10px; margin-top: 15px;">
                ${question.options.map((opt, i) => `
                    <label style="margin-bottom: 10px;">
                        <input type="checkbox" name="option" value="${i}" style="margin-right: 5px;"> ${opt}
                    </label>
                `).join('')}
            </form>
            <div style="margin-top: 20px;">
                ${currentQuestion > 0 ? `<button onclick="prevQuestion()">Previous</button>` : ""}
                ${currentQuestion === questions.length - 1 
                    ? `<button onclick="finishQuiz()">Finish</button>` 
                    : `<button onclick="nextQuestion()">Next</button>`}
            </div>
        `;
    } else {
        currentPage = 3;
        renderPage();
    }
}

function nextQuestion() {
    const selectedOptions = Array.from(document.querySelectorAll('input[name="option"]:checked')).map(el => el.value);
    if (selectedOptions.length === 0) {
        alert("Please select at least one option before proceeding!");
        return;
    }
    currentQuestion++;
    renderQuiz();
}

function prevQuestion() {
    currentQuestion--;
    renderQuiz();
}

function finishQuiz() {
    const selectedOptions = Array.from(document.querySelectorAll('input[name="option"]:checked')).map(el => el.value);
    if (selectedOptions.length === 0) {
        alert("Please select at least one option before finishing!");
        return;
    }
    currentPage = 3;
    renderPage();
}

function showAboutUs() {
    setTimeout(() => {
        currentPage = 4;
        renderPage();
    }, 500); // Small delay to simulate form submission
}

// Start rendering the first page
renderPage();
