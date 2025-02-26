document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const phoneInput = document.getElementById("phone");
    const sendOtpLink = document.querySelector("a");

    // Event listener for form submission
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form from submitting in the default way

        const phoneNumber = phoneInput.value;

        // Simple validation for 10-digit phone number
        if (phoneNumber.length === 10 && /^[0-9]+$/.test(phoneNumber)) {
            // Redirect to the OTP page
            window.location.href = "C:/Users/Hp/Desktop/palgeo/otp.html";
        } else {
            alert("Please enter a valid 10-digit phone number.");
        }
    });

    // Optional: You can also trigger the validation when clicking the link
    sendOtpLink.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default link behavior

        const phoneNumber = phoneInput.value;

        if (phoneNumber.length === 10 && /^[0-9]+$/.test(phoneNumber)) {
            // Redirect to the OTP page
            window.location.href = "C:/Users/Hp/Desktop/palgeo/otp.html";
        } else {
            alert("Please enter a valid 10-digit phone number.");
        }
    });
});
