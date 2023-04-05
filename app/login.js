document.body.style.fontFamily = 'Calibri';
document.title = 'Login';

let btn = document.getElementById('idsubmit');
let fname, lname;
btn.addEventListener('click', function(){
    document.getElementById('idform-section').style.display = 'none';
    document.title = 'Your account';
    fname = document.getElementById('idfname').value;
    lname = document.getElementById('idlname').value;
    welcome(fname, lname);
})

function welcome(f, l){
    let welcome_msg;
    if(f!='' && l!=''){
        welcome_msg = document.createTextNode(`Hello ${f} ${l} :) <3`)
    }
    else{
        welcome_msg = document.createTextNode(`you didn't enter your full name`)
    }
    let welcome_section = document.createElement('section');
    welcome_section.classList.add('flex-center');
    let welcome_div = document.createElement('div');
    welcome_div.classList.add('card');
    welcome_div.appendChild(welcome_msg);
    welcome_section.appendChild(welcome_div);
    document.body.appendChild(welcome_section);
    
}

