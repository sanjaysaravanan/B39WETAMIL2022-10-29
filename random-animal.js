const API_URL = 'https://zoo-animal-api.herokuapp.com/animals/rand';

const backdropDiv = document.getElementById('backdrop');

async function getRandomAnimal() {

  // backdropDiv.classList.add('backdrop')

  try {
    const response = await fetch(API_URL);
    const animalJson = await response.json();

    const imageEle = document.createElement('img');

    imageEle.src = animalJson.image_link;

    imageEle.style.height = '250px';
    imageEle.style.width = '250px';

    const animalArea = document.getElementById('animal-area');

    animalArea.innerHTML = '';

    animalArea.appendChild(imageEle);
  } catch (err) {
    console.log('Some Error', err)
  } finally {
    // backdropDiv.classList.add('backdrop')
  }


}