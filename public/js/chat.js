const askForm = document.getElementById("askForm");
const qnInput = document.getElementById("qnInput");
const submitBtn = document.getElementById("submitBtn");
const resultBox = document.getElementById("resultBox");
const displayQuestion = document.getElementById("displayQuestion");
const displayAnswer = document.getElementById("displayAnswer");

askForm.addEventListener("submit", async (e) => {
    e.preventDefault(); // Prevents page reload

    const question = qnInput.value.trim();
    if (!question) return;

    // Show result container with "Thinking..." state
    //as soo as input read ,show this card make visible with thinking...
    resultBox.classList.add("visible");
    //show question in header
    displayQuestion.textContent = "Question: " + question;
    //show thinking till i get answer
    displayAnswer.innerHTML = '<p class="status-thinking">Thinking...</p>';
    //so uder cant press again and agin
    submitBtn.disabled = true;

    try {
        const response = await fetch("/ask", {
            method: "POST",
            headers: { 
                "Content-Type": "application/json" 
            },
            body: JSON.stringify({ qnsent: question })
        });

        //response i wait and i get
        const data = await response.json();
        //add response in the box 
        displayAnswer.innerHTML = data.answerHtml;
        //clear once you got response
        qnInput.value = "";
    } catch (err) {
        displayAnswer.innerHTML = '<p class="status-error">Failed to fetch answer. Please try again.</p>';
    } finally {
        //once i get response enable the button
        submitBtn.disabled = false;
    }
});



