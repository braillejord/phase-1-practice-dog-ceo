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

let allBreeds;

fetch(breedUrl)
    .then(r => r.json())
    .then(breedData => {
        allBreeds = Object.keys(breedData.message)
        renderBreeds(allBreeds)
    })

// challenge 4: filter breeds using the dropdown
let dropdown = document.getElementById('breed-dropdown')
dropdown.addEventListener("change", renderBreeds)

function renderBreeds() {
    const breedList = document.getElementById('dog-breeds')
    breedList.textContent = ""

    const filteredBreeds = allBreeds.filter(breed => breed.charAt(0) === dropdown.value)

    filteredBreeds.forEach(breed => {
        const breedListItem = document.createElement('li')
        breedListItem.innerText = breed
        breedListItem.addEventListener("click", (e) => e.target.style.color = "purple")
        breedList.appendChild(breedListItem)
    })
}
// alternative code for challenge 4

// function renderBreeds() {
//     const breedList = document.getElementById('dog-breeds')
//     breedList.textContent = ""
//     for (let breed in allBreeds) {
//         const singleBreed = allBreeds[breed]
//         const breedListItem = document.createElement('li')
//         breedListItem.innerText = singleBreed

//         // challenge 3: when user clicks on li, font color changes
//         breedListItem.addEventListener("click", (e) => e.target.style.color = "purple")

//         if (breedListItem.innerText.charAt(0) === dropdown.value) {
//             breedList.appendChild(breedListItem)
//         }
//     }
// }
