console.log("hello");



//SEARCH

const closeSearch = document.querySelector('.closeSearch')
const searchActive = document.querySelector('.searchActive')
const searchIcon = document.querySelector('a.searchIcon')
const rechercherButton = document.querySelector('.rechercher button')
const rechercherInput= document.querySelector('.rechercherInput')


//Afficher la barre de recherche

function searchAppear () {
    searchActive.classList.add("Active") //on ajoute la classe active à la div searchActive, ce qui permet de l'afficher.  
}
searchIcon.addEventListener("click", searchAppear)


//Quitter la barre de recherche en cliquant sut la croix

function searchClose () {
    if (searchActive.classList.contains('Active')){  //Lorsque on clique sur la croix, on nettoie le input si la classe est activée, juste avant de l'enlever. 
        rechercherInput.value="";
    }
    searchActive.classList.remove("Active") // Quand on clique sur la croix, on enlève la classe Active
}
closeSearch.addEventListener("click", searchClose)


//Quitter la barre de recherche en cliquant sur le bouton

function searchButton () {
    if (searchActive.classList.contains('Active')){  //Lorsque on clique sur le bouton, on nettoie le input si la classe est activée, juste avant de l'enlever. 
        rechercherInput.value="";
    }
    searchActive.classList.remove("Active") // Quand on clique sur le bouton, on enlève la classe Active 
}
rechercherButton.addEventListener("click", searchButton)


//Quitter la barre de recherche en cliquant sur la touche "Entrée"

rechercherInput.addEventListener('keydown', e =>{
    if (e.keyCode===13){ //Si le key code correspond à "Entrée/13", on vide l'input et on enlève la classe Active
        rechercherInput.value="";
        searchActive.classList.remove("Active")
    }
})


//CHANGE LANGAGE


const languageChoose = document.querySelector('.languageChoose') //On  selectionne la div contenant l'affiche de la langue à choisir
let fr = document.querySelector('.languageContainer p' ).textContent //On sélectionne la valeur contenue dans la div qui affiche la langue en cours 
let en = document.querySelector('.languageChoose p' ).textContent //On selectionne la valeur de la la div qui affiche la langue à choisir


function changeLanguage (){
    
    if (fr==='FR'){ //Si au clic l'affichage en cours est 'FR' il est remplacé par 'EN' et la valeur de la langue à choisir est rempplacée par 'EN'
        en = document.querySelector('.languageChoose p' ).textContent='FR'
        fr = document.querySelector('.languageContainer p' ).textContent='EN'

    } else{ //Sinon on fait l'inverse
        en = document.querySelector('.languageChoose p' ).textContent='EN'
        fr = document.querySelector('.languageContainer p' ).textContent='FR'
    }
}

languageChoose.addEventListener('click', changeLanguage)





//RESPONSIVE MENU 

//Page html

let html = document.querySelector('html')
console.log(html);

//Pour chaque entrée on sélectionn l'entrée et le submenu correspondant


//_Page d'accueil
let accueilSubSub = document.querySelector('#accueilSubSub') //Menu au top avec loogo et croix
let openLinks = document.querySelector('.menuIcon') //Le menu burger
let closeLink = document.querySelectorAll('.closeLink') //La crois qui permet de fermer le menu
let links = document.querySelector ('.links') //La div du menu principal en responsive

//__Nos Produits

let nosProduitsContainer = document.querySelector('#nosProduitsContainer') //L'entrée nos produits 
let nosProduits = document.querySelector('li#nosProduits') //Le menu nos produits
let backToLinks = document.querySelector('.backToLinks') //La flèche back qui retourne au menu principal

//__La Boutique

let boutiqueContainer = document.querySelector('#boutiqueContainer') //L'entrée nos produits 
let laBoutique = document.querySelector('#laBoutique') //Le menu nos produits
let exitBoutique = document.querySelector('.exitBoutique') //La flèche back qui retourne au menu principal

//__Actualités

let actalitesContainer = document.querySelector('#actualitesContainer') //L'entrée nos produits 
let actualites = document.querySelector('#actualites') //Le menu nos produits
let exitActualite = document.querySelector('.exitActualites') //La flèche back qui retourne au menu principal


//__Produits hommes

let produitsHommes = document.querySelector('#produitsHommes')
let exitProduitsHommes = document.querySelector('.exitProduitsHommes')
let containerHomme = document.querySelector('#containerHomme')

//__Produits femmes

let produitsFemmes = document.querySelector('#produitsFemmes')
let exitProduitsFemmes = document.querySelector('.exitProduitsFemmes')
let containerFemme = document.querySelector('#containerFemme')

//_Liens surs lesquels on clique pour aller sur une page

let closeOnClick = document.querySelectorAll('.closeOnClick')



//On met un media query js pour déterminer l'affichage selon la largeur de l'écran

function myFunction(x) {
    if (x.matches) { 
        // If media query matches
        // document.body.style.backgroundColor = "yellow";

        accueilSubSub.style.display='flex';
        nosProduits.style.display='none';
        links.style.display='none';
        actualites.style.display='none';
        laBoutique.style.display='none';
        produitsHommes.style.display='none';
        produitsFemmes.style.display='none';
        



//Ouvrir le menu quand on clique sur le burger


        function openMenu (){ 
            links.style.display='flex';
            html.style.overflowY='hidden'
        }
        openLinks.addEventListener('click', openMenu)


//Fermer le menu quand on clique sur la croix

//On crée une boucle pour utiliser la même fonction et les mêmes sélecteurs quel que soit la page affichée

        for (let i =0; i < closeLink.length; i++){
            function closeMenu (){ 
                nosProduits.style.display='none';
                laBoutique.style.display='none';
                links.style.display='none';
                actualites.style.display='none';
                produitsHommes.style.display='none';
                produitsFemmes.style.display='none';

                html.style.overflowY='auto'//Remettre le scroll vertical
            }

            closeLink[i].addEventListener('click', closeMenu)
        }

//Ouvrir la page NOS PRODUITS

            function openProduct (){
                nosProduits.style.display='block';
                nosProduits.style.left='auto';
            }
            nosProduitsContainer.addEventListener('click', openProduct)

//Fermer la page NOS PRODUITS quand on clique sur précédent

            function backProduct (){
                nosProduits.style.display='none';
            }
            backToLinks.addEventListener('click', backProduct)

//Ouvrir la page LA BOUTIQUE

            function openBoutique (){
                laBoutique.style.display='block';
                laBoutique.style.left='auto';
            }
            boutiqueContainer.addEventListener('click', openBoutique)

//Fermer la page LA BOUTIQUE quand on clique sur précédent

            function backBoutique (){
                laBoutique.style.display='none';
            }
            exitBoutique.addEventListener('click', backBoutique)

//Ouvrir la page ACTUALITES

            function openActualite (){
                actualites.style.display='block';
                actualites.style.left='auto';
            }
            actalitesContainer.addEventListener('click', openActualite)

//Fermer la page ACTUALITES quand on clique sur précédent

            function backActualite (){
                actualites.style.display='none';
            }
            exitActualite.addEventListener('click', backActualite)

//Ouvrir la page PRODUITS HOMMES

            function openProduitHomme (){
                produitsHommes.style.display='block';
                produitsHommes.style.left='auto';
            }
            containerHomme.addEventListener('click', openProduitHomme)

//Fermer la page PRODUITS HOMMES quand on clique sur précédent

            function backOpenHomme (){
                produitsHommes.style.display='none';
            }
            exitProduitsHommes.addEventListener('click', backOpenHomme)

//Ouvrir la page PRODUITS FEMMES

            function openProduitFemmes (){
                produitsFemmes.style.display='block';
                produitsFemmes.style.left='auto';
            }
            containerFemme.addEventListener('click', openProduitFemmes)

//Fermer la page PRODUITS FEMMES quand on clique sur précédent

            function backOpenFemme (){
                produitsFemmes.style.display='none';
            }
            exitProduitsFemmes.addEventListener('click', backOpenFemme)

        



//A chaque fois qu'on clique sur un lien actif, le menu se ferme.          

            closeOnClick.forEach(function(elem) {
                elem.addEventListener("click", function() {
                    //this function does stuff
                    nosProduits.style.display='none';
                    laBoutique.style.display='none';
                    links.style.display='none';
                    actualites.style.display='none';
                    produitsHommes.style.display='none';
                    produitsFemmes.style.display='none';
    
                    html.style.overflowY='auto'//Remettre le scroll vertical
                });
            });








    } else {

//fermer les pages ouvertes lorsqu'on dépasse le media querie

        // document.body.style.backgroundColor = "pink";

        //-----------------------------

        //On empêche la div du sous menu de se réouvrir quand le media queri est supérieur

        function openActualite (){
            actualites.style.display='none';
            actualites.style.left='auto';
            console.log('yes');
            
        }
        actalitesContainer.addEventListener('click', openActualite)


        function openProduct (){
            nosProduits.style.display='none';
            nosProduits.style.left='auto';
        }
        nosProduitsContainer.addEventListener('click', openProduct)


        function openBoutique (){
            laBoutique.style.display='none';
            laBoutique.style.left='auto';
        }
        boutiqueContainer.addEventListener('click', openBoutique)

        //-----------------------------




        //-----------------------------

        //On empêche le menu de disparaître quand on clique sur un lien actif

        closeOnClick.forEach(function(elem) {
            elem.addEventListener("click", function() {

                links.style.display='flex';

            });
        });












        //-----------------------------
        
        
        links.style.display='flex';

        accueilSubSub.style.display='none';
        laBoutique.style.display='none';
        nosProduits.style.display='none';
        actualites.style.display='none';
        produitsHommes.style.display='none';
        produitsFemmes.style.display='none';
        html.style.overflowY='auto'//Remettre le scroll vertical
    }
}

let x = window.matchMedia("(max-width: 992px)")
console.log(x)
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes




