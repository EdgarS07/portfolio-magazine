const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-btn');
const navBtnImg = document.querySelector('#nav-btn-img');


navBtn.onclick = () => {
if (nav.classList.toggle ('open')) {
   navBtnImg.src = "./img/Icons/NAV CLOSE.svg"; 
} else {
    navBtnImg.src = "./img/Icons/NAV OPEN.svg"; 
}
}

AOS.init({
    // disable: 'mobile'
//   once: true 
});

//ЗНАЧЕНИЕ ONCE TRUE ПОЗВОЛЯЕТ ИСПОЛЬЗОВАТЬ АНИМАЦИЮ ТОЛЬКО 1 РАЗ ПРИ ПОПАДАНИИ НА САЙТ. СВОЙСТВО disable: 'mobile' ОТКЛЮЧАЕТ АНИМАЦИЮ НА МОБИЛЬНЫХ УСТРОЙСТВАХ


