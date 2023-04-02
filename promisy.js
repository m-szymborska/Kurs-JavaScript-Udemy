const test = new Promise((resolve, reject) => {
	if (true) {
		resolve('jest ok')
	} else {
		reject('błąd')
	}
})

test.then(info => console.log(info)).catch(err => console.error(err))
