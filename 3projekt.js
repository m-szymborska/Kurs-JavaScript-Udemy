const pass = document.querySelector('#password')
const p = document.querySelector('.passinfo')
const letters = /[a-z]/i
const numbers = /[0-9]/
const special = /[!@#$%^&*()]/
const minValue = 10

const showMsg = () => {
	// console.log(pass.value);
	if (
		pass.value.length > minValue &&
		pass.value.match(letters) &&
		pass.value.match(numbers) &&
		pass.value.match(special)
	) {
		p.textContent = 'Masz bardzo dobre hasło'
		p.style.color = 'lime'
	} else if (pass.value.length > minValue && pass.value.match(letters) && pass.value.match(numbers)) {
		p.textContent = 'Masz dobre hasło'
		p.style.color = 'gold'
	} else {
		p.textContent = 'Masz słabe hasło'
		p.style.color = 'red'
	}
}
const checkPassword = () => {
	if (pass.value !== '') {
		showMsg()
	} else {
		p.textContent = 'Nie podałeś hasła...'
		p.style.color = ''
	}
}

pass.addEventListener('keyup', showMsg)
