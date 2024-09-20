// Elements
const output = document.getElementById('output');
const userInput = document.getElementById('userInput');
const sendButton = document.getElementById('sendButton');

// Auto-focus on input field
userInput.focus();

// Store the initial welcome message
const initialMessage = 'Welcome brothers! Type "help" to see available commands.\n';

// Available commands with corresponding actions
const commands = {
    help: 'Available commands: [about, github, instagram, discord, clear]',
    about: 'I am a Python programmer who loves building innovative software solutions.',
    github: 'GitHub: <a href="https://github.com/backslash115" target="_blank">https://github.com/backslash115</a>',
    instagram: 'Instagram: <a href="https://www.instagram.com/backslash115/" target="_blank">https://www.instagram.com/backslash115/</a>',
    discord: 'Discord: <a href="https://discord.com/invite/vgKNEHdYKD" target="_blank">https://discord.com/invite/vgKNEHdYKD</a>',
    clear: 'clear',  // Handled by clearConsole()
};

// Function to handle command input
function handleCommandInput() {
    const input = userInput.value.trim().toLowerCase(); // Get user input
    if (input in commands) {
        if (input === 'clear') {
            clearConsole(); // Call clearConsole function to clear the terminal
        } else {
            appendToOutput(commands[input]); // Execute the command
        }
    } else {
        appendToOutput(`Command not found: ${input}`); // Invalid command
    }
    userInput.value = ''; // Clear input after execution
}

// Handle user input and execute commands when Enter key is pressed
userInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        handleCommandInput();
    }
});

// Handle user input when the send button is clicked (for mobile users)
sendButton.addEventListener('click', function () {
    handleCommandInput();
});

// Append text to output with the command line prompt
function appendToOutput(text) {
    output.innerHTML += `~/portfolio$ ${text}\n`;
    output.scrollTop = output.scrollHeight; // Scroll to the latest command
}

// Clear the console output but keep the initial message
function clearConsole() {
    output.innerHTML = initialMessage;  // Reset to just the welcome message
}

// Initialize with welcome message
output.innerHTML = initialMessage;
