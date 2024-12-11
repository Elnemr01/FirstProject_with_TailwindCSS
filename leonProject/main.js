let bars=document.querySelector(".bars");
let links=document.querySelector(".links");

let shown=false;


bars.addEventListener("click",showLinks);












// ----------------main function-------------------//

function showLinks () {
    if(shown) {
        links.style.cssText=`z-index: -2; opacity: 0; top: calc(100% + 20px)`;
        shown=false;
    }
    else {
        links.style.cssText=`z-index: 2; opacity: 1; top: calc(100% + 15px)`;
        shown=true;
    }
}