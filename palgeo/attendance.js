// Display today's date
const dateElement = document.getElementById('date');
const today = new Date().toLocaleDateString();
dateElement.textContent = today;

// Adding click events to the period buttons
const periodButtons = document.querySelectorAll('.period-buttons button');

periodButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        markAttendance(index + 1);
    });
});

// Function to mark attendance
function markAttendance(period) {
    // Simple alert to simulate marking attendance for a period
    alert(`Attendance marked for Period ${period}`);

    // Optionally, you could change the button's appearance after it's clicked
    periodButtons[period - 1].style.backgroundColor = '#27ae60'; // Change to green after clicking
    periodButtons[period - 1].textContent = `Marked ${period}`;
}
