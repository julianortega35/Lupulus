'use strict'

class Database {
    //recuperar los usuarios - el array

    getAllUsers = () =>{

        // primero recuperar el string
       const usersStr = localStorage.getItem("users");

       // luego convertir el string a un array de objetos
       const usersArr = JSON.parse (usersStr);

       //Si todavia no hay usuarios, devuelve el array vacio
        if (usersArr === null) {
            return [];
        } else {
            return usersArr;
        }

    }

    saveNewUser = (newUser) => {

        //primero recuperar el array de los usuarios del localStorage
        const usersArr = this.getAllUsers() ;

        //actualizar el array
        usersArr.push(newUser);

        // convertir el array a un string
        const usersStr = JSON.stringify(usersArr);

        //almacenarlo de nuevo
        localStorage.setItem("users",usersStr);

    }

}
//crea un nuevo objeto(instancia) de la clase Database. Es un objeto con dos métodos (getAllUsers y saveNewUser)
const db = new Database();