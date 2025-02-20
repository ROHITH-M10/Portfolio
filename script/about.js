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



// Function to handle intersection
// function handleIntersection(entries, observer) {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         entry.target.querySelector('.x-h2').style.color = 'white';
//         entry.target.querySelector('.x-p p').style.color = 'white';
//         entry.target.querySelector('.x-h2').style.transition = 'color 1s ease-in-out';
//         entry.target.querySelector('.x-p p').style.transition = 'color 1s ease-in-out';
//       } else {
//         entry.target.querySelector('.x-h2').style.color = '';
//         entry.target.querySelector('.x-p p').style.color = '';
//       }
//     });
//   }
  
//   // Options for the intersection observer
//   const options = {
//     root: null,
//     rootMargin: '0px',
//     threshold: 0.5 // Change the threshold as needed
//   };
  
//   // Create the intersection observer
//   const observer = new IntersectionObserver(handleIntersection, options);
  
//   // Observe each section
//   document.querySelectorAll('.journey, .skills, .interest, .enjoy').forEach(section => {
//     observer.observe(section);
//   });
  






