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


window.addEventListener("ommouseover",function(){
    doccument.get
});

window.onload = windowSizeFn;
window.addEventListener("resize", windowSizeFn);


// journey
document.querySelector(".journey").onmouseover = function() {
    document.querySelector(".journey h2").style.color = "white";
    document.querySelector(".journey p").style.color = "white";

    document.querySelector(".journey h2").style.transition = "ease-in-out 1s";
    document.querySelector(".journey p").style.transition = "ease-in-out 1s";

}

document.querySelector(".journey").onmouseout = function() {
    document.querySelector(".journey h2").style.color = "";
    document.querySelector(".journey p").style.color = "";

    document.querySelector(".journey h2").style.transition = "ease-in-out 1s";
    document.querySelector(".journey p").style.transition = "ease-in-out 1s";

}

// skills
document.querySelector(".skills").onmouseover = function() {
    document.querySelector(".skills h2").style.color = "white";
    document.querySelector(".skills p").style.color = "white";

    document.querySelector(".skills h2").style.transition = "ease-in-out 1s";
    document.querySelector(".skills p").style.transition = "ease-in-out 1s";

}

document.querySelector(".skills").onmouseout = function() {
    document.querySelector(".skills h2").style.color = "";
    document.querySelector(".skills p").style.color = "";

    document.querySelector(".skills h2").style.transition = "ease-in-out 1s";
    document.querySelector(".skills p").style.transition = "ease-in-out 1s";
}


// interest
document.querySelector(".interest").onmouseover = function() {
    document.querySelector(".interest h2").style.color = "white";
    document.querySelector(".interest p").style.color = "white";

    document.querySelector(".interest h2").style.transition = "ease-in-out 1s";
    document.querySelector(".interest p").style.transition = "ease-in-out 1s";

}

document.querySelector(".interest").onmouseout = function() {
    document.querySelector(".interest h2").style.color = "";
    document.querySelector(".interest p").style.color = "";

    document.querySelector(".interest h2").style.transition = "ease-in-out 1s";
    document.querySelector(".interest p").style.transition = "ease-in-out 1s";

}


// enjoy
document.querySelector(".enjoy").onmouseover = function() {
    document.querySelector(".enjoy h2").style.color = "white";
    document.querySelector(".enjoy p").style.color = "white";

    document.querySelector(".enjoy h2").style.transition = "ease-in-out 1s";
    document.querySelector(".enjoy p").style.transition = "ease-in-out 1s";

}

document.querySelector(".enjoy").onmouseout = function() {
    document.querySelector(".enjoy h2").style.color = "";
    document.querySelector(".enjoy p").style.color = "";

    document.querySelector(".enjoy h2").style.transition = "ease-in-out 1s";
    document.querySelector(".enjoy p").style.transition = "ease-in-out 1s";

}







