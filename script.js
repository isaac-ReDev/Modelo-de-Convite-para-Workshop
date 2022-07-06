const h1 = document.querySelector('[data-js="typing-1"]');
const h2 = document.querySelector('[data-js="typing-2"]');
const h3 = document.querySelector('[data-js="typing-3"]');


const hs = [h1,h2,h3];

const message = ['>SEMANA INGLES PARA DEVS_', 'De 04 a 10 de Julho de 2022', '>Um evento gratuito focado em programadores que querem aprender inglês para mudar de nível na carreira.'];

let messageIndex = 0;
let charactersIndex = 0;
let currentMessage = '';
let currentCharacters = '';
let  i = 0;



function typingText(){
    currentMessage       = message[messageIndex];
    currentCharacters    = currentMessage.slice(0, charactersIndex++);
    hs[i].innerHTML     = currentCharacters;

    if(currentCharacters.length === currentMessage.length ){
        messageIndex++;
        charactersIndex = 0;
        i++;
    }
}

setInterval(typingText, 50);

