// Define an array of quotes
const quotes = [
    "The elevator to success is out of order. You'll have to use the stairs... one step at a time. - Joe Girard",
    "I am so clever that sometimes I don't understand a single word of what I am saying. - Oscar Wilde",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it. - Jordan Belfort",
    "The road to success is dotted with many tempting parking spaces. - Will Rogers",
    "The best revenge is massive success. - Frank Sinatra",
    "I didn't fail the test. I just found 100 ways to do it wrong. - Benjamin Franklin",
    "Opportunity is missed by most people because it is dressed in overalls and looks like work. - Thomas Edison",
    "In three words I can sum up everything I've learned about life: It goes on. - Robert Frost",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer",
    "The only way to do great work is to first believe that what you're doing is great. - Unknown",
    "Life is 10% what happens to us and 90% how we react to it. - Charles R. Swindoll",
    "A day without laughter is a day wasted. - Charlie Chaplin",
    "I find that the harder I work, the more luck I seem to have. - Thomas Jefferson",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "The best way to cheer yourself up is to try to cheer somebody else up. - Mark Twain",
    "You must be the change you wish to see in the world. - Mahatma Gandhi",
    "Success is not in what you have, but who you are. - Bo Bennett",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "The way to get started is to quit talking and begin doing. - Walt Disney",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau",
    "If opportunity doesn't knock, build a door. - Milton Berle",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "The only thing worse than being blind is having sight but no vision. - Helen Keller",
    "Life is not about finding yourself. Life is about creating yourself. - George Bernard Shaw",
    "The secret of getting ahead is getting started. - Mark Twain",
    "Happiness is not something ready-made. It comes from your own actions. - Dalai Lama",
    "The only place where success comes before work is in the dictionary. - Vidal Sassoon"
];

// Function to get a random quote
function getRandomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
}

// Display a random quote when the page is refreshed
document.addEventListener("DOMContentLoaded", function() {
    const quoteElement = document.getElementById("quote");
    if (quoteElement) {
        quoteElement.textContent = getRandomQuote();
    }
});
