const btn1 = document.querySelector('.btn-1')
const btn2 = document.querySelector('.btn-2')
const btn3 = document.querySelector('.btn-3')
const p = document.querySelector('p')

function Menu(food, price) {
	this.food = food
	this.price = price
}

const newMenu1 = new Menu('burger', 30)
const newMenu2 = new Menu('fries', 10)
const newMenu3 = new Menu('cola', 5)

Menu.prototype.addMenu = function () {
	console.log(`${this.food} kosztuje ${this.price}`)
}

// console.log(newMenu1, newMenu2, newMenu3)

btn1.addEventListener('click', () => newMenu1.addMenu())
btn2.addEventListener('click', () => newMenu2.addMenu())
btn3.addEventListener('click', () => newMenu3.addMenu())
