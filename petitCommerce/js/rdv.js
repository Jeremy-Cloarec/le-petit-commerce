// console.log('hello');


// //Permet de faire disparître les spans avec la class tooltips
// function desactivateTooltips () {
//     const spans = document.querySelectorAll("span")
//     console.log(spans);
//     const spansLength = spans.length;

    
//     for (let i = 0; i < spansLength; i++) {
//         if(spans[i].className == "tooltip"){
//             spans[i].style.display='none';
//         }
//     }
// }

// function getTooltip(elemHTML){
//     while(elementHTML= elemHTML.nextsibling){
//         if(elementHTML.className=="tooltip"){
//             return elementHTML;
//         }

//     }
// }

// let check = {
    
// };

// //nom

// check["name"]=function(){
//     console.log('check de nom');
//     let name = document.querySelector(id);

//     tooltip = getTooltip (name);
// };

// //Mail

// check["email"]=function(){
//     console.log('check de  mail');
// };

// //06

// check["number"]=function(){
//     console.log('check du numéro');
// };

// //Date

// check["date"]=function(){
//     console.log('check de la date');
// };

// //Heure

// check["time"]=function(){
//     console.log("check de l'horaire");
// };








// //IIFE : permet d'encapsuler le code

// (function (){

//     //On récupère le formulaire

//     const myForm = document.querySelector('#myForm');
//     console.log(myForm);
//     const listInput=document.querySelectorAll('input')
//     console.log(listInput);
//     const listInputLenght = listInput.length;
//     console.log(listInputLenght);

//     //OnKeyUp : récupère la valeur dans un input

//     for (let i = 0; i < listInputLenght; i ++){
//         if(listInput[i].type == "text" || 
//         listInput[i].type == "number" || 
//         listInput[i].type == "email"){
            
//             listInput[i].onkeyup=function(){
//                 check[this.id]();
                
//             }
            
//         }
//     }

//     //On récupère le submit

//     myForm.onsubmit = function(e) {

//     }

//     //Reset




//     desactivateTooltips();

// }());