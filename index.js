//fetch de l'URL//
fetch(url)
    .then(function(res) {
        return res.json();
    })
    .catch((error) => {
        let productsContainer = document.querySelector(".products-container");
        productsContainer.innerHTML =
            "Nous n'avons pas réussi à afficher nos nounours. Avez vous bien lancé le serveur local (Port 3000) ? <br>Si le problème persiste, contactez-nous.";
        productsContainer.style.textAlign = "center";
        productsContainer.style.padding = "30vh 0";
    })