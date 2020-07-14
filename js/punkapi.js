
/* copiar el array,
metodo Splice para escoger cervezas al azar,
push a un nuevo array,

buscar en stackoverflow
*/

//---------------

/*
llamada a la api (nombres)

fetch ("https://api.punkapi.com/v2/beers")
.then((response)=>{
   return response.json()
})
.then((data)=>{
console.log(data)
data.forEach(element => {
    var name = element.name
var p = document.createElement("p")
    p.innerHTML = name
    document.body.appendChild(p)
});
})
*/

//llamada a la api (nombres e imagenes)
const beerlist = document.querySelector(".mybeers");


fetch("https://api.punkapi.com/v2/beers")
.then( (response) => {
  return response.json();
})
.then((data) => {
  console.log(data)

// depsues del console.log, crear un nuevo array vacio. Puede llamarse randomBeers y luego hacer un for loop con dos iteraciones, que va a correr 12 veces. 
// durante cada iteración, quitar una cerveza del array data, utilizando splice()
//Para obtener el indice al azar, utilizar Math.random()
// empujar esta cerveza quitada, al randombeer (push)
//cuando el loop termine, iterar sobre el nuevo array randomBeers. Es decir, cambiar la linea 46 "data" por "ranbdomBeer"

  data.forEach( (element) => {
    const div = document.createElement("div");
    div.classList.add("one-beer")
    div.innerHTML = `
    <img src="${element.image_url}" class="image-beer"/>
    <p>${element.name}</p>
  `
  beerlist.appendChild(div);
  })
})
