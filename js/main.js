const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = document.querySelector('.toggle_btn i');
const dropDowunMenu = document.querySelector('.dropdowun__menu');

toggleBtnIcon.onclick = function(){
    dropDowunMenu.classList.toggle('open')
    const isOpen = dropDowunMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
}

