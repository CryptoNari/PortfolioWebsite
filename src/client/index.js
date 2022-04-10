import _ from 'lodash';
import './styles/style.scss';
import homeImage from './img/home.jpg';
import portImage1 from './img/port1.jpg'
import portImage2 from './img/port2.jpg';
import portImage3 from './img/port3.jpg';
import portImage4 from './img/port4.jpg';
import portImage5 from './img/port5.jpg';
import portImage6 from './img/port6.jpg';
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
var portImg1 = document.getElementById('port-img-1');
var portImg2 = document.getElementById('port-img-2');
var portImg3 = document.getElementById('port-img-3');
var portImg4 = document.getElementById('port-img-4');
var portImg5 = document.getElementById('port-img-5');
var portImg6 = document.getElementById('port-img-6');
var blogImg1 = document.getElementById('blog-img-1');

homeImg.src = homeImage;
portImg1.src = portImage1;
portImg2.src = portImage2;
portImg3.src = portImage3;
portImg4.src = portImage4;
portImg5.src = portImage5;
portImg6.src = portImage6;
blogImg1.src = portImage1;

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