'use strict';


function getRandomBeers() {


  const beerlist = document.querySelector(".mybeers");
  beerlist.innerHTML = "";

  fetch("https://api.punkapi.com/v2/beers")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data)
      let randomBeers = []

      for (let i = 0; i < 2; i++) {

        const randomIndex = Math.floor((Math.random() * data.length));


        const spliceArray = data.splice(randomIndex, 1);
        const randomBeer = spliceArray[0]
        randomBeers.push(randomBeer);


      }


      randomBeers.forEach((element) => {
        const div = document.createElement("div");
        div.classList.add("one-beer")
        div.innerHTML = `
    <p>${element.name}</p>
    <img src="${element.image_url}"/>
    <p><br>
    ${element.tagline}</p>
  `
        beerlist.appendChild(div);
      })
    })
}
getRandomBeers();


var button = document.createElement("button");
button.innerHTML = "Get beers!";


var body = document.getElementsByTagName("body")[0];
body.appendChild(button);


button.addEventListener("click", getRandomBeers);