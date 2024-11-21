
import { navbarComponentTemplate } from "./../components/nav-component/nav-component.js"


navbarComponentTemplate ()


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

