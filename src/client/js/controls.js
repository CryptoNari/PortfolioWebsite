const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelectorAll('.main-content');

const pageControls = () => {
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

    // Toggle Dark/light Theme
    const themeBtn = document.querySelector('.theme-btn');

    themeBtn.addEventListener('click', () => {
        let element = document.body;
        element.classList.toggle('light-mode')
    })

}



export {pageControls}