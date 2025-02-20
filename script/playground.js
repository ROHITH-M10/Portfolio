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

document.addEventListener("DOMContentLoaded", windowSizeFn);
window.addEventListener("resize", windowSizeFn);



// function callOrange() {
//     console.log("callorgane");
//     document.querySelector(".traffic-msg").innerHTML = "READY";

//     document.querySelector(".traffic-msg").style.color = "orange";
//     document.querySelector(".orange-signal").style.transition = "0.5s ease-in-out";

//     document.querySelector(".red-signal").style.backgroundColor = "";
//     document.querySelector(".orange-signal").style.backgroundColor = "orange";
//     setTimeout(callGreen,3000);
// }

// function callGreen() {
//     console.log("callgreen");
//     document.querySelector(".traffic-msg").innerHTML = "GO";

//     document.querySelector(".traffic-msg").style.color = "green";
//     document.querySelector(".green-signal").style.transition = "0.5s ease-in-out";


//     document.querySelector(".orange-signal").style.backgroundColor = "";
//     document.querySelector(".green-signal").style.backgroundColor = "green";
//     setTimeout(callRed,3000);
// }

// function callRed(){
//     console.log("callred");
//     document.querySelector(".green-signal").style.backgroundColor = "";
//     document.querySelector(".red-signal").style.backgroundColor = "red";

//     document.querySelector(".red-signal").style.transition = "0.5s ease-in-out";
    
//     document.querySelector(".traffic-msg").innerHTML = "STOP";
//     document.querySelector(".traffic-msg").style.color = "red";
//     setTimeout(callOrange,3000);
// }



// // traffic signal

// console.log("start");
// callRed();



// Random password generator
function generateRandomPassword(){
    var capitalLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var smallLetters = "abcdefghijklmnopqrstuvwxyz";
    var numbers = "0123456789";
    var symbols = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";

    var passwordLength = 10;
    var password = "";

    var randomAll = capitalLetters + smallLetters + numbers + symbols;
    var lengthAll = randomAll.length;

    while (password.length < passwordLength){
        var randomNumber = Math.floor((Math.random())*lengthAll);
        //console.log(randomNumber);
        password = password + randomAll.charAt(randomNumber);
    }
    //console.log(password);
    document.getElementsByName("password-name")[0].value = password;
}

function copyPassword(){
    var getPassword = document.getElementsByName("password-name")[0].value;
    if (getPassword == "") {
        alert("Please Generate a Password First");
    }
    else{
        var copyText = getPassword;
        navigator.clipboard.writeText(copyText);
    }
   
}


window.onload = windowSizeFn;
window.addEventListener("resize", windowSizeFn);


