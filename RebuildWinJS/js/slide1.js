(function () {

    'use strict';

    var session = WinJS.Application.sessionState, onRightArrow;

    onRightArrow = function (e) {
        if (e.handled) {
            return;
        }

        if (session.currentSlide !== 'slide1.html') {
            return;
        } 
        var book = document.getElementById("bookImg");
        if (e.keyCode === 39) {
            e.handled = true;
            if (book.className === 'hidden') {
                book.className = "half block-center animated swing";
                document.getElementById("bookLink").className = 'stretch-horizontal animated fadeInUpBig';
            }
        }
    }

    if (!session.slide1) {
        session.slide1 = true;
        WinJS.Application.addEventListener("keyUpTriggered", onRightArrow);
    }
})();