const colorButton = document.querySelector('.color')
const plusButton = document.querySelector('.sizeUp')
const minusButton = document.querySelector('.sizeDown')
const par = document.querySelector('p')

let fontSize = 36

const colorText = () => {
	const r = Math.floor(Math.random() * 255)
	const g = Math.floor(Math.random() * 255)
	const b = Math.floor(Math.random() * 255)
	par.style.color = `rgb(${r},${g},${b})`
}

const plus = () => {
	fontSize += 5
	par.style.fontSize = fontSize + 'px'
}

const minus = () => {
	if (fontSize <= 21) return
	fontSize -= 3
	par.style.fontSize = fontSize + 'px'
}

colorButton.addEventListener('click', colorText)
plusButton.addEventListener('click', plus)
minusButton.addEventListener('click', minus)
