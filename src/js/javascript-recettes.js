/*

            <li class="cd-popular">
                <header class="cd-pricing-header">
                    <h2>Popular</h2>

                    <div class="cd-price">
                        <span class="cd-currency">$</span>
                        <span class="cd-value">60</span>
                        <span class="cd-duration">mo</span>
                    </div>
                </header> <!-- .cd-pricing-header -->

                <div class="cd-pricing-body">
                    <ul class="cd-pricing-features">
                        <li><em>512MB</em> Memory</li>
                        <li><em>3</em> Users</li>
                        <li><em>5</em> Websites</li>
                        <li><em>7</em> Domains</li>
                        <li><em>Unlimited</em> Bandwidth</li>
                        <li><em>24/7</em> Support</li>
                    </ul>
                </div> <!-- .cd-pricing-body -->

                <footer class="cd-pricing-footer">
                    <a class="cd-select" href="http://codyhouse.co/?p=429">Select</a>
                </footer> <!-- .cd-pricing-footer -->
            </li>*/

let b = document.body;
let ul = document.getElementById("cd-pricing-list")
let db = fetch('src/database/db.json')
    .then((response) => response.json())
    .then((json) => {

        json.recettes.forEach((recette) => {
            let li = document.createElement("li");
            li.className = "cd-popular";
            let header = document.createElement("header");
            header.className = "cd-pricing-header";
            let h2 = document.createElement("h2");
            h2.innerHTML = recette.name;
            header.appendChild(h2);
            li.appendChild(header);
            let div2 = document.createElement("div");
            div2.className = "cd-pricing-body";
            let ul2 = document.createElement("ul");
            ul2.className = "cd-pricing-features";
            let li2 = document.createElement("li");
            li2.innerHTML = recette.Description;
            let li3 = document.createElement("li");
            li3.innerHTML = "Temps de cuisson: " + recette.TimeCooking;
            let li4 = document.createElement("li");
            li4.innerHTML = "Temps de préparation: " + recette.TimeMin + "-" + recette.TimeMax + " min";
            let li5 = document.createElement("li");
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
            li5.innerHTML = "Difficulté: " + difficulte;

            ul2.appendChild(li2);
            ul2.appendChild(li3);
            ul2.appendChild(li4);
            ul2.appendChild(li5);
            div2.appendChild(ul2);
            li.appendChild(div2);
            let footer = document.createElement("footer");
            footer.className = "cd-pricing-footer";
            let a = document.createElement("a");
            a.className = "cd-select";
            a.href = "/recette.html?id=" + recette.id;
            a.innerHTML = "Afficher";
            footer.appendChild(a);
            li.appendChild(footer);
            ul.appendChild(li);

        });



    })