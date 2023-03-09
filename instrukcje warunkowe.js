const pass = 'fffdddd!dddddddddd'
if (pass.length > 10 && pass.includes('!')) {
	console.log('Masz dobre hasło')
} else if (pass.length > 10) {
	console.log('masz super hasło')
} else {
	console.log('masz za krótkie hasło')
}
if (pass.includes('!')) {
	console.log('ok')
} else {
	console.log('brak !')
}
// ----------------------------------

const x = 50
const y = 30

if (x > y) {
	console.log(`${x} jest więszy niż ${y} `)
}

//-------------------------------------

const color = 'blue'
const newColor = 'blue'

if (color == newColor) {
	console.log('Kolory się zgadzają')
} else {
	console.log('kolory się nie zgadzaja')
}

//-------------------------------------

const X = 10
const Y = 10

if (X > Y) {
	console.log('x>y')
} else if (X === Y) {
	console.log('x=y')
} else {
	console.log('x<y')
}
//-------------------------------------

const promo = '50%'

switch (promo) {
	case '10%':
		console.log('Dzisiaj mamy 10% zniżki')
		break

	case '20%':
		console.log('Dzisiaj mamy super zniżki')
		break

	case '30%':
		console.log('Dzisiaj mamy mega zniżki')
		break

	default:
		console.log('normalne ceny')
}

//-------------------------------------
