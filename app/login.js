document.body.style.fontFamily = 'Sans-serif';
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


let header = document.getElementsByClassName('header')[0];
header.style.justifyContent = 'space-between';
let dark_mode = document.createElement('input');
dark_mode.classList.add('btn');
dark_mode.setAttribute('type', 'button');
dark_mode.setAttribute('id', 'theme-toggle');
dark_mode.value = 'Toggle';
header.appendChild(dark_mode);

var darkMode = false;


// preference from localStorage should overwrite
if (localStorage.getItem('theme') === 'dark') {
	darkMode = true;
} else if (localStorage.getItem('theme') === 'light') {
	darkMode = false;
}

if (darkMode) {
	document.body.classList.toggle('dark');
    document.querySelectorAll('.form-container')[0].classList.toggle('dark');
    };

    
document.addEventListener('DOMContentLoaded', () => {

    document.getElementById('theme-toggle').addEventListener('click', () => {
		document.body.classList.toggle('dark');
    	localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
	});

});