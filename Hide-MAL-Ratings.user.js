// ==UserScript==
// @name         Hide MAL Ratings
// @version      2025-04-25
// @description  Hide MAL ratings of 6.5 or higher
// @author       weezimonkey
// @homepage     https://github.com/Guerzoniansus/Hide-MAL-Ratings
// @match        https://myanimelist.net/anime/*
// @match        https://myanimelist.net/manga/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=myanimelist.net
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // ========================================
    //
    // FEEL FREE TO CHANGE THIS
    //
    const minimumScoreNeededToHide = 6.5;
    //
    //
    // ========================================

    const scoreElements = document.getElementsByClassName("score-label");

    Object.values(scoreElements)
        .filter(shouldHideThisScoreElement)
        .forEach(hideScoreElement);

    function shouldHideThisScoreElement(scoreElement) {
        const score = scoreElement.textContent;
        return score >= minimumScoreNeededToHide;
    }

    function hideScoreElement(scoreElement) {
        scoreElement.style.display = "none";
    }
})();
