const heading = document.querySelector('h1')
console.log(heading)

const paragraf = document.querySelectorAll('p')
console.log(paragraf)

const testDiv = document.querySelector('.test')
console.log(testDiv)

const test2 = testDiv.querySelector('#test')
// console.log(test2)

const ulList = document.createElement('ul')
const liItem = document.createElement('li')
liItem.textContent = 'cześć'

document.body.appendChild(ulList)
ulList.appendChild(liItem)

const addDiv = document.createElement('div')
document.body.appendChild(addDiv)

const div = document.querySelector('div')
const p123 = document.createElement('p')
div.appendChild(p123)

const btn1 = document.querySelector('.btn-1')
const btn2 = document.querySelector('.btn-2')
const btn3 = document.querySelector('.btn-3')

btn1.addEventListener('click', function() {
	console.log('kliknieto mnie');
})

// btn2.addEventListener('mouseover', () => console.log('najechano na mnie'))

const test = (e) => {
	console.log(e);
}

btn1.addEventListener('click', test)




