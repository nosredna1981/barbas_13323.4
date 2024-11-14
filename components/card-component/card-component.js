export function cardcomponent() {
    const localTemplate = 'components/card-component/card-component.html'
    const localStyle = 'components/card-component/card-component.css'
    const element = document.getElementById('card-component')
    if (!element) return


    //Style -> css
    element.innerHTML = ''
    element.innerHTML += `<link rel="stylesheet" href="${localStyle}">`
    
    //Dados
    const services = getServices()
    console.log('>>> services ' , services);


    //Template -> HTML
    fetch(localTemplate)
        .then((res) => res.text())
        .then((component) => {
            element.innerHTML += component
        })
        .catch((error) => {
            console.error("Erro ao montar a navbar:", error);
        })
}

async function getServices() {
let result = []
    await fetch('mock/service.json')
    .then((res) => res.json())
    .then((data) => {
        result = data
    })
    .catch((error) => {
        console.error("Erro ao montar a navbar:", error);
    })
    return result

}