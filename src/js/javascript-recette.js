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
    let cuisson = document.getElementById('infos-time-cuisson');
    cuisson.innerHTML = "Temps de cuisson: " + recette.TimeCooking + " min&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp•&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp";
    let niveau = document.getElementById('infos-niveau');
    niveau.innerHTML = "Niveau: " + difficulte + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp•&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp";
    let prepa = document.getElementById('infos-time-prepa');
    prepa.innerHTML = "Temps de préparation: " + recette.TimeMin + " min" + ((recette.TimeMin != 0) ? " - " + recette.TimeMax + " min" : "")



    // set steps of recette in list
    let steps = document.getElementById('steps');
    steps.className = "list";
    let x = 1
    recette.Steps.forEach((step) => {
      let li = document.createElement('li');
      li.className = "item"
      let h2 = document.createElement('h2');
      let span = document.createElement('span');
      h2.innerHTML = "Étape " + x;
      span.innerHTML = step;
      li.appendChild(h2);
      li.appendChild(span);
      x++;
      steps.appendChild(li);
    })

    let description = document.getElementById('description');
    description.innerHTML = recette.Description + "<br/><br/><br/>" ;
    let time = document.getElementById('time');
    // Total time \n temps de prepa \n temps de repos (si il y a) \n temps de cuisson
    let totalTime = recette.TimeCooking + recette.TimeMax
    // if totalTime > 60 min then convert in hour
    if (totalTime > 60) {
      let hour = Math.floor(totalTime / 60);
      let min = totalTime % 60;
      totalTime = hour + "h" + min;
    }

    time.innerHTML = "• Temps total: &nbsp&nbsp" + totalTime + "min<br/>• &nbsp&nbspTemps de préparation: " + recette.TimeMin + "min<br/>• &nbsp&nbspTemps de cuisson: " + recette.TimeCooking + "min" + ((recette.TimeRepose != 0) ? "<br/>• &nbsp&nbspTemps de repos: " + recette.TimeRepose + "min" : "");






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
    // set style for the first td


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
          slidesPerView: 3
        }
      }
    });

  })
  .catch((error) => {
    console.log(error);
  });