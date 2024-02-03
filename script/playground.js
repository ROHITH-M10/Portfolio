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


function callOrange() {
    console.log("callorgane");
    document.querySelector(".traffic-msg").innerHTML = "READY";

    document.querySelector(".traffic-msg").style.color = "orange";
    document.querySelector(".orange-signal").style.transition = "0.5s ease-in-out";

    document.querySelector(".red-signal").style.backgroundColor = "";
    document.querySelector(".orange-signal").style.backgroundColor = "orange";
    setTimeout(callGreen,3000);
}

function callGreen() {
    console.log("callgreen");
    document.querySelector(".traffic-msg").innerHTML = "GO";

    document.querySelector(".traffic-msg").style.color = "green";
    document.querySelector(".green-signal").style.transition = "0.5s ease-in-out";


    document.querySelector(".orange-signal").style.backgroundColor = "";
    document.querySelector(".green-signal").style.backgroundColor = "green";
    setTimeout(callRed,3000);
}

function callRed(){
    console.log("callred");
    document.querySelector(".green-signal").style.backgroundColor = "";
    document.querySelector(".red-signal").style.backgroundColor = "red";

    document.querySelector(".red-signal").style.transition = "0.5s ease-in-out";
    
    document.querySelector(".traffic-msg").innerHTML = "STOP";
    document.querySelector(".traffic-msg").style.color = "red";
    setTimeout(callOrange,3000);
}

window.onload = windowSizeFn;
window.addEventListener("resize", windowSizeFn);


// traffic signal

console.log("start");
callRed();


