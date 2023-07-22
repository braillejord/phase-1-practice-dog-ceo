// code that was previously here
console.log('%c HI', 'color: firebrick')


// challenge 1: fetch images, parse response, add elements to DOM
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

fetch(imgUrl)
    .then(r => r.json())
    .then(imageData => renderImages(imageData.message))

function renderImages(allImages) {
    for (let image in allImages) {
        const singleImageUrl = allImages[image]
        const singleImage = document.createElement('img')
        singleImage.src = singleImageUrl
        const imageContainer = document.getElementById('dog-image-container')
        imageContainer.appendChild(singleImage)
    }
}

//challenge 2: fetch all dog breeds and add to provided ul
const breedUrl = "https://dog.ceo/api/breeds/list/all"

fetch(breedUrl)
    .then(r => r.json())
    .then(breedData => {
        let breeds = Object.keys(breedData.message)
        renderBreeds(breeds)
    })

function renderBreeds(allBreeds) {
    for (let breed in allBreeds) {
        const singleBreed = allBreeds[breed]
        const breedListItem = document.createElement('li')
        breedListItem.innerText = singleBreed
        const breedList = document.getElementById('dog-breeds')
        breedList.append(breedListItem)

        // challenge 3: when user clicks on li, font color changes
        breedListItem.addEventListener("click", (e) => e.target.style.color = "purple")
    }
}


