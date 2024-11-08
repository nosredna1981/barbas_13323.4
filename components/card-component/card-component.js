export function cardComponentTemplate() {
    const localTemplate = 'components/card-component/card-component.html'
    const localStyle = 'components/card-component/card-component.css'
    const element = document.getElementById('card-component')
    if (!element) return


    //Style -> css
    element.innerHTML = ''
    element.innerHTML += `<link rel="stylesheet" href="${localStyle}">`


    //Template -> HTML
    fetch(localTemplate)
        .then((res) => res.text())
        .then((nav) => {
            element.innerHTML += nav
        })
        .catch((error) => {
            console.error("Erro ao montar a navbar:", error);
        })

}