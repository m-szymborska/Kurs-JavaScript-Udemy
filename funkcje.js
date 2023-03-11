// function test() {
// 	console.log('cześc');
// }

// test()

// function add(parametr) {
// 	console.log('podany argument to"' + parametr);
// // }
// // add('test')

// function add(name, age) {
// 	console.log(`Cześć mam na imię ${name} i mam ${age} lat`);
// }

// add('Monika', '37')

// const arrowFunction = () => {

// }

// const hello = (name= 'drogi użtkowniku') => {
// 	console.log(`Cześć ${name}, jak się masz?`);
// }
// hello()
// hello('Mon')

// const numbers = (x, y, ...z) => {
// 	console.log(x, y, z);

// }

// numbers(12, 34, 567, 67, 345, 567)

// const name = 'Lily'

// const test = () => {
//     const name = 'Lisa'

//     const test2 = () => {
//         console.log(car);
//     }
//     test2()

//     const test3 = () => {
//         let car = 'Audi'
//     }
//     test3()
// }
// test()

// function add(parametr) {
// 	// 	console.log('podany argument to"' + parametr);
// 	// // }
// ----------------------------------------------------
// let score

// const add = (x, y) => {
// score = x + y
// if (score % 2 === 0) {
// 	add1()
// } else {
// 	add2()
// }

// }

// function add1() {
// 	console.log(`Liczba ${score} jest parzysta`)
// }

// function add2() {
// 	console.log(`Liczba ${score} jest parzysta`)
// }

// add(4,5)
// ___________________________________________

// let temp
// let celsius

// const farenhait = (temp) => {
// 	celsius = (temp * 1.8) + 32
// console.log(`${temp} C = ${celsius} F`);
// }

// farenhait(10)

// ______________________________________________

const num = 10
const numbers = []
for (let i = 0; i < num; i++) {
	numbers.push(i)
}

console.log(numbers)

const fun1 = x => {
	if (x === 0) {
		console.log(`${x} nie jest podzielne przez 3 lub jest równe 0`)
	} else if (x % 3 === 0) {
		console.log(`${x} jest podzielne przez 3`)
	} else {
		console.log(`${x} nie jest podzielne przez 3 lub jest równe 0`)
	}
}
fun1(4)

numbers.forEach(fun1)
