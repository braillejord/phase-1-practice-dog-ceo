// code that was previously here
console.log('%c HI', 'color: firebrick')


// challenge 1: fetch images, parse response, add elements to DOM
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

fetch(imgUrl)
    .then(r => r.json())
    .then(data => renderImages(data.message))

function renderImages(allImages) {
    for (let image in allImages) {
        const singleImageUrl = allImages[image]
        const singleImage = document.createElement('img')
        singleImage.src = singleImageUrl
        const imageContainer = document.getElementById('dog-image-container')
        imageContainer.appendChild(singleImage)
    }
}