let b = document.body;
let divContener = document.getElementById('contener');

// get id of recette in url
let url = window.location.href;
let id = url.split("=")[1];
// get the json file db.json in src/database and put in variable
let db = fetch('src/database/db.json')
  .then((response) => response.json())
  .then((json) => {
        let recette = json.recettes[id-1];
        let img = document.createElement('img');
        let title = document.createElement('h1');
        let description = document.createElement('p');
        let ingredients = document.createElement('p');
        let preparation = document.createElement('p');
        let separator = document.createElement('img')
        img.src = "src/img/" + recette.image[0];
        separator.src = "src/img/decoration.svg";
        img.alt = recette.name;
        separator.alt = "separator";
        title.innerHTML = recette.name;
        description.innerHTML = recette.Description;
        ingredients.innerHTML = recette.Ingredients;
        preparation.innerHTML = recette.Steps;
        // set in body
        /*divContener.appendChild(title);
        divContener.appendChild(document.createElement("br"));
        divContener.appendChild(document.createElement("br"));
        divContener.appendChild(separator);
        divContener.appendChild(document.createElement("br"));
        divContener.appendChild(document.createElement("br"));
        divContener.appendChild(document.createElement("br"));
        divContener.appendChild(document.createElement("br"));
        
        // create slider
        let slider_2 = document.createElement('section');
        let container_wide = document.createElement('div');



        divContener.appendChild(img);
        divContener.appendChild(description);
        divContener.appendChild(ingredients);
        divContener.appendChild(preparation);*/

      
  })
  .catch((error) => {
    console.log(error);
  });