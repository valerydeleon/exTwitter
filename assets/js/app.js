var textoDelTextArea = document.getElementById('inputTextArea');
var textoNombreAutorTweet = document.getElementById('inputNombreAutor');
var contadorTweetsClick = document.getElementById("contadorTweets");
var contadorTweets = 0;

function escribirTweet(){
  var contenedorDeTweets = document.getElementById('contenedorDeTweets');

  var tweets = document.createElement("p");
  var autorTweet = document.createElement("p");
  var division = document.createElement("hr");

  tweets.innerText = textoDelTextArea.value;
  textoDelTextArea.value = ""
  //tweets.width = "100px"

  autorTweet.innerText = "Creado por: " + textoNombreAutorTweet.value;
  textoNombreAutorTweet.value = "";
  // autorTweet.width = "100px";
  autorTweet.align = "right";
  autorTweet.required
  // autorTweet.innerText = "Creado por: " +

  //division.width = "300px";

  contenedorDeTweets.appendChild(tweets);
  tweets.appendChild(autorTweet);
  contenedorDeTweets.appendChild(division);
}

function contadorDeLetras(){
  //
  //var contenedorCaracteres = document.getElementById("caracteres");
  document.forms[0].caracteres.value = document.forms[0].texto.value.length;
  //document.forms[0].caracteres.value = document.forms[0].texto.value.length
}

function contadorClicks(){

}
