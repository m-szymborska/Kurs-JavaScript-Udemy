const ulist = document.createElement('ul')
document.body.appendChild(ulist)
const number = 10
for(let i = 1; i<= number; i++) {
    const liItem = document.createElement('li')
    liItem.textContent = i
    ulist.append(liItem)
}

const last = ulist.querySelector('li:last-child')
last.textContent = 'Jestem ostatnim elementem.'

last.style.backgroundColor = 'royalblue'
last.style.padding = '20px 40px'



