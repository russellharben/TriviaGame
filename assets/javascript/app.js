// Question array


// Print the questions to the screen

$(document).ready(function () {

    var num = 4;
    var tx = $("#counter");
    var cntr =0;

    // global random number generator
    var rand = Math.floor((Math.random() * 5));

    function nextQuestion() {
        var timeout;
        timeout = setTimeout(reload, 4000);
        var sw;
        sw = setInterval(cunt, 1000);
    }

    function cunt() {
        num--;
        tx.text("Next question in... " + num);

    }

    function reload() {
        location.reload();
    }

    // questions array
    var questions = [
        "Who is Denzel Washington",
        "Who is Mariah Carey",
        "Who is Mickey Mantle",
        "Who is Slash",
        "Who is Lebron James",
        "How many points is a touchdown worth?",
        "Who invented the lightbult?",
        "Who wrote The Great Gatsby?",
    ];

    // Answers array
    var answers = [
        "Actor",
        "Singer",
        "Baseball Player",
        "Guitarist",
        "Basketball Player",
        "Seven",
        "Thomas Edison",
        "F. Scott Fitzgerald",
        "Model"
    ];

    function printQuestion() {

        var ask = $("#question");
        var ansOne = $("#answerOne");
        var ansTwo = $("#answerTwo");

        var randomQuestion = Math.floor((Math.random() * 2));
        console.log(randomQuestion);
        // ansArr.push()

        for (i = 0; i < questions.length; i++) {
            ask.text(questions[rand]);
            // ansArr[randomQuestion].text(answers[rand]);
            if (randomQuestion == 1) {
                ansOne.text(answers[rand]);
                ansTwo.text(answers[rand + 1]);
            } else {
                ansOne.text(answers[rand + 1]);
                ansTwo.text(answers[rand]);
            }
        }
    }

    printQuestion();

    // select the submit button
    var sub = $("#submit");

    // function to check user input
    function checkAnswer(e) {

        e.preventDefault();

        // varaibles to confirm user input
        var input = $("#userOptionOne")[0].checked;
        var inputTwo = $("#userOptionTwo")[0].checked;

        // reassigned text variables
        ans = $("#answerOne").text();
        ansTwo = $("#answerTwo").text();

        // establish variable to hold the response to user
        var res = $("#answer");

        // check the user input
        if (input == true && inputTwo == true) {
            alert("Please select just one check box");
        } else if (input == true && answers.indexOf(ans) == rand) {
            nextQuestion();
            console.log("correct answer chosen");
            res.text("You got it!");
            cntr++;
            console.log(cntr);
        } else if (inputTwo == true && answers.indexOf(ansTwo) == rand) {
            nextQuestion();
            console.log("correct answer chosen");
            res.text("Correct!");
            cntr++;
            console.log(cntr);
        } else {
            nextQuestion();
            console.log("Sorry, wrong answer!");
            res.text("Nope!");

        }
    }

    sub.on("click", checkAnswer);

})




