let b = document.body;
let divContener = document.getElementById('contener');

// get id of recette in url
let url = window.location.href;
let id = url.split("=")[1];
let swiper = document.getElementById('swiper-div');
// get the json file db.json in src/database and put in variable
let db = fetch('src/database/db.json')
  .then((response) => response.json())
  .then((json) => {
    let recette = json.recettes[id - 1];
    let title = document.getElementById('title');
    title.innerHTML = recette.name;

    recette.image.forEach((image) => {
      let figure = document.createElement('figure');
      let div = document.createElement('div');
      let div2 = document.createElement('div');
      div.classList.add('swiper-slide');
  
  
  
      let img = document.createElement('img');
      img.src = "src/img/" + image;
      img.alt = name;
      div2.id = "slide"
      div2.appendChild(img);
      div2.appendChild(document.createElement("br"));
      div2.appendChild(document.createElement("br"));
  
  
      swiper.appendChild(div);
      div.appendChild(figure);
      figure.appendChild(div2);
    })



    let cuisson = document.getElementById('infos-time-cuisson');
    cuisson.innerHTML = "Temps de cuisson: "+recette.TimeCooking + " min";
    let niveau = document.getElementById('infos-niveau');
    let difficulte = ""
    switch (recette.difficulty) {
      case 1:
        difficulte = "Facile ★";
        break;
      case 2:
        difficulte = "Moyen ★★";
        break;
      case 3:
        difficulte = "Difficile ★★★";
        break;
      default:
        difficulte = "Facile ★";
    }
    niveau.innerHTML = "Niveau: "+difficulte;
    let prepa = document.getElementById('infos-time-prepa');
    prepa.innerHTML = "Temps de préparation: "+recette.TimeMin + " min" + ((recette.TimeMin != 0) ? " - "+recette.TimeMax + " min" : "" )




    /*

    Table

    */

    let table = document.getElementById('tbody');

    let tr = document.createElement('tr');
    let td = document.createElement('td');
    td.innerHTML = "Nb pers./Portion";
    tr.appendChild(td);
    table.appendChild(tr);
    for (let i = 0; i < 5; i++) {
      let td = document.createElement('td');
      td.innerHTML = recette.pas * (i + 1);
      tr.appendChild(td);
      table.appendChild(tr);
    }

    recette.Ingredients.forEach((ingredient) => {
      let tr = document.createElement('tr');
      let td = document.createElement('td');
      td.innerHTML = ingredient.name;
      tr.appendChild(td);
      for (let i = 0; i < 5; i++) {
        let td = document.createElement('td');
        td.innerHTML = ingredient.quantity * (i + 1) + " " + ingredient.unit;
        tr.appendChild(td);
      }
      table.appendChild(tr);

    })


    new Swiper("#swiper-2", {
      slidesPerView: 1,
      centeredSlides: true,
      spaceBetween: 24,
      pagination: {
        el: ("#swiper-2 .swiper-custom-pagination"),
        clickable: true,
        renderBullet: function (index, className) {
          return `<div class=${className}>
          <span class="number">${index + 1}</span>
          <span class="line"></span>
          </div>`;
        }
      },
      lazyLoading: true,
      loop: true,
      keyboard: {
        enabled: true,
      },
      navigation: {
        nextEl: "#nav-right",
        prevEl: "#nav-left"
      },
      autoplay: {
        delay: 7000, // change ici la valeur delay
        disableOnInteraction: false,
      },
      breakpoints: {
        800: {
          slidesPerView: 1.5
        },
        1400: {
          slidesPerView: 1
        }
      }
    });

  })
  .catch((error) => {
    console.log(error);
  });