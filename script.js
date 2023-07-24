
const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photosArray = [];
// unsplash api
const count = 10;
const apiKey = '1kwuRPsJJ7qFC6eE4hBn8eVl20IPKw4Nuyk2H0JhWF0';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

function displayPhotos() {
   photosArray.forEach((photo) =>{
    // create <a> tag 
    const item = document.createElement('a');
    item.setAttribute('href', photo.links.html);
    item.setAttribute('target', '_blank');

    // create <img> tag
    const img = document.createElement('img');
    img.setAttribute('src', photo.urls.regular);
    img.setAttribute('alt', photo.alt_description);
    img.setAttribute('title', photo.alt_description);

    // put <a> and <img> in imageContainer
    item.appendChild(img);
    imageContainer.appendChild(item);
   });
}

async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        photosArray = await response.json();
        displayPhotos();
    } catch (error) {
        // catch err here
    }
}

// on load
getPhotos();