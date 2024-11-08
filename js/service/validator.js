validateRequired()

export function validateName() {
    const element = document.querySelector("#nameInput")
    const message = document.querySelector("#nameHelp")
    if (!element) return
    element.addEventListener('blur', (e) => {
        const value = e.target.value
        console.log(value)
        let content = ''
        if (value == '') {
            content = '<span class="text-danger"> Nome inválido </span>'
            // message.innerHTML = '<span class="text-danger"> Nome invalido </span>'
        }
        message.innerHTML = content
        // else {
        //     message.innerHTML = ''
        // }
    })
}

export function validateEmail() {
    const element = document.querySelector("#emailInput")
    const message = document.querySelector("#emailHelp")
    if (!element) return
    element.addEventListener('keyup', (e) => {
        const value = e.target.value
        console.log(value)
        let error = ''
        // if (value.indexOF('@') === -1 || value.indexOF('.') === -1) {
        const regexEmail = (/^[a-z\d]+\@[a-z]+\.([a-z]{3})+$/g)
        if (!regexEmail.test(value)) {
            error = '<span class="text-danger"> E-mail inválido </span>'
        }
        message.innerHTML = error
    })
}
export function validateTel() {
    const element = document.querySelector("#telInput")
    const message = document.querySelector("#telHelp")
    if (!element) return
    element.addEventListener('keyup', (e) => {
        element.setAttribute('maxlenght', '15')
        const value = e.target.value
        const regexTel = /^\([0-9]{2,3}\)\s[0-9]{5}-[0-9]{4}$/g
        let error = ''
        if (!regexTel.test(value)) {
            error = '<span class="text-danger">Telefone inválido. Formato: "(999) 99999-9999"</span>'
        }
        message.innerHTML = error
        // SetContentElement("#telHelp", error)        
    })
}

export function validatePassword() {
    const element = document.querySelector("#passwordInput")
    const message = document.querySelector("#passwordHelp")
    if (!element) return
    element.addEventListener('keyup', (e) => {
        const value = e.target.value
        if (value.lenght < 8) {
            menssage.innerHTML = '<span class="text-danger"> Senha Muito curta! Minimo de 8 Caracteres </span>'
        }else {
            message.innerHTML = ''
        }
    })
}

function validateRequired() {
    const elements = document.querySelectorAll("[required]")
    console.log(elements)
    //const message = document.querySelector("#nameHelp")
} 