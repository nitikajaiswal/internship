
const quotes = [
    {
        text: "Great things are done by a series of small things brought together.",
        author: "Vincent van Gogh"
    },
    {
        text: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    },
    {
        text: "The secret of getting ahead is getting started.",
        author: "Mark Twain"
    },
    {
        text: "It always seems impossible until it's done.",
        author: "Nelson Mandela"
    },
    {
        text: "Dream big and dare to fail.",
        author: "Norman Vaughan"
    },
    {
        text: "Do what you can, with what you have, where you are.",
        author: "Theodore Roosevelt"
    },
    {
        text: "Success is the sum of small efforts repeated day in and day out.",
        author: "Robert Collier"
    },
    {
        text: "Happiness depends upon ourselves.",
        author: "Aristotle"
    },
    {
        text: "Everything you can imagine is real.",
        author: "Pablo Picasso"
    },
    {
        text: "The future depends on what you do today.",
        author: "Mahatma Gandhi"
    },
    {
        text: "Stay patient and trust your journey.",
        author: "Unknown"
    },
    {
        text: "Your only limit is your mind.",
        author: "Unknown"
    }
];

const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");
const quoteContent = document.getElementById("quoteContent");

const newQuoteBtn = document.getElementById("newQuoteBtn");
const copyBtn = document.getElementById("copyBtn");

let previousIndex = -1;

function generateQuote() {

    let randomIndex;

    do {
        randomIndex = Math.floor(Math.random() * quotes.length);
    } while (
        randomIndex === previousIndex &&
        quotes.length > 1
    );

    previousIndex = randomIndex;

    const selectedQuote = quotes[randomIndex];

    // Restart animation
    quoteContent.style.animation = "none";
    void quoteContent.offsetWidth;
    quoteContent.style.animation = "quoteFade 0.6s ease";

    // Display quote and author
    quoteElement.textContent = selectedQuote.text;
    authorElement.textContent = "— " + selectedQuote.author;

}

// Generate a quote when the page loads
window.addEventListener("DOMContentLoaded", generateQuote);

// Generate a new quote on button click
newQuoteBtn.addEventListener("click", generateQuote);

// Copy quote functionality
copyBtn.addEventListener("click", async () => {

    const textToCopy =
        `"${quoteElement.textContent}" ${authorElement.textContent}`;

    try {
        await navigator.clipboard.writeText(textToCopy);

        copyBtn.textContent = "✓ Copied!";

        setTimeout(() => {
            copyBtn.textContent = "Copy Quote";
        }, 1800);

    } catch (error) {
        copyBtn.textContent = "Copy unavailable";
    }

});
