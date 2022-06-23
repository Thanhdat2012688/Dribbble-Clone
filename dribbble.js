// Xử lí ngăn chặn hành vi mặc đinh khi click vô thẻ a thì load lại trang
const aElements = document.getElementsByTagName('a');
[...aElements].forEach((element) => {
    element.addEventListener('click', (e) => {
        e.preventDefault();
    })
})

// Xử lí khi close thống báo ở header
const closeBtn = document.querySelector('.header-introduce-close');
const introduceInfo = document.querySelector('.header-introduce');

closeBtn.addEventListener('click', (e) => {
    if(e.target.closest('.header-introduce-close-icon')) {
        introduceInfo.style.display = 'none';
    }
});

// Xử lí boxSearch
const iconSearch = document.querySelector('.search-icon');
const formSearch = document.querySelector('.header-navbar-user-search');

iconSearch.addEventListener('click', () => {
    formSearch.classList.toggle('open-width');
})

// Xử lí ẩn hiện form registerer
const signUpBtn1 = document.querySelector('.body-header-message-register');
const signUpBtn2 = document.querySelector('.body-content-sign-up');
const formRegister = document.querySelector('.modal');
const closeFormRegister = document.querySelector('.close-form-register');

signUpBtn1.addEventListener('click', () => {
    formRegister.style.display = 'flex';
})

signUpBtn2.addEventListener('click', () => {
    formRegister.style.display = 'flex';
})

closeFormRegister.addEventListener('click', (e) => {
    if(e.target.closest('.close-form-register-icon'));
    formRegister.style.display = 'none';
})
