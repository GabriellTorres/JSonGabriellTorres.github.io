
let header = document.querySelector('header');
let section = document.querySelector('section');

let url = 'https://rafaelescalfoni.github.io/desenv_web/filmes.json';

async function fetchFilmes() {
    try {
        const request = await fetch(url);
        const objFilmes = await request.json();
        showFilmes(objFilmes);
    } catch (error) {
        console.error("Erro ao carregar os filmes:", error);
    }
}

function showFilmes(jsonObj){
    for(let i = 0; i<jsonObj.length; i++){
        const myDiv = document.createElement('div');
        myDiv.classList.add('cartaz');

        // Parte 1 - Informações principais do filme
        const div1 = document.createElement('div');
        div1.classList.add('part1');

        const img = document.createElement('img');
        img.classList.add('imagem');
        img.src = jsonObj[i].figura;
        img.alt = `imagem do filme: ${jsonObj[i].titulo}`; 

        //Define a cor da classificação
        const classificacao = document.createElement('div');
        classificacao.classList.add('classificacao');
        classificacao.textContent = jsonObj[i].classificacao;
        const classificacaoValue = Number(jsonObj[i].classificacao);
        if(classificacaoValue <= 12){
            classificacao.style.backgroundColor = 'green'; 
        }
        else if(classificacaoValue < 18){
            classificacao.style.backgroundColor = 'orange';
        }
        else{
            classificacao.style.backgroundColor = 'red';
        }

        const titulo2 = document.createElement('h2');
        titulo2.classList.add('titulo-2')
        titulo2.textContent = jsonObj[i].titulo;

        const para1 = document.createElement('p');
        para1.classList.add('generos')
        para1.textContent = `Gêneros: ${jsonObj[i].generos.join(', ')}`;

        const para2 = document.createElement('p');
        para2.classList.add('elenco')
        para2.textContent = `<strong>Elenco:</strong>${jsonObj[i].elenco.join(', ')}`;

        div1.appendChild(para1);
        div1.appendChild(para2);
        div1.appendChild(titulo2);
        div1.appendChild(classificacao);
        div1.appendChild(img);
        myDiv.appendChild(div1);

         // Parte 2 - Resumo e títulos semelhantes
        const div2 = document.createElement('div');
        div2.classList.add('part2');

        const resumo = document.createElement('p');
        resumo.classList.add('resumo')
        resumo.textContent = jsonObj[i].resumo;

        const titulo4 = document.createElement('h4');
        titulo4.classList.add('titulos-similares');
        titulo4.textContent = `Titulos Similares`;

        const lista = document.createElement('ul');
        for(let j = 0; j<jsonObj[i].titulosSemelhantes.length; j++){
            const listItem = document.createElement('li');
            const listImg = document.createElement('img');
            listImg.classList.add('img-titulos-similares');
            let indice = jsonObj[i].titulosSemelhantes[j];
            listImg.src = jsonObj[indice].figura;
            listImg.alt = `Título semelhante: ${jsonObj[indice].titulo}`
            listItem.appendChild(listImg);
            lista.appendChild(listItem);
        }

        div2.appendChild(lista);
        div2.appendChild(titulo4);
        div2.appendChild(resumo);
        myDiv.appendChild(div2);

        document.body.appendChild(myDiv);
    }
}
// Chama a função para buscar os filmes
fetchFilmes();