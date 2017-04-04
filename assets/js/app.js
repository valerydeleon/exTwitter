var contador = 0;
var textoDelTextArea = document.getElementById('inputTextArea');
var textoNombreAutorTweet = document.getElementById('inputNombreAutor');

function escribirTweet(){
  var contenedorDeTweets = document.getElementById('contenedorDeTweets');

  var tweets = document.createElement("p");
  var autorTweet = document.createElement("p");
  var division = document.createElement("hr");


  tweets.innerText = textoDelTextArea.value;
  textoDelTextArea.value = ""

  autorTweet.innerText = textoNombreAutorTweet.value;
  textoNombreAutorTweet.value = "";


  contenedorDeTweets.appendChild(tweets);
  tweets.appendChild(autorTweet);
  contenedorDeTweets.appendChild(division);
}

function contadorDeLetras(){

}
