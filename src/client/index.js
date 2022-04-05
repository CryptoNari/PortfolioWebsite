import _ from 'lodash';
import './styles/style.scss';
import homeImage from './img/home.jpg';
import printMe from './js/print.js';

//import './logoipsum-logo-50.svg';

const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelectorAll('.main-content');

function pageTransition() {
    //Button Click active class/section
    for(let i = 0; i < sectBtn.length; i++){
        sectBtn[i].addEventListener('click', function() {
            let currentBtn = document.querySelectorAll('.active-btn');
            let currentSec = document.querySelectorAll('.active');
            currentBtn[0].className = currentBtn[0].className.replace(' active-btn', '');
            currentSec[0].className = currentSec[0].className.replace(' active', '');
            this.className += ' active-btn';
            sections[i].className += ' active';
        })
    }


}

var homeImg = document.getElementById('img-home');
homeImg.src = homeImage;

/* function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;

    element.appendChild(btn);

    return element;
}

document.body.appendChild(component()); */

pageTransition();

// Add the image to our existing div.
    /* const myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon); */