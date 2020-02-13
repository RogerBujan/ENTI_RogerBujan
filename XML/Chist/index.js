import joke from 'one-liner-joke';

const text = document.getElementById("text");
const onClick = () => {
    let line = joke.getRandomJoke();

    text.innerHTML = line.body;
}

window.onClick = onClick;