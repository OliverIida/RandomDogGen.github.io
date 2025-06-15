document.getElementById('generate-btn').addEventListener('click', getRandomDog);

function getRandomDog() {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not OK');
      }
      return response.json();
    })
    .then(data => {
      document.getElementById('dog-img').src = data.message;
    })
    .catch(error => {
      console.error('Fetch error:', error);
      alert('Oops! Something went wrong. Try again.');
    });
}
