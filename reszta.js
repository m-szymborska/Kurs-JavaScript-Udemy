// const test = () => {
//     console.log('🍔');
// }

// test()
// ---------------------
// const img = document.querySelector('img')

// img.setAttribute('src', 'https://s3.eu-central-1.amazonaws.com/pressland-cms/cache/metatags_image/1o/24587136-najpiekniejsze-kwiaty-z-ogrodow-naszych-babc.jpeg')
// img.setAttribute('alt', "kwiatek")

// const hello = () => {
//     console.log("🎇");

// }
// setTimeout(hello, 2000)

const liItems = document.querySelectorAll('li')
let number = 1

for (const liItem of liItems) {
	liItem.textContent = number
	liItem.dataset.id = number
	number++
}
const thirld = document.querySelector('[data-id="3"]')
console.log(thirld.closest('.wrapper'))
