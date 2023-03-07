//Scroll

let prevScrollpos = window.pageYOffset; 


//Menu burger 
const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")



hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")







//Lorsque la classe .active rendant le menu visible est activée, on désactive la fonction onscroll avec le top 0. 
    if(hamburger.classList.contains("active")){
        console.log("good");
        let prevScrollpos = window.pageYOffset;
        window.onscroll = function() {
            let currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos ) {
                document.querySelector(".navbar").style.top = "0";
            } 
            prevScrollpos = currentScrollPos;
        } 

    
    } 

    //Lorsque ces classes ne sont pas activée, on fait disparaître le menu en le remontant hors du flux. 

    else {
        window.onscroll = function() {
            let currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos ) {
                document.querySelector(".navbar").style.top = "0";
            } else {
                document.querySelector(".navbar").style.top = "-90px";
            }
            prevScrollpos = currentScrollPos;
        }
    }
})




let windowScroll = window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos ) {
        document.querySelector(".navbar").style.top = "0";
    } else {
        document.querySelector(".navbar").style.top = "-90px";
    }
    prevScrollpos = currentScrollPos;

}



//Submenu


const navItem1 = document.querySelector("#nav-item1")
const navItem2 = document.querySelector("#nav-item2")
const navItem3 = document.querySelector("#nav-item3")
const navItem4 = document.querySelector("#nav-item4")
const subMenu = document.querySelector(".subMenu")

const arrowDown1 =document.querySelector(".arrowDown1")
const arrowDown2 =document.querySelector(".arrowDown2")
const arrowDown3 =document.querySelector(".arrowDown3")



const subItem = document.querySelectorAll(".subItemsLinks")
const navItem = document.querySelectorAll(".nav-item")
const accueil = document.querySelector(".accueil")



subItem.forEach(n=>n.addEventListener("click", ()=>{
   
    navMenu.classList.remove("active");
    hamburger.classList.remove("active");

}
))
accueil.addEventListener("click", ()=>{
   
    navMenu.classList.remove("active");
    hamburger.classList.remove("active");

}
)





// _________Submenu 1

navItem1.addEventListener("mouseenter", (n) =>{
    arrowDown1.classList.add("arrowActive")
    if (n){
        let prevScrollpos = window.pageYOffset;
        window.onscroll = function() {
            let currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos ) {
                document.querySelector(".navbar").style.top = "0";
            } 
            prevScrollpos = currentScrollPos;
        } 
    }

})

navItem1.addEventListener("mouseleave", (a) =>{
    arrowDown1.classList.remove("arrowActive")
    if(a){
        window.onscroll = function() {
            let currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos ) {
                document.querySelector(".navbar").style.top = "0";
            } else {
                document.querySelector(".navbar").style.top = "-90px";
            }
            prevScrollpos = currentScrollPos;
        }
    }
})

// _________Submenu 2

navItem2.addEventListener("mouseenter", (n) =>{
    arrowDown2.classList.add("arrowActive")
    if (n){
        let prevScrollpos = window.pageYOffset;
        window.onscroll = function() {
            let currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos ) {
                document.querySelector(".navbar").style.top = "0";
            } 
            prevScrollpos = currentScrollPos;
        } 
    }
})

navItem2.addEventListener("mouseleave", (a) =>{
    arrowDown2.classList.remove("arrowActive")
    if(a){
        window.onscroll = function() {
            let currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos ) {
                document.querySelector(".navbar").style.top = "0";
            } else {
                document.querySelector(".navbar").style.top = "-90px";
            }
            prevScrollpos = currentScrollPos;
        }
    }
})


// _________Submenu 3

navItem3.addEventListener("mouseenter", (n) =>{
    if (n){
        let prevScrollpos = window.pageYOffset;
        window.onscroll = function() {
            let currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos ) {
                document.querySelector(".navbar").style.top = "0";
            } 
            prevScrollpos = currentScrollPos;
        } 
    }
    arrowDown3.classList.add("arrowActive")
})

navItem3.addEventListener("mouseleave", (a) =>{
    arrowDown3.classList.remove("arrowActive")
    if(a){
        window.onscroll = function() {
            let currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos ) {
                document.querySelector(".navbar").style.top = "0";
            } else {
                document.querySelector(".navbar").style.top = "-90px";
            }
            prevScrollpos = currentScrollPos;
        }
    }
})














// Langues

let langues = document.querySelector(".langues")
let chooseLanguage = document.querySelector(".chooseLanguage")

console.log(chooseLanguage);

langues.addEventListener("click", () =>{
    console.log(true);
    chooseLanguage.classList.toggle("chooseActive")
})
































