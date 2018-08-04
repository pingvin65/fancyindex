(function () {
    const indexname = document.getElementById('indexof');
    function checkpath(inpath) {

        return inpath !== '';
    }

    function createlinks(patnames2 = '') {
        var link = '';


        indexname.innerHTML = '';
        indexname.classList.add("addmargin");
        //var para = document.createElement("p");
        //var node = document.createTextNode("This is new.");
        var node;
        //para.appendChild(node);
        //indexname.appendChild(para);
        const homea = document.createElement("a");
        homea.setAttribute("href", "/");
        const homeimg = document.createElement("img");
        homeimg.setAttribute("src", "/includeheader4/images/logo.png");
        homeimg.setAttribute("width", "28");
        homeimg.setAttribute("height", "28");
        homeimg.classList.add("homeimg");
        homea.appendChild(homeimg)
        indexname.appendChild(homea);
        if (Array.isArray(patnames2)) {
            for (let index = 0; index < patnames2.length; index++) {
                if (index < patnames2.length - 1) {
                    var alink = document.createElement("a");
                    link += '/' + patnames2[index];
                    alink.setAttribute("href", link);
                    var node = document.createTextNode(patnames2[index]);
                    alink.appendChild(node);

                    node = document.createTextNode(' / ');
                    indexname.appendChild(node);
                    indexname.appendChild(alink);

                } else {
                    var node = document.createTextNode(' / ');
                    indexname.appendChild(node);
                    node = document.createTextNode(patnames2[index]);
                    indexname.appendChild(node);
                }
            }
        }
    }

    function styletable() {
        var bodyContent = document.getElementById("bcontent");
        var tablelist = bodyContent.getElementsByTagName("table");
        console.log(tablelist[0]);
    }
    const patnames = location.pathname.split("/");

    const patnames2 = patnames.filter(checkpath);
    createlinks(patnames2);
    styletable();
    //indexname.innerHTML = ''; //window.location.pathname;
    console.log(patnames2);
}());