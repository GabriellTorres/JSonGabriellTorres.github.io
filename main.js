
let header = document.querySelector('header');
let section = document.querySelector('section');

let requestURL = 'https://rafaelescalfoni.github.io/desenv_web/filmes.json';

let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function(){
    let filmes = request.response;
    showFilmes(filmes);
}

showFilmes(jsonObj){
    for(let i = 0; i<jsonObj.le; i++)
}