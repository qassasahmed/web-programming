document.body.style.fontFamily = 'Calibri';
let paragraphs = document.getElementsByClassName('color-p');
let painter = document.getElementById('painter');

painter.addEventListener('click', function(){
    for(const para of paragraphs) para.classList.add('hide');
    painter.classList.add('hide');
});

painter.addEventListener('click', function(){
    // let divContainer = document.createElement('div');
    // divContainer.classList.add('flex-center');
    // for(let i = 0; i < 5; i++){
    //     let divCard = document.createElement('div');
    //     divCard.classList.add('card');
    //     let text = document.createTextNode('This is my text');
    //     divCard.appendChild(text);
    //     divContainer.appendChild(divCard); 
    // }
    // document.body.appendChild(divContainer);
    let timeleft = 20;
    function countdown(){ 
        document.getElementById("seconds").innerHTML = `redirecting to login page in <span id="timer">${timeleft}</span> seconds`;        
        if(timeleft > 0){ 
            window.setTimeout(countdown, 1000);
        }
        else window.location.href = './pages/login.html';
        timeleft--;
    }

    let timing_link = document.createElement('a');
    timing_link.setAttribute('href', "https://www.w3schools.com/js/js_timing.asp");
    timing_link.setAttribute('target', "_blank");
    timing_link.innerHTML = '<b> <u> click here </u> </b> bto know more about timing functions in javascript'
    document.body.appendChild(timing_link);
    window.setTimeout(countdown, 1000);
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

