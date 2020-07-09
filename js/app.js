const popupButton = document.getElementById('popup-open');
console.log(popupButton);

const popupWindow = document.getElementById('popup-search');
console.log(popupWindow);

popupButton.addEventListener('click', function() {
    popupWindow.classList.toggle('popup-search--active');
});