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

//Modèle d'objet d'un produit sélectionné
class product {
    constructor(productId, color, quantity) {
        this.productId = productId,
            this.color = color,
            this.quantity = quantity
    }
};

//Cette fonction permet d'ajouter un produit dans le panier
(async function addProductToCart(){
   //Récupération du produit sélectionné
 let productSelected = await getProductById();
 //Récupération des éléments du formulaire de saisi de l'utilisateur
 let colorSelected = document.querySelector("#colors");
 let quantitySelected = document.querySelector("#quantity");
 //Sélection du boutton ajouté au panier
 let buttonAddProductToCart = document.querySelector ("#addToCart");
 //Ajout d'un écouteur au boutton ajouté au panier
 buttonAddProductToCart.addEventListener("click", (ev) =>{
     //Bloquer les évènements par défaut
     ev.preventDefault();
     //Création de l'objet contenat les informations a ajoutés dans le panier
     let dataSelected = new product(
         productSelected._id,
         colorSelected.value,
         Number(quantitySelected.value)
     );
     
     //Vérification de la quantité de produits saisi par l'utilisateur
     if(dataSelected.quantity <= 0 || dataSelected.quantity >100){
        alert("Veuillez indiquer une quantité entre 1 et 100");

    }else{
        //Les données saisies par l'utilisateur sont corrects
        
        //Initialisation du local storage
    let localStorageProduct = JSON.parse(localStorage.getItem("cart"))
    

    //Si le local storage ou le panier est vide
    if(!localStorageProduct){
        localStorageProduct = [];
    
        localStorageProduct.push(dataSelected);
        localStorage.setItem("cart", JSON.stringify(localStorageProduct));
        console.log(localStorageProduct);
        alert("Le produit sélectionné a été ajouté avec succès dans le panier!");
    }else{
        //Le local storage ou panier comporte au moins un produit
        // . Vérifier si le local storage contient un produit avec meme coleur et meme id
        const productFinded = localStorageProduct.find ((el)=>el.productId === dataSelected.productId && el.color === dataSelected.color);
        //Si productFinded est vrai cela signifie que le produit sélectioné est déjà dans le local storage
        if(productFinded){
            let newQuantity = productFinded.quantity + dataSelected.quantity;
            productFinded.quantity = newQuantity;
            localStorage.setItem("cart", JSON.stringify(localStorageProduct));
        }else{
            //le produit sélectionné n'est pas dans le panier ou dans le local storage
            localStorageProduct.push(dataSelected);
            localStorage.setItem("cart", JSON.stringify(localStorageProduct));


        }
        alert("Le produit sélectionné a été ajouté avec succès dans le panier!");
    }
    

        

    
        
    }

   
    
 });


})();

