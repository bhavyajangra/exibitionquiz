const questions = [
{
question: "What year was our school founded?",
answers: [
{ text: "1920", correct: false},
{ text: "1945", correct: false},
{ text: "1960", correct: false},
{ text: "1985", correct: true},
]
},
{
question : "Which famous scientist visited our school in 2010?",
answers: [
{ text: "Stephen Hawking", correct: false},
{ text: "Jane Goodall", correct: false},
{ text: "Neil deGrasse Tyson", correct: false},
{ text: "Bill Nye", correct: true},
]
},
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let curentQuestionIndex = 0;
let score= 0;

function startQuiz(){
currentQuestionIndex = 0;
score= 0 ;
nextButton.innerHTML = "Next";
showQuestion();
}
function showQuestion(){
resetState();
let currentQuestion = questions[currentQuestionIndex];
let questionNo = currentQuestionIndex + 1;
questionElement.innerHTML = questionNo + ". " + currentQuestion.
question;

currentQuestion.answers.forEach(answer => {
const button = document.createElement("button");
button.innerHTML = answer.text;
button.classList.add("btn");
answerButtons.appendChild(button);
if(answer.correct){
button.dataset.correct = answer.correct;
}
button.addEventListener("click", selectAnswer)
});
}

function resetState(){
nextButton.style.display = "none";
while(answerButtons.firstChild){
answerButtons.removeChild(answerButtons.firstChild);
}
}
function selectAnswer(e){
const selectBtn = e.target;
const isCorrect = selectBtn.dataset.correct === "true";
if(isCorrect){
selectBtn.classList.add("correct");
score++;
}else{
selectBtn.classList.add("incorrect");
}
Array.from(answerButtons.children).forEach(button => {
if(button.dataset.correct === "true"){
button.classList.add("correct");
}
button.disabled = true;
});
nextButton.style.display = "block";

}
function showScore(){
resetState();
questionElement.innerHtml = 'you scored ${score} out of ${questions.lenght}!';
nextButton.innerHTML = "Play Again"
nextButton.style.display = "block";
}

function showScore(){
resetState();
questionElement.innerHTML = 'you scored ${score} out of ${questions.length}!';
nextButton.innerHTML = "Play Again";
nextButton.style.display = "block";
}
function handleNextButton(){
currentQuestionIndex++;
if(currentQuestionIndex < questions.length){
showQuestion();
}else{
showScore();
}
}

nextButton.addEventListener("click", ()=>{
if(currentQuestionIndex < questions.length){
handleNextButton();
}else{
startQuiz();
}
});

startQuiz();