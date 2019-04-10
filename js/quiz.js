var questions = [
    {
        text: "What is your status in college?",
        answers: [
            "Just Graduated",
            "Still Enrolled",
            "Not Enrolled Yet"
        ]
    },
    {
        text: "Are you looking for a job?",
        answers: [
            "Yes",
            "Starting To Search Soon",
            "No"
        ]
    },
    {
        text: "Do you have free time to be able to work?",
        answers: [
            "Yes",
            "Somewhat",
            "No"
        ]
    },
    {
        text: "Are you punctual?",
        answers: [
            "Yes",
            "Somewhat",
            "No"
        ]
    }
]
var score = 0;
var currentQuestion = -1;
function submitResult(result) {
    score += 3 - result;
    currentQuestion += 1;
    if (currentQuestion > questions.length - 1) {
        $("#quiz-question").addClass("d-none");
        $("#quiz-complete").removeClass("d-none");
        if (score > 11) {
            $("#quiz-complete-subtitle").text("Congratulations! Quiz passed.")
            $("#quiz-complete-title").text("You're eligible to use our app.")
        } else {
            $("#quiz-complete-subtitle").text("Not a good match")
            $("#quiz-complete-title").text("Your friends might be a better fit. Share Kareer on your social media!")
        }
    } else {
        var question = questions[currentQuestion]
        $("#quiz-question-subtitle").text("Question " + (currentQuestion + 1) + "/" + questions.length)
        $("#quiz-question-title").text(question.text)
        $("#quiz-question-1").text(question.answers[0])
        $("#quiz-question-2").text(question.answers[1])
        $("#quiz-question-3").text(question.answers[2])
    }
}
$(function () {
    $("#quiz-start-btn").click(function () {
        $("#quiz-start").addClass("d-none");
        $("#quiz-question").removeClass("d-none");
        $("#quiz-question-1").click(() => { submitResult(0) });
        $("#quiz-question-2").click(() => { submitResult(1) });
        $("#quiz-question-3").click(() => { submitResult(2) });
        submitResult(0)
    })
})