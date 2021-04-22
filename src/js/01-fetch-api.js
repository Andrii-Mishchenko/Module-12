  
/*
 * - HTTP-запросы в браузере
 *  - Fetch API
 *  - Владка Network
 *  - HTTP-методы
 *  - Заголовки
 *  - MIME-типы
 *  - Параметры запроса
 * - Документация REST API
 * - Обработка 404 с fetch
 * - Аутентификация
 * - Библиотеки-обёртки
 * - https://pokeapi.co/
 */

import '../css/common.css';
import pokemonCardTpl from '../templates/pokemon-card.hbs';
import API from './api-service';
// import getRefs from './get-refs';


const cardContainer = document.querySelector('.js-card-container')
const searchForm = document.querySelector('.js-search-form');

searchForm.addEventListener('submit', onSearch);

    
//if submit
function onSearch(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const searchQuery = form.elements.query.value;
    console.log(searchQuery)

    API.fetchPokemon(searchQuery)
        .then(renderPokemonCard)
        .catch(onSearchError)
        .finally(()=>{
            form.reset();
        });
}
    
// // оптимальный способ
// fetchPokemon(3)
//     .then(renderPokemonCard)
//     .catch(error => console.log(error));

// function fetchPokemon(pokemonId) {
//     const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
//     return fetch(url)
//     .then(response =>{
//         return response.json();
//     })

// };

function renderPokemonCard(pokemon){
    const markup = pokemonCardTpl(pokemon);
    cardContainer.innerHTML = markup;
};

function onSearchError(error){
    alert('Request is not corrected.Please, change your request and try again')
}


// // не оптимальный способ
// fetch('https://pokeapi.co/api/v2/pokemon/2').then(response =>{

//     return response.json();
// })
// .then(pokemon =>{
//     console.log(pokemon);
//     const markup = pokemonCardTpl(pokemon);
//     console.log(markup);
//     cardContainer.innerHTML = markup;
// })
// .catch(error =>{
//     console.log(error);
// });


//========================================================//

/*
Query string - параметры запроса

pokemon?limit=100&offset=200.
mysite.com/api/pokemon?имя=значение&имя=значение - это дополнительные настройки нашего запроса
*/

// const url = 'https://pixabay.com/api/';
// const options = {
//     headers: {
//         'key': '21204345-b994baef221a75cda7aa18f50'
//     }
// }
