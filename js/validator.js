'use strict'

class Validator {
constructor (){
    //mensajes predeterminados
    this.inavlidEmailError = "Introduce a valid email";
    this.emailExitsError = "This email is already in use";
    this.passwordError = "Password must be at least 6 characters";
    this.repeatPasswordError = "Fields do not match";

    //objeto con los errores que van a ser mostrados al usuario
    this.errors = {
        inavlidEmailError: this.inavlidEmailError,
        passwordError: this.passwordError,
        repeatPasswordError: this.repeatPasswordError,
    }
}


   //validar el nombre del email 
   validateValidEmail = (email) => {
       
        //comprobar si el emial es válido. Si es valido, quitar el mensaje de error
        if (this.emailIsValid(email)){
            delete this.errors.inavlidEmailError;
        }else{
             // si el emial no es válido, mostrar mensaje de error
            this.errors.inavlidEmailError = this.inavlidEmailError;
        }

   }


 
   // Es una funcion auxiliar de "validateEmail"

    emailIsValid = (email) => {
          //RegEx objeto especial - contiene las reglas de la sintaxis
          const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
          //metodo test: prueba si la cadena cumple las reglas y dvuelve true o false
           const isValid = emailRegex.test(email);

           return isValid;
          

    }

    // validar si el email es unico
    validateUniqueEmail = (newEmail) => {
      const usersDB =  db.getAllUsers(); 

        let emailUnique = true


      if (usersDB.length > 0){
          usersDB.forEach ((userObj)=>{
              //si el email ya está tomado, cambia el valor de la variable emailUnique a false
              if (userObj.email === newEmail){
                  emailUnique = false


              }

          })

          if (emailUnique) {
              //quitar el mensaje de error
              delete this.errors.emailExitsError;
          }else {
              //si el mail no es unico, poner el mensaje de error de nuevo
              this.errors.emailExitsError = this.emailExitsError
          }

      }
    }


   //validar la longitud del password

   validatePassword = (password) => {
    if (password.length > 6){
        delete this.errors.passwordError;
    } else {
        // si el password tiene menos de 6 caracteres, poner el mensaje de error
        this.errors.passwordError = this.passwordError;
    }

   }


   //validar si el password y el repeat password coinciden
    validatePasswordRepeat = (password, passwordRepeat) => {
        if (password === passwordRepeat){
            // si los dos passwords coinciden, quita el error
            delete this.errors.repeatPasswordError;
        } else{
            // si no coinciden, poner el mensaje
            this.errors.repeatPasswordError = this.repeatPasswordError;
        }

    }  

    //obtener el objeto con errores, para mostrarlos al usuario en la página Signup 
    getErrors = () => {
         return this.errors;
    }

    // reiniciar los errores, para el próximo Signup
    resetValidator = () => {
        this.errors = {
            inavlidEmailError: this.inavlidEmailError,
            passwordError: this.passwordError,
            repeatPasswordError: this.repeatPasswordError,

        }
    }

}

const validator = new Validator ();