const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = document.querySelector('.toggle_btn i');
const dropDowunMenu = document.querySelector('.dropdowun__menu');

toggleBtnIcon.onclick = function(){
    dropDowunMenu.classList.toggle('close')
    const isOpen = dropDowunMenu.classList.contains('close')

    toggleBtnIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
}

