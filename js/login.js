'use strict';

class Login {
    constructor(){
        this.emailInput = document.querySelector("#email");
        this.passwordInput = document.querySelector("#password");

        this.buttonInput = document.querySelector("#login-button");
        this.messageContainer = document.querySelector(".message-container");
        
    }

    //metodo submit, que va a gestionar el envio de los datos (evento "submit")
    submit = (event) => {
        event.preventDefault();

        const userDB = db.getAllUsers();

        const email = this.emailInput.value;
        const password = this.passwordInput.value;

        //intentar encontrar el usuario, utilizando el metodo "find",que es distinto que un foreach o un forloop
        const user = userDB.find( (userObj) => {
            if(userObj.email === email && userObj.password === password){
                return true;
            }
        })
        this.showMessage(user);
    
    }
    

    

    //mostrar el mensaje de error o mensaje de exito
    showMessage = (user) => {

    this.messageContainer.innerHTML = "";

        const message = document.createElement("p");

        if (user){
            message.innerHTML = `Hello, ${user.name}! Welcome to Lupulus`;
            message.classList.add("correct-message");
        } else {
            message.innerHTML = "Wrong email or password"
        }
    
        this.messageContainer.appendChild(message);
        
        if(user) this.redirect();

    }
    redirect = () => {
        setTimeout ( ()=> location.assign('index.html'), 3000);
    }
}

   
   
   const login = new Login();

    login.buttonInput.addEventListener("click", login.submit);




