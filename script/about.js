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


// journey
document.querySelector(".journey").onmouseover = function() {
    document.querySelector(".journey .x-h2").style.color = "white";
    document.querySelector(".journey .x-p p").style.color = "white";

    document.querySelector(".journey .x-h2").style.transition = "ease-in-out 1s";
    document.querySelector(".journey .x-p p").style.transition = "ease-in-out 1s";


}

document.querySelector(".journey").onmouseout = function() {
    document.querySelector(".journey .x-h2").style.color = "";
    document.querySelector(".journey .x-p p").style.color = "";

    document.querySelector(".journey .x-h2").style.transition = "ease-in-out 1s";
    document.querySelector(".journey .x-p p").style.transition = "ease-in-out 1s";
}

// skills
document.querySelector(".skills").onmouseover = function() {
    document.querySelector(".skills .x-h2").style.color = "white";
    document.querySelector(".skills .x-p p").style.color = "white";

    document.querySelector(".skills .x-h2").style.transition = "ease-in-out 1s";
    document.querySelector(".skills .x-p p").style.transition = "ease-in-out 1s";


}

document.querySelector(".skills").onmouseout = function() {
    document.querySelector(".skills .x-h2").style.color = "";
    document.querySelector(".skills .x-p p").style.color = "";

    document.querySelector(".skills .x-h2").style.transition = "ease-in-out 1s";
    document.querySelector(".skills .x-p p").style.transition = "ease-in-out 1s";
}


// interest
document.querySelector(".interest").onmouseover = function() {
    document.querySelector(".interest .x-h2").style.color = "white";
    document.querySelector(".interest .x-p p").style.color = "white";

    document.querySelector(".interest .x-h2").style.transition = "ease-in-out 1s";
    document.querySelector(".interest .x-p p").style.transition = "ease-in-out 1s";


}

document.querySelector(".interest").onmouseout = function() {
    document.querySelector(".interest .x-h2").style.color = "";
    document.querySelector(".interest .x-p p").style.color = "";

    document.querySelector(".interest .x-h2").style.transition = "ease-in-out 1s";
    document.querySelector(".interest .x-p p").style.transition = "ease-in-out 1s";
}


// enjoy
document.querySelector(".enjoy").onmouseover = function() {
    document.querySelector(".enjoy .x-h2").style.color = "white";
    document.querySelector(".enjoy .x-p p").style.color = "white";

    document.querySelector(".enjoy .x-h2").style.transition = "ease-in-out 1s";
    document.querySelector(".enjoy .x-p p").style.transition = "ease-in-out 1s";


}

document.querySelector(".enjoy").onmouseout = function() {
    document.querySelector(".enjoy .x-h2").style.color = "";
    document.querySelector(".enjoy .x-p p").style.color = "";

    document.querySelector(".enjoy .x-h2").style.transition = "ease-in-out 1s";
    document.querySelector(".enjoy .x-p p").style.transition = "ease-in-out 1s";
}







