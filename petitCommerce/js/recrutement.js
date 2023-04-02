

        let inputLettre = document.getElementById("lettre");
        let imageLettre = document.getElementById("imageLettre");

        inputLettre.addEventListener("change", ()=>{
            let inputImageLettre = document.querySelector("#lettre").files[0];

            imageLettre.innerText = `Fichier choisi : ${inputImageLettre.name}`;
        })




        let inputCV = document.getElementById("cv");
        let imageCV = document.getElementById("imageCV");

        inputCV.addEventListener("change", ()=>{
            let inputImageCV = document.querySelector("#cv").files[0];

            imageCV.innerText = `Fichier choisi : ${inputImageCV.name}` ;
        })
