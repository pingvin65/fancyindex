
function hendlechaild(event) {
  var inels = document.getElementsByClassName("see");
  var childUl = event.target.nextElementSibling;
  if (inels.length > 0) {
    //console.log("inels.length " + inels.length);
    for (var i = 0; i < inels.length; i++) {
      if (event.target.id !== inels[i].id) {
        inels[i].classList.remove("see");     
      }
    }
  }

  if (childUl.classList.contains("see")) {
    childUl.classList.remove("see");
  } else {
    childUl.classList.add("see");
  }
}

var matches = document.getElementsByClassName('linkul');
for (var i = 0; i < matches.length; i++) {
  matches[i].nextElementSibling.id = 'linkul' + i;
  //console.log(matches[i].nextElementSibling.id);
  matches[i].setAttribute('id', 'linkul' + i)
  matches[i].addEventListener("click", hendlechaild, false);
}
