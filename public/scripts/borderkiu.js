// JavaScript to toggle the navbar on small screens
document.addEventListener("DOMContentLoaded", function() {
    const predictBtn = document.querySelector(".predict-btn");
    const predictionResult = document.getElementById("predictionResult");

    predictBtn.addEventListener("click", function() {
        predictionResult.textContent = "Predicted Result: Success!";
    });
});

// JavaScript to toggle the navbar on small screens
document.getElementById('navbar-toggler').addEventListener('click', function() {
    var navbar = document.getElementById('navbar');
    if (navbar.classList.contains('show')) {
        navbar.classList.remove('show');
    } else {
        navbar.classList.add('show');
    }
});

// Scroll animation for cards
document.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.card');
    elements.forEach(element => {
        if (element.getBoundingClientRect().top < window.innerHeight) {
            element.classList.add('in-view');
        }
    });
});

// Dark mode toggle
const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');
    document.querySelector('nav').classList.toggle('dark-mode');
    document.querySelectorAll('.btn-primary').forEach(btn => btn.classList.toggle('dark-mode'));
}

document.getElementById('dark-mode-toggle').addEventListener('click', toggleDarkMode);

// Dynamic title change based on active section
document.addEventListener('scroll', function() {
    let sections = document.querySelectorAll("section");
    sections.forEach(section => {
        let rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            document.title = `Borderkiu Premium - ${section.querySelector("h3").textContent}`;
        }
    });
});



