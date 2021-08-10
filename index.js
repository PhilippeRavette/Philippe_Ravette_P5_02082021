const url = "http://localhost:3000/api/teddies";

// A $( document ).ready() block.
$(document).ready(function() {
    console.log("ready!");
    var Product = getProducts();
});

function getProducts() {
    fetch(url)
        .then(function(res) {
            if (res.ok) {
                return res.json();
            }
        })
        .then((data) => {
            addCards(data);
        })
        .catch(function(err) {
            // Une erreur est survenue
        });
}

//création de la class produit
class Product {
    constructor(id, name, description, price, option, quantity, imgurl) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = +price;
        this.option = option;
        this.quantity = +quantity;
        this.imgurl = imgurl;
    }
}
// fonction pour la création des cards de la page d'accueil
function addCards(data) {
    //boucle pour chaque iteration d'un produit
    for (produit of data) {
        //recupère l'élément liste dans le HTML
        const card = document.getElementById("liste");
        //convertit le prix
        //const price = convertPrice(produit.price);//
        card.innerHTML += `
      <div class="col-sm-12 col-md-6 col-lg-6 pb-3  ">
          <div class="card border bg-light shadow p-3 mb-5 bg-body rounded">
              <div class="card-body">
                  <div class="row">
                      <a href="./produit.html?_id=${produit._id}"><img src="${produit.imageUrl}" class="img-fluid img-thumbnail p-1" alt="${produit.name}"></a>
                      <div class="col-6 col-sm-7 mt-3" >
                          <h5 class="card-title">${produit.name}</h5>
                      </div>
                      <div class="col-6 col-sm-5 text-end mt-3">
                          <h5 class="card-title">${price}</h5>
                      </div>
                  </div>
                  <p class="card-text text-truncate">${produit.description}</p>
                  <a href="./produit.html?_id=${produit._id}" class="btn btn-secondary">Acheter ce produit</a>
              </div>
          </div>
      </div>`;
    }
}