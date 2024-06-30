function goTopage() {
    window.location.href = 'last.html';
}


document.querySelector('#signup').addEventListener('click', () => {
    setTimeout(goTopage, 2000);
})