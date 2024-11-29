import { validateName, validateEmail, validateTel, validatePassword } from '../service/validator.js';
import { Person } from "../domain/person.js";
import {personService} from "../service/person.service.js"

validateName()
validateEmail()
validateTel()
validatePassword()
submitForm()

function getFormPerson() {
    const person = new Person()
    person.name = document.querySelector("#nameInput").value
    person.phone = document.querySelector("#telInput").value
    person.email = document.querySelector("#emailInput").value
    person.password = document.querySelector("#passwordInput").value
    return person
}

function submitForm() {
const buttonSubmit = document.querySelector("#submitForm")
buttonSubmit.addEventListener("click", () => {
    const person = getFormPerson()
    console.log(person)
    personService.add(person)

})
}
