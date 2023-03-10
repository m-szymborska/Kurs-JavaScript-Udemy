const numbers = [1, 2, 3, 4, 5, 6]
console.log(numbers);

numbers.unshift(-1, 0)

console.log(numbers);

numbers.shift()
console.log(numbers);

numbers.push()
console.log(numbers);

const numbers = [0, 0, 1, 1, 2, 2, 2]
const colors = ['red', 'green', 'blue', true, 123]
const cars = [123, true, 'audi', 'bmw', 'mercedes', 'ferrari', '🤷‍♂️', '👀']

const numbers2 = numbers.slice(3,7)
console.log(numbers2);

const numbers3 = numbers.slice(1,5)
console.log(numbers3);

const randomStuff = colors.splice(3,2)
console.log(randomStuff);

const newCars = cars.splice(0,8,'test')
console.log(newCars);
console.log(cars);

const letters = [3, 4]

letters.unshift(1, 2)
letters.push(5, 6)
console.log(letters)

console.log(letters.includes(3));

const numbers = [1, 2, 3,]
const food = ['akak', 'jajaj', 'jdd']

const menu = numbers.concat(food)
console.log(...menu);
------------------------------------
const numbers = [1, 5, 13, 26, 48]
function did(x) {
    return x * 5

}
const numbers2 = numbers.map(did)
console.log(numbers2);

for(const number of numbers2){

if (number % 2 === 0) {
    console.log(`Liczba przysta ${number}`)
} else {
    console.log(`Liczba nieparzysta ${number}`)
}}
------------------------------------
const colors = ['blue']
console.log(colors);

colors.unshift('red')
console.log(colors);

colors.push('green')
console.log(colors);

for(i=0; i<colors.length; i++){
    console.log(`Mój ulubiony kolor:${colors[i].charAt(0).toLocaleUpperCase() + colors[i].slice(1)}`);
}

-------------------------------------

const cars = ' Mercedes, Nissan, Doge'

console.log(cars)
const cars2 = cars.split(',')
console.log(cars2)

const cars3 = cars2.length > 3 ? console.log('Jest OK') : console.log('Nie jest OK')

if (cars2.includes('Audi')) {
	cars2.push('Fiat')
	console.log(cars2)
} else {
	cars2.pop()
	console.log(cars2)
}
