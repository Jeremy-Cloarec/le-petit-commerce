
//Slider 

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'vertical',
  loop: true,
  mousewheel: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});



//Accordeon

const accordeonPP = document.querySelectorAll('.accordeonPP')

console.log(accordeonPP);

accordeonPP.forEach((item, index)=>{

  let accordeonPPTitleIcone = item.querySelector('.accordeonPPTitleIcone');

  accordeonPPTitleIcone.addEventListener("click", ()=>{
    item.classList.toggle("open");
    let descriptionAccordeonPP = item.querySelector(".descriptionAccordeonPP");

    if(item.classList.contains("open")){
      descriptionAccordeonPP.style.height=`${descriptionAccordeonPP.scrollHeight}px`;
      item.querySelector('.accordeonPPPlus').innerHTML='-';
    }else{
      descriptionAccordeonPP.style.height="0px";
      item.querySelector('.accordeonPPPlus').innerHTML='+';
    }
    removeOpen(index) //calling the function and also passing the index number of the clicked header  
  })

})

function removeOpen(index1){
  accordeonPP.forEach((item2, index2)=> {
    if(index1 != index2){
      item2.classList.remove("open");
      let des = item2.querySelector(".descriptionAccordeonPP");
      des.style.height="0px";
      item2.querySelector('.accordeonPPPlus').innerHTML='+';
    }
  })

}


// Selection couleurs


let choixTaille =document.querySelectorAll('.choixTaille')
console.log(choixTaille);

// let tailleChoisieCompteur=0; 

choixTaille.forEach((item,index)=>{
  
  console.log(choixTaille);

  let tailleChoisie = item.querySelector('.tailleChoisie')

  console.log(tailleChoisie);


  tailleChoisie.addEventListener("click", ()=>{
    

    tailleChoisie.classList.toggle("open");
    
    // tailleChoisie.classList.toggle("tailleSelectionnee");

   
    // let tailleChoisieCompteurPlus= ++tailleChoisieCompteur;
    // console.log(tailleChoisieCompteurPlus);

    if(tailleChoisie.classList.contains("open")){
      console.log(true);
    }

    
   

  })

})


