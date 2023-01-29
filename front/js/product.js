//
const containerImg = document.querySelector(".item__img")
const containername = document.querySelector("title")
const containerdesc = document.getElementById("description")
const containercolor = document.getElementById("colors")
const containerprice = document.getElementById("price")


//Cette fonction permet de récupérer l'identifiant du produit envoyé depuis la rédirection dans la page index.html//
function getIdProduct(){
    let url = new URL(window.location.href); // Récupérer l'url
    let searchParams = new URLSearchParams(url.searchParams); //Récupérer les paramètres de l'URL
    if(searchParams.has('productId')){
        var id = searchParams.get('productId');
        return id;
    }

}
//Cette fonction permet de récupérer les informations du produit depuis l'Api du backend en fonction de l'identifiant
async function getProductById(){
    let productId = getIdProduct();
    try{
        let response = await fetch (`http://localhost:3000/api/products/${productId}`); 
        return await response.json();   
    }catch(error){
        console.log("erreur dans le traitement de la requête",error)
    }

}

//Cette fonction permet d'afficher les détails d'un produit
(async function displayProducts(){
    //Récupération du produit à afficher
    let productToDisplay = await getProductById();
    //Affichage du produit
    console.log(productToDisplay);
    containerImg.innerHTML = `<img src="${productToDisplay.imageUrl}" alt="${productToDisplay.altTxt}">`;
    containername.innerHTML = productToDisplay.name;
    containerprice.innerHTML = productToDisplay.price;
    containerdesc.innerHTML = productToDisplay.description;
    productToDisplay.colors.forEach(color => {
        let htmlColorContent = `<option value="${color}">${color}</option>`;
        containercolor.innerHTML += htmlColorContent;
        
    });
})();


