document.addEventListener("DOMContentLoaded", function() {
    const predictBtn = document.querySelector(".predict-btn");
    const predictionResult = document.getElementById("predictionResult");

    predictBtn.addEventListener("click", function() {
        predictionResult.textContent = "Predicted Result: Success!";
    });
});
