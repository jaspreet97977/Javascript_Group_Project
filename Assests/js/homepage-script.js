let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex = (slideIndex >= slides.length) ? 1 : slideIndex + 1;

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

    setTimeout(showSlides, 2000); // Change image every 2 seconds
}


// validate payment page forms
function validateForm() {
    // Simple validation logic (you can enhance this based on your requirements)
    var cardNumber = document.getElementById("cardNumber").value;
    var expiryDate = document.getElementById("expiryDate").value;
    var cvv = document.getElementById("cvv").value;
    var cardHolderName = document.getElementById("cardHolderName").value;

    if (!cardNumber || !expiryDate || !cvv || !cardHolderName) {
        alert("Please fill in all required fields.");
        return false;
    }

    // Simulate successful payment
    alert("Payment successful!");

    // Redirect to index.html (you can replace this with your actual redirect logic)
    window.location.href = "index.html";

    return false; // Prevent form submission (to keep the alert visible for this example)
}
