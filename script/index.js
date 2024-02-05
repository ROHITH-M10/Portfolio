function windowSizeFn() {
    if (window.innerWidth < 780 ) {
        console.log("HERE1");
        document.querySelector(".main-nav-small").classList.remove("hidden");
        document.querySelector(".main-nav").classList.add("hidden");
    }
    else {
        console.log("HERE2");
        document.querySelector(".main-nav").classList.remove("hidden");
        document.querySelector(".main-nav-small").classList.add("hidden");
    }    
}

function dropDownMenu() {
    console.log("HERE3");
    document.querySelector(".main-nav-small-inside").classList.toggle("hidden");
}

window.onload = windowSizeFn;
window.addEventListener("resize", windowSizeFn);




