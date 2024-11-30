function sendToWhatsApp(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get the values of name and details
    const name = document.querySelector('input[name="name"]').value;
    const details = document.querySelector('textarea[name="details"]').value;

    // Construct the WhatsApp API URL
    const phone = "+8801749298029"; // Replace with your WhatsApp phone number
    const url = `https://api.whatsapp.com/send?phone=${phone}&text=Name: ${encodeURIComponent(name)}%0ADetails: ${encodeURIComponent(details)}`;

    // Redirect to the constructed URL
    window.open(url, '_blank');
}