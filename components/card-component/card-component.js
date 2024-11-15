


export async function cardcomponent() {
    const localTemplate = 'components/card-component/card-component.html'
    const localStyle = 'components/card-component/card-component.css'
    const element = document.getElementById('card-component')
    if (!element) return
    //Pega Dados
    const services = await getServices()
    console.log('>>> services ', services);
    // Pega Template
    fetch(localTemplate)
        .then((res) => res.text())
        .then((component) => {
            //Template -> HTML
            element.innerHTML = mountService(services, component)

            //Style -> css   
            element.innerHTML += `<link rel="stylesheet" href="${localStyle}">`

        })
        .catch((error) => {
            console.error("Erro ao montar o component: ", error);
        })
}

function mountService(dados, template) {
    let result = ""
    // for (let i = 0; i < dados.length; i++) {
    //     let newTemplate = template
    //     result += newTemplate
    //         .replace('{{fotos}}', dados[i].fotos)
    //         .replace('{{nome}}', dados[i].nome)
    //         .replace('{{descricao}}', dados[i].descricao)
    // }

    for (const dado of dados) {
        let newTemplate = template
        result += newTemplate
            .replace('{{fotos}}', dado.fotos)
            .replace('{{nome}}', dado.nome)
            .replace('{{descricao}}', dado.descricao)
    }

    return result
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