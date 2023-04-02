document.getElementsByTagName('body')[0].style.fontFamily = `Calibri`;

function writeInPage(text){
    document.write(`your text is: ${text}`);
}
function addTwoNumbers(n1, n2){
    return `${n1 + n2}`;
}
writeInPage(addTwoNumbers(parseInt(addTwoNumbers(2,5)),5));


let paragraphs = document.getElementsByClassName('color-p');
let painter = document.getElementById('painter');


// painter.onclick = function(){
//     paragraphs[0].style.color = `red`;
//     paragraphs[1].style.color = `blue`
//     painter.value = 'success'.toUpperCase();
//     painter.style.backgroundColor = `green`;
//     painter.style.color = `yellow`;
//     painter.style.display = `block`;
// }

// painter.onclick = function(){
//     painter.style.background = `red`;
// }


painter.addEventListener('click', function(){
    paragraphs[0].style.color = `red`;
    paragraphs[1].style.color = `blue`
    painter.value = 'success'.toUpperCase();
    painter.style.backgroundColor = `green`;
    painter.style.color = `yellow`;
    painter.style.display = `block`;
});

painter.addEventListener('click', function(){
    painter.style.background = `red`;
});
