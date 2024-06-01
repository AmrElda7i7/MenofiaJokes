const jokeEl = document.getElementById('joke')
const get_joke = document.getElementById('get_joke')

get_joke.addEventListener('click', generateJoke);

function generateJoke() {
  // Fetch the JSON data if it hasn't been fetched yet
  if (!window.jokes) {
    fetch('jokes.json') // Replace 'your_jokes.json' with the actual file path
      .then(response => response.json())
      .then(data => window.jokes = data) // Store data in a global variable
      .catch(error => console.error(error));
  }

  // Access the jokes data (assuming it's already fetched)
  const jokes = window.jokes;

  // Select a random joke
  const randomIndex = Math.floor(Math.random() * jokes.length);
  const randomJoke = jokes[randomIndex];

  // Clear the joke element content
  jokeEl.innerHTML = '';

  // Create a paragraph element for the joke
  const jokePar = document.createElement('p');
  jokePar.textContent = randomJoke.joke;

  // Append the paragraph element to the joke element
  jokeEl.appendChild(jokePar);
}
