//A $(document).ready()block.
$(document).ready(function() { console.log("ready!") });

//Mise à jour du basketPreview
basketPreview();

function convertPrice(_productPrice) {
    let price = `${produit.price}`;
    price = Intl.NumberFormat("fr-FR", {
        style: "currency",
        currency: "EUR",
        minimumFractionDigits: 2,
    }).format(price / 100);
    return price;
}

//fetch de l'URL
fetch(url)
    .then((response) => response.json())
    .then((data) => {
        addCards(data);
    })
    .catch((erreur) => console.log("erreur : " + erreur));

// fonction pour la création des cards de la page d'accueil
function addCards(data) {
    //boucle pour chacun d'un produit
    for (produit of data) {
        //recupère l'élément liste dans le HTML
        var card = document.getElementById("liste");
        //convertit le prix
        var price = convertPrice(Product.price);
        card.innerHTML += `
      <div class="col-sm-12 col-md-6 col-lg-6 pb-3 d-flex"> 
          <div class="card border bg-secondary shadow p-3 mb-5 rounded">
              <div class="card-body"> 
                  <div class="row">
                      <div class="img-contain">
                           <a href="frontend/pages/produit.html?_id=${produit._id}"><img src="${produit.imageUrl}" class="img-fluid img-thumbnail bg-black p-1" style="--bs-bg-opacity: .50;" alt="${produit.name}"></a>
                      </div> 
                      <div class="col-6 col-sm-7 mt-3" >
                          <h3 class="card-title text-white">${produit.name}</h3>
                      </div>
                      <div class="col-6 col-sm-5 text-end mt-3">
                          <h3 class="card-title text-white">${price}</h3>
                      </div>
                 </div>
                  
                  <a href="frontend/pages/produit.html?_id=${produit._id}" class="btn btn-success my-2 d-flex justify-content-center fs-4">Voir ce produit</a>
              </div>
          </div>
      </div>`;
    }
}