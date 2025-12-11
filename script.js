document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('visitorForm');
    const messageDiv = document.getElementById('thankYouMessage');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from reloading the page
        // Get values from form
        const name = document.getElementById('name').value;
        const gender = document.getElementById('gender').value;
        const inGameName = document.getElementById('inGameName').value;
        const uid = document.getElementById('uid').value;
        // Display thank-you message
        messageDiv.innerHTML = `Thanks for visiting the site, ${gender} ${name}! Your in-game name is ${inGameName} and UID is ${uid}.`;
    });
});