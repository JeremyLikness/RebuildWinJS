var bulletManager = (function () {

    'use strict';

    var session = WinJS.Application.sessionState, bulletManager;

    function BulletManager() {
        this.slideIndex = {};
    }

    BulletManager.prototype.register = function (slideName, bulletList) {
        
        if (this.slideIndex[slideName]) {
            return;
        }

        this.slideIndex[slideName] = {
            bullets: bulletList,
            currentBullet: 0
        };
    };

    BulletManager.prototype.onRightArrow = function (e) {
        if (e.handled) {
            return;
        }

        if (!this.slideIndex[session.currentSlide]) {
            return;
        }

        if (e.keyCode === 39) {

            e.handled = true;

            var slide = this.slideIndex[session.currentSlide];

            if (document.getElementById(slide.bullets[0]).className.indexOf('hidden') >= 0) {
                slide.currentBullet = 0;
            }

            if (slide.currentBullet === slide.bullets.length) {
                return;
            }

            var bullet = document.getElementById(slide.bullets[slide.currentBullet]);
            var className = bullet.className;
            bullet.className = className.replace('hidden', 'animated pulse');
            slide.currentBullet += 1;
        }
    }

    bulletManager = new BulletManager();
    WinJS.Application.addEventListener("keyUpTriggered", bulletManager.onRightArrow.bind(bulletManager));
    return bulletManager;
})();