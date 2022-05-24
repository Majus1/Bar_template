// Simple hello mesage that check if file is linked correctly
console.log("scrollable-header.js is linked");

(function () {
    var doc = document.documentElement;
    var w = window;
    var header = document.getElementById("brand-header");

    /*
    Define four variables: curScroll, prevScroll, curDirection, prevDirection
    */

    var curScroll = prevScroll = w.scrollY || doc.scrollTop;
    var curDirection = prevDirection = 0;
    
    /*
    How it works:
    -------------
    
    Creata a scroll event listiner
    • Create a function that checks scroll position each time a user scrolls
    • Compare curScroll and prevScroll values to find scroll direction
    • scroll up -1, scroll dowm -2, initial -0  

    • Then set the direction values to curDirection
    • Compare curDirection and prevDirectioni

    • If they are different, call another function to show ore hide the header

    Example:
    • Example 1: user scroll down: curDirection 2, prevDirection 0 ... hide the headerw
    • Example 2: user scroll down again curDirection 2, prevDirection 2 ... do nothin (header alredy hidden)
    • Example 3: user scroll up curDirection 1, prevDirection 2 ... show the header
    */



    var checkScroll = function() {
        curScroll = w.scrollY || doc.scrollTop
        if (curScroll > prevScroll) {
            // Scroll down
            curDirection = 2;
        } else {
            // Scroll up
            curDirection = 1;
        }

        if (curDirection !== prevDirection) {
            toggleHeader();
        }
        prevDirection = curDirection;
        prevScroll = curScroll
    };

    var toggleHeader = function() {
        if (curDirection === 2) {
            header.classList.add("hide")
        } else if ( curDirection === 1) {
            header.classList.remove("hide");
        }
    };
    window.addEventListener("scroll", checkScroll);
})();