import { validateName, validateEmail, validateTel, validatePassword } from './service/validator.js';
import { navbarComponentTemplate } from "./../components/nav-component/nav-component.js"
import {cardcomponent} from "./../components/card-component/card-component.js"

navbarComponentTemplate ()
cardcomponent()
validateName()
validateEmail()
validateTel()
validatePassword()

//Função para pegar os Elementos
function getElement(elementSelector) {
    return document.querySelector(elementSelector)
}

// função para preencher o conteúdo do elemento
function SetContentElement(elementSelector, content) {
    const element = getElement(elementSelector)
    if (element) {
        element.innerHtml = content
    }
}

