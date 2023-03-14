const btn1 = document.querySelector('.btn1')
const btn2 = document.querySelector('.btn2')
const p1 = document.querySelector('.p1')
const p2 = document.querySelector('.p2')
const square = document.querySelector('.square')

const hello = () => {
	console.log('Cześć')
}

const color1 = () => {
	square.style.backgroundColor = 'red'
}

const color2 = () => {
	square.style.backgroundColor = 'blue'
}

const toggleClass = () => {
	p1.classList.toggle('show')
	p2.classList.toggle('show')
}

btn1.addEventListener('dblclick', hello)
square.addEventListener('mouseenter', color1)
square.addEventListener('mouseleave', color2)
btn2.addEventListener('click', toggleClass)
