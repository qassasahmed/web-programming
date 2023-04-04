document.getElementsByTagName('body')[0].style.fontFamily = `Calibri`;
let body = document.body;

function writeInPage(text){
    document.write(`your text is: ${text}`);
}
function addTwoNumbers(n1, n2){
    return `${n1 + n2}`;
}

// parsing string into number (int)
// writeInPage(addTwoNumbers(parseInt(addTwoNumbers(2,5)),5));


let paragraphs = document.getElementsByClassName('color-p');
let painter = document.getElementById('painter');

// painter.onclick = function(){
//     paragraphs[0].style.color = `red`;
//     paragraphs[1].style.color = `blue`;
// };

// painter.onclick = changeColor();

// function changeColor(){
//     painter.value = 'success'.toUpperCase();
//     painter.style.backgroundColor = `green`;
//     painter.style.color = `yellow`;
// }

painter.addEventListener('click', function(){
    // paragraphs[0].style.display = `none`;
    // paragraphs[1].style.display = `none`;
    for(const para of paragraphs) para.classList.add('hide');
    painter.classList.add('hide');
});

painter.addEventListener('click', function(){
    let divContainer = document.createElement('div');
    divContainer.classList.add('flex-center');
    for(let i = 0; i < 5; i++){
        let divCard = document.createElement('div');
        divCard.classList.add('card');
        let text = document.createTextNode('This is my text');
        divCard.appendChild(text);
        divContainer.appendChild(divCard); 
    }
    body.appendChild(divContainer);
});






















// painter.addEventListener('click', function(){
//     painter.style.display = 'none'
//     for (const p of paragraphs) p.classList.add('hide')
//     let divContainr = document.createElement(`div`);
//     divContainr.classList.add('flex-center');

//     for (let index = 0; index < 5; index++) {
//         let divCard = document.createElement(`div`);
//         divCard.classList.add('card')
//         let divText = document.createTextNode(`This is a div`);
//         divCard.appendChild(divText);
//         divContainr.appendChild(divCard) 
//     }
//     document.body.appendChild(divContainr)
// });

