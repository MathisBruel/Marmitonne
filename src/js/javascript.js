let b = document.body;
let swiper = document.getElementById('swiper-div');
// get the json file db.json in src/database and put in variable
console.log(swiper)

let db = fetch('src/database/db.json')
  .then((response) => response.json())
  .then((json) => {
    json.recettes.forEach((recette) => {
      let div = document.createElement('div');
      let figure = document.createElement('figure');
      let img = document.createElement('img');
      let figcaption = document.createElement('figcaption');
      let button = document.createElement('button');

      let div2 = document.createElement('div');

      div.classList.add('swiper-slide');
      img.src = "src/img/" + recette.image;
      img.alt = recette.name;
      button.innerHTML = "Voir la recette";
      button.id = "button";
      // set redirection to /recette.html?id=recette.name in button
      button.onclick = function () {
        window.location.href = "recette.html?id=" + recette.id;
      }
      div2.id = "slide"
      let title = document.createElement('h2');
      title.innerHTML = recette.name;
      let description = document.createElement('p');
      description.innerHTML = recette.Description;
      // set img in div2 and create zone for text in buttom of img
      div2.appendChild(img);
      div2.appendChild(title);
      div2.appendChild(description);
      div2.appendChild(button);
      div2.appendChild(document.createElement("br"));
      div2.appendChild(document.createElement("br"));
      
      
      //figure.appendChild(figcaption);
      swiper.appendChild(div);
      div.appendChild(figure);
      figure.appendChild(div2);


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
  });

/* 
<div class="trend">
    <h1>
      Les tendances actuelles
    </h1>
    </br>
    <img src="src/img/decoration.svg" alt="separateur">
    </br>
    </br>
    </br>
    </br>
    <!--Create slider-->
    <section id="slider-2">
      <div class="container wide">
        <div class="swiper" id="swiper-2">
          </br>
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <figure>
                <img src="src/img/spain-1.jpg" alt="Marbella, Spain" />
                <figcaption>
                  <img src="src/img/icon-location.svg" alt="Icon location">
                  Marbella, Spain
                </figcaption>
              </figure>
            </div> <!-- end swiper-slide -->

            */

