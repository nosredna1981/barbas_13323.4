
import { addPerson } from "./../infra/person.repository.js"
export const personService = {
    add
}

function add(person) {
    addPerson(person).then(res => {
        console.log("Adicionado: ", res)
        alert("Adicionado Com Sucesso!")
    })
        .catch(error => {
            console.error("Error: ", error)
            alert("Error ao adicionar o usuário")
        })

}