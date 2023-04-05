document.body.style.fontFamily = 'Calibri';
let paragraphs = document.getElementsByClassName('color-p');
let painter = document.getElementById('painter');

painter.addEventListener('click', function(){
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
    document.body.appendChild(divContainer);
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

