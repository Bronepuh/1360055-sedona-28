var form = document.querySelector('.popup-form');
var popupButton = document.getElementById('popup-open');
var popupWindow = document.getElementById('popup-search');
var dateIn = document.getElementById('date-in');
var dateOut = document.getElementById('date-out');
var countOld = document.getElementById('old');
var countChildren = document.getElementById('children');
var countButtons = document.querySelectorAll('.count-btn');

popupButton.addEventListener('click', function() {
    popupWindow.classList.toggle('popup-search--active');
});

form.addEventListener('click', function(evt) {
    if(!dateIn.value || !countOld.value || !countChildren.value) {
        evt.preventDefault();
        popupWindow.classList.remove('popup--error');
        popupWindow.offsetWidth = popupWindow.offsetWidth;
        popupWindow.classList.add('popup--error');
        dateIn.focus();
    } else if(!dateOut.value) {
        evt.preventDefault();
        popupWindow.classList.remove('popup--error');
        popupWindow.offsetWidth = popupWindow.offsetWidth;
        popupWindow.classList.add('popup--error');
        dateOut.focus();
    }
});

window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
        if (popupWindow.classList.contains('popup-search--active')) {
            evt.preventDefault();
            popupWindow.classList.remove('popup-search--active');
            popupWindow.classList.remove('popup--error');
        }
    }
});

countButtons[0].addEventListener('click', function() {
    if(countOld.value > 0){
        countOld.value--
    }
});

countButtons[1].addEventListener('click', function() {
    if(countOld.value >= 0){
        countOld.value++
    }
});

countButtons[2].addEventListener('click', function() {
    if(countChildren.value > 0){
        countChildren.value--
    }
});

countButtons[3].addEventListener('click', function() {
    if(countChildren.value >= 0){
        countChildren.value++
    }
});

