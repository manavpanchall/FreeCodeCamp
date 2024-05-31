document.getElementById('check-btn').addEventListener('click', function() {
    const userInput = document.getElementById('user-input').value;
    const resultsDiv = document.getElementById('results-div');

    if (!userInput) {
        alert('Please provide a phone number');
        return;
    }

    const isValid = validatePhoneNumber(userInput);
    resultsDiv.textContent = isValid
        ? `Valid US number: ${userInput}`
        : `Invalid US number: ${userInput}`;
});

document.getElementById('clear-btn').addEventListener('click', function() {
    document.getElementById('results-div').textContent = '';
});

function validatePhoneNumber(phoneNumber) {
    // Remove spaces, hyphens, and parentheses for digit count validation
    const cleanedNumber = phoneNumber.replace(/[\s()-]/g, '');

    // Check if cleaned number has 10 digits or 11 digits starting with '1'
    if (!(cleanedNumber.length === 10 || (cleanedNumber.length === 11 && cleanedNumber[0] === '1'))) {
        return false;
    }

    // Check for invalid characters
    if (/[^0-9\s()-]/.test(phoneNumber)) {
        return false;
    }

    // Check the proper use of parentheses
    if (phoneNumber.includes('(') || phoneNumber.includes(')')) {
        if (!/^\(?\d{3}\)?[\s-]?\d{3}[\s-]?\d{4}$/.test(phoneNumber) &&
            !/^1\s?\(?\d{3}\)?[\s-]?\d{3}[\s-]?\d{4}$/.test(phoneNumber)) {
            return false;
        }
    }

    // Validate phone number structure
    const validPhoneNumberRegex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/;
    return validPhoneNumberRegex.test(phoneNumber);
}
