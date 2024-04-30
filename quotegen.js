quotee = document.getElementById("quote");
authorr = document.getElementById("author");

quotee.textContent = "Winner, Not a whiner";
authorr.textContent = "Anonymous";

function display() {
    fetch('quotes.csv')
        .then(response => response.text())
        .then(data => {
            const lines = data.split('\n');

            lines.shift();

            const randomIndex = Math.floor(Math.random() * lines.length);
            const randomLine = lines[randomIndex];

            const [quote, author] = randomLine.split('~');

            quotee.textContent = quote;
            authorr.textContent = author;
        })
}

function copy() {
    navigator.clipboard.writeText(quotee.textContent);
    window.alert("Quote copied!😁");
}
    