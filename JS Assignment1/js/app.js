/* Variables */
var synth = window.speechSynthesis;
var textToSpeak = '';
var speakButton = document.querySelector('#speakButton');
var generateStoryButton = document.querySelector('#generateStoryButton');
var resetButton = document.querySelector('#resetButton');
var buttons = document.querySelectorAll('button[data-type]');
var generatedPhrase = document.querySelector('#generatedPhrase');

/* Arrays holding random words */
var nouns1 = ["cat", "dog", "tree", "car", "book"];
var verbs = ["runs", "jumps", "sleeps", "eats", "flies"];
var adjectives = ["big", "small", "red", "green", "happy"];
var nouns2 = ["ball", "house", "flower", "friend", "computer"];
var places = ["in the park", "in the beach", "in the city", "in the forest", "in the mountains"];

/* Functions */
function speakNow(string) {
    var utterThis = new SpeechSynthesisUtterance(string);
    synth.speak(utterThis);
}

function generateRandomPhrase() {
    var randomStory = '';
    buttons.forEach(function (button) {
        var wordArray;
        var buttonType = button.getAttribute('data-type');

        switch (buttonType) {
            case 'noun1':
                wordArray = nouns1;
                break;
            case 'verb':
                wordArray = verbs;
                break;
            case 'adjective':
                wordArray = adjectives;
                break;
            case 'noun2':
                wordArray = nouns2;
                break;
            case 'place':
                wordArray = places;
                break;
            default:
                wordArray = [];
        }

        var randomWord = wordArray[Math.floor(Math.random() * wordArray.length)];
        randomStory += (randomStory === '' ? '' : ' ') + randomWord;
    });

    return randomStory;
}

/* Event Listeners */
generateStoryButton.onclick = function() {
    textToSpeak = generateRandomPhrase();
    generatedPhrase.textContent = textToSpeak;
};

resetButton.onclick = function() {
    textToSpeak = '';
    generatedPhrase.textContent = '';
};

buttons.forEach(function (button) {
    button.onclick = function () {
        var wordArray;
        var buttonType = button.getAttribute('data-type');

        switch (buttonType) {
            case 'noun1':
                wordArray = nouns1;
                break;
            case 'verb':
                wordArray = verbs;
                break;
            case 'adjective':
                wordArray = adjectives;
                break;
            case 'noun2':
                wordArray = nouns2;
                break;
            case 'place':
                wordArray = places;
                break;
            default:
                wordArray = [];
        }

        var randomWord = wordArray[Math.floor(Math.random() * wordArray.length)];
        textToSpeak += (textToSpeak === '' ? '' : ' ') + randomWord;
        generatedPhrase.textContent = textToSpeak;
    };
});

speakButton.onclick = function() {
    speakNow(textToSpeak);
};
