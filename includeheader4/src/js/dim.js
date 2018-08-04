(function () {
    var spanToggle = document.getElementById("toggle");
    var widthnavbarin = document.getElementById('navbar');
    var toggleul = "toggleul";
    var oldclass = "nav";
    var newclass = "test";
    var toggle = "toggle";
    var see = "see";

    window.addEventListener("resize", resizeThrottler, false);

    var resizeTimeout;
    function resizeThrottler() {
        // ignore resize events as long as an actualResizeHandler execution is in the queue
        if (!resizeTimeout) {
            resizeTimeout = setTimeout(function () {
                resizeTimeout = null;
                actualResizeHandler();

                // The actualResizeHandler will execute at a rate of 15fps
            }, 100);
        }
    }
    function resettoggleul() {
        var elmtnav = widthnavbarin.firstElementChild.children;
        var seeclass = widthnavbarin.getElementsByClassName(see);
        spanToggle.innerHTML = "\u2261";
        spanToggle.removeAttribute("style");
        if (elmtnav.length > 0) {
            for (var i = 0; i < elmtnav.length; i++) {
                if (elmtnav[i].classList.contains(toggleul)) {
                    elmtnav[i].classList.remove(toggleul);
                    console.log("i   " + i + "   " + elmtnav[i].classList);
                }else if(elmtnav[i].classList.contains(newclass)){
                    elmtnav[i].classList.remove(oldclass);
                    elmtnav[i].classList.add(newclass);

                }else if(elmtnav[i].classList.contains(see)){
                    elmtnav[i].classList.remove(see);

                }
            }
        }
        if (seeclass.length > 0){
            for (var i = 0; i < seeclass.length; i++) {
                seeclass[i].classList.remove(see);
            }
        }
    }
    function actualResizeHandler() {
        // handle the resize event


        var navwidth = 0;
        var contentwidth = widthnavbarin.firstElementChild.offsetWidth;
        var elmtnav = widthnavbarin.firstElementChild.children;

        
        if (elmtnav.length > 0) {
            for (var i = 0; i < elmtnav.length; i++) {
                if (elmtnav[i].offsetWidth === 0) {
                    if (elmtnav[i].classList.contains(newclass)) {
                        elmtnav[i].classList.remove(newclass);
                        elmtnav[i].classList.add(oldclass);
                        navwidth = navwidth + elmtnav[i].offsetWidth;
                        elmtnav[i].classList.remove(oldclass);
                        elmtnav[i].classList.add(newclass);
                    }

                } else {
                    navwidth = navwidth + elmtnav[i].offsetWidth;
                }
            }
        }
        if (navwidth + 50 > contentwidth) {
            resettoggleul();
            for (var i = 0; i < elmtnav.length; i++) {
                //console.log(elmtnav[i]);
                if (i !== 0) {
                    if (!elmtnav[i].classList.contains(newclass) && !elmtnav[i].classList.contains(toggle)) {
                        elmtnav[i].classList.remove(oldclass);
                        elmtnav[i].classList.add(newclass);
                    } else if (elmtnav[i].classList.contains(toggle)) {
                        //console.log(spanToggle);
                        spanToggle.setAttribute("style", "display: inline-block;")
                    }
                }
            }
        } else {
            //resettoggleul();
            for (var i = 0; i < elmtnav.length; i++) {
                if (i !== 0) {
                    if (elmtnav[i].classList.contains(newclass)) {
                        elmtnav[i].classList.remove(newclass);
                        elmtnav[i].classList.add(oldclass);
                        spanToggle.removeAttribute("style");
                    }
                }
            }

        }

    }
    actualResizeHandler();


    spanToggle.addEventListener("click", function (evn) {
       
        var elmtnav = widthnavbarin.firstElementChild.children;
        var oldclass = "nav";

        
        if (spanToggle.innerHTML === "\u2717") {
            spanToggle.innerHTML = "\u2261";

            if (elmtnav.length > 0) {
                for (var i = 0; i < elmtnav.length; i++) {
                    if (elmtnav[i].classList.contains(toggleul)) {
                        elmtnav[i].classList.remove(toggleul);
                        console.log("i   " + i + "   " + elmtnav[i].classList);
                    }
                }
            }
        } else {
            spanToggle.innerHTML = "\u2717";

            for (var i = 0; i < elmtnav.length; i++) {
                if (elmtnav[i].classList.contains(newclass)) {
                    elmtnav[i].classList.add(toggleul);
                }
            }
        }
        //console.log(spanToggle.innerHTML);
    })
}());
