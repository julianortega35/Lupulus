'use strict'

class Signup {
    constructor (){
        this.nameInput = document.querySelector("#name");
        this.emailInput = document.querySelector("#email");
        this.passwordInput = document.querySelector("#password");
        this.repeatPasswordInput = document.querySelector("#repeat-password");
  
        this.buttonInput = document.querySelector("#signup-button");
        this.errorWrapper = document.querySelector(".message-container");
    }

//gestionar cambios del input "email"

handleEmailInput = (event) => {
    const email = event.target.value;

    // validar el texto del input email
    validator.validateValidEmail(email);

    const errors = validator.getErrors();

    //si el nombre del email es valido
    if(!errors.invalidEmailError){
    //comprueba si el mail es unico 
    validator.validateUniqueEmail(email);
    }

    this.setErrorMessages();

}

//gestionar cambios del input "password"

handlePasswordlInput = (event) => {
    const password = event.target.value;
    const passwordRepeat = this.repeatPasswordInput.value;

    // validar el texto del input password

    validator.validatePassword(password);
    validator.validatePasswordRepeat(password,passwordRepeat);

    this.setErrorMessages();
}

//gestionar cambios del input "repeat-password"

handleRepeatPasswordInput = (event) => {

    const passwordRepeat = event.target.value;
    const password = this.passwordInput.value;


    // validar el texto del input passwprd
    validator.validatePassword(password);
    validator.validatePasswordRepeat(password,passwordRepeat);
    
    
    this.setErrorMessages();
}

//gestionar cambios de los datos (submit)

saveData = (event) => {
    //cuando el evento ocurre, cancelalo y no recargues la página
    event.preventDefault();
    // recoger los valores de cada input

    const name = this.nameInput.value;
    const email = this.emailInput.value;
    const password = this.passwordInput.value;
    const repeatPassword = this.repeatPasswordInput.value;


    const newUser =  new User (name, email, password);


 // queremos guardar el nuevo usuario en una base de datos ficticia

 db.saveNewUser(newUser);


// vaciar el formulario

this.nameInput.value = "";
this.emailInput.value = "";
this.passwordInput.value = "";
this.repeatPasswordInput.value = "";

this.showSuccessMessage();
this.removeMessages();



}

//registrar funciones para cada input/campo

addListeners = () => {
    //escucha los cambios de texto en este input
    this.emailInput.addEventListener("input", this.handleEmailInput);
    this.passwordInput.addEventListener("inpu", this.handlePasswordlInput); 
    this.repeatPasswordInput.addEventListener("input", this.handleRepeatPasswordInput);
   
    this.buttonInput.addEventListener("click", this.saveData);

    }

    showSuccessMessage = () => {
    //vacia los errores para que no se sumen
    this.errorWrapper.innerHTML= "";

    const errorsObj = validator.getErrors();
     //convertir el objeto con los errores a un array de strings
 
     const errorsStringsArr = Object.values(errorsObj);

    if (errorsStringsArr.length > 1) {
        return;
    }

    const successMessageP = document.createElement("p");
    successMessageP.innerHTML= "The account was created";

    this.errorWrapper.appendChild(successMessageP);


    }

    removeMessages = () => {
        setTimeout( () =>{ 
            this.errorWrapper.innerHTML = ""
        },2000)
    }


    setErrorMessages = () => {
        //vacia los errores para que no se sumen
        this.errorWrapper.innerHTML= "";

        const errorsObj = validator.getErrors();

    //convertir el objeto con los errores a un array de strings
 
        const errorsStringsArr = Object.values(errorsObj);

        errorsStringsArr.forEach ((errorStr) => {
        const errorMessageP = document.createElement("p");
        errorMessageP.innerHTML= errorStr;

        this.errorWrapper.appendChild(errorMessageP);
        

     })

}

}

//crear una nueva instancia del objeto (Signup)


const signup = new Signup();

window.addEventListener("load", signup.addListeners );