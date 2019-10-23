document.addEventListener('click', event => {
	if (event.target.id === 'button') {
		const options = { 
      method: 'GET',
      headers: {
        "Accept" : "application/json"
      }
    }
    fetch('https://icanhazdadjoke.com/', options)
    .then(response => response.json())
    .then(json => {
      const joke = json.joke
      const jokeText = document.getElementById('joke')
      jokeText.innerText = joke
    })
	}
})