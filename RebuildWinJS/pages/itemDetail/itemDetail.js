(function () {
    "use strict";

    var nav = WinJS.Navigation,
        ui = WinJS.UI,
        session = WinJS.Application.sessionState;
    
    WinJS.UI.Pages.define("/pages/itemDetail/itemDetail.html", {        

        currentSlide: null,

        init: function () {
            this.listener = this._keyUp.bind(this);
            WinJS.Application.addEventListener('keyUpTriggered', this.listener);
        },

        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            var item = Data.resolveItemReference(options.item), 
                nextButton = element.querySelector("#nextSlide"), 
                previousButton = element.querySelector("#previousSlide"),
                slideContainer = element.querySelector("#slideContainer");

            session.nextItem = Data.getNextItem(options.item);
            session.previousItem = Data.getPreviousItem(options.item),

            element.querySelector(".titlearea .pagetitle").textContent = item.title;

            if (slideContainer && item.slide) {
                var htmlControl = new WinJS.UI.HtmlControl(slideContainer, { uri: 'slides/' + item.slide });
                session.currentSlide = this.currentSlide = item.slide; 
                WinJS.UI.processAll().then(function () {
                    (function (sc) {
                        setTimeout(function () {
                            sc.focus()
                        }, 100);
                    })(slideContainer);
                }); // enable focus for key events - need the DOM to finish rendering first
            }
            else {
                session.currentSlide = this.currentSlide = null;
            }
            
            if (session.nextItem) {
                nextButton.disabled = false;
                nextButton.onclick = this._advanceSlide.bind(this);
            }
            else {
                nextButton.disabled = true;
            }

            if (session.previousItem) {
                previousButton.disabled = false;
                previousButton.onclick = this._revertSlide.bind(this);
            }
            else {
                previousButton.disabled = true;
            }
        },

        unload: function () {
            WinJS.Application.removeEventListener('keyUpTriggered', this.listener);
        },

        _keyUp: function (evt) {
            if (evt.keyCode === 32 && session.nextItem) { // space to advance
                this._advanceSlide();
            }
            else if (evt.keyCode === 8 && session.previousItem) { // BACKSPACE to return to previous slide
                this._revertSlide();
            }
        },

        _advanceSlide: function () {
            if (session.nextItem) {
                nav.navigate("/pages/itemDetail/itemDetail.html", { item: session.nextItem });
            }
        },

        _revertSlide: function () {
            if (session.previousItem) {
                nav.navigate("/pages/itemDetail/itemDetail.html", { item: session.previousItem });
            }
        }
    });
})();
