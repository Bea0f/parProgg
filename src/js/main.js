import "/src/css/style.css";

const theNumber = 53;
let theGuess =0;

while (theGuess != theNumber) {
  if(theGuess == 0){

  }else if(theGuess > theNumber){
    alert("Du gissade för högt");
  }else{
    alert("Du gissade för lågt");
  }
  theGuess = prompt("Gissa talet mellan 0-100");
  console.log(theGuess);
}

 if(theGuess == theNumber){
    alert("Du gissade rätt!");
    document.getElementsByTagName("body").style.backgroundColor = "green";
  }


/* let app = document.getElementById("app");


let numbers = [1, 2, 3, 4, 5];

for(let i = 0; i < numbers.length; i++) {
  let div = document.createElement("div");
  let title = document.createElement("h3");
  
  title.innerHTML = numbers[i];
  app.appendChild(div);
  div.appendChild(title);
  div.className = "num";

  div.addEventListener("click", () => {
    console.log("Du tryckte på: " + numbers[i]);
  }); */
/* div.addEventListener("click", handleClick);

  function handleClick(){
    console.log("Du tryckte på: " + numbers[i]);
  } }
  */

/* const titles = ["The Matrix","Interstellar", "Blade Runner", "Alien"];
const randomTitle = titles[Math.floor(Math.random() * titles.length)];
const film = 'http://www.omdbapi.com/?t=${randomTitle}&apikey=7cc1e25';
let app = document.getElementById("app")

fetch(film)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    let div  = document.createElement("div");
    let h3 = document.createElement("h3");
    let img = document.createElement("img");
    img.src = data.Poster;
    h3.innerHTML = data.Title + " " + data.Year;
    app.appendChild(div);
    div.appendChild(h3);
    div.appendChild(img);
  }); */
/* 
const titles = ["The Matrix", "Interstellar", "Blade Runner", "Alien"];
const randomTitle = titles[Math.floor(Math.random() * titles.length)];
console.log(randomTitle);
const film = 'http://www.omdbapi.com/?t=$"The Matrix"&apikey=7cc1e25';
let app = document.getElementById("app");

fetch(film)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    let div = document.createElement("div");
    let h3 = document.createElement("h3");
    let img = document.createElement("img");
    img.src = data.Poster;
    h3.innerHTML = data.Title + " " + data.Year;
    app.appendChild(div);
    div.appendChild(h3);
    div.appendChild(img);
  });

 */
