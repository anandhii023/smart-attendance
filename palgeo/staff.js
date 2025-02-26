<script>
    // Wait for the DOM to be fully loaded
    document.addEventListener("DOMContentLoaded", function() {
        const form = document.querySelector('form');
        const tableBody = document.querySelector('tbody');

        // Event listener for form submission
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission behavior

            // Get input values from the form
            const fromDate = document.getElementById('from-date').value;
            const toDate = document.getElementById('to-date').value;
            const studentName = document.getElementById('student-name').value;
            const regNo = document.getElementById('reg-no').value;

            // Validate input fields
            if (!fromDate || !toDate || !studentName || !regNo) {
                alert("All fields are required.");
                return;
            }

            // Generate a row dynamically for each date in the selected range
            let date = new Date(fromDate);
            const endDate = new Date(toDate);

            while (date <= endDate) {
                const formattedDate = date.toISOString().split('T')[0]; // Format the date

                // Create a new table row and columns
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${formattedDate}</td>
                    <td>09:00 AM</td>
                    <td>05:00 PM</td>
                    <td>No</td>
                    <td>8 hours</td>
                    <td class="icon">
                        <img src="https://img.icons8.com/color/48/000000/checked.png" alt="Present">
                    </td>
                `;

                // Append the new row to the table body
                tableBody.appendChild(row);

                // Increment date by one day
                date.setDate(date.getDate() + 1);
            }

            // Reset the form after submission
            form.reset();
        });
    });
</script>
