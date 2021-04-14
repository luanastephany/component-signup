// Pegando o container do input e o próprio input
const firstname = document.getElementById('firstname')
const inputFirstname = firstname.children[0].children[0]

inputFirstname.addEventListener('input', event => {
    const value = event.target.value

    //se estiver vazio, adicionar erro; se tiver letras, tirar o erro
    if (value.length === 0) {
        firstname.classList.add('error')
    } else {
        firstname.classList.remove('error')
    }
})

//input do sobrenome/lastname
const lastname = document.getElementById('lastname')
const inputLastname = lastname.children[0].children[0]

inputLastname.addEventListener('input', event => {
    const value = event.target.value

    //se estiver vazio, adicionar erro; se tiver letras, tirar o erro
    if (value.length === 0) {
        lastname.classList.add('error')
    } else {
        lastname.classList.remove('error')
    }
})

