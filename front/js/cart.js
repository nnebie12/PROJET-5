// décaration des variales global pour le calcul total de la quantité de produits et le prix du panier
let products = document.querySelector("#cart__items");
let totalPrice = 0;
let totalQuantity = 0;
let quantityProductCart = 0;
let priceProductCart = 0;
let totalProductPriceCart = 0;



async function getCartById(){
    let cartId = getICart();
    try{
        let response = await fetch (`http://localhost:3000/api/products/${productId}`); 
        return await response.json();   
    }catch(error){
        console.log("erreur dans le traitement de la requête",error)
    }

}

async function getCart(){
    let items = [];
    if (localStorage.getItem("panier") == null){
        items = JSON.parse(localStorage.getItem("cart"));

    }else{
    return items;
    }
} 
//Enregistrement du panier dans le localStorage
function saveCart(cart){
    localStorage.setItem("cart", JSON.stringify(cart))
}

// Calcul de la quantité total d'article dans le panier
async function totalProductsQuantity(){
    totalQunatity += parseInt(quantityProductPanier);
    console.log("Total quantité panier", totalQuantity);
    document.getElementById("totalQuantity").innerText = totalQuantity;
}

//Calcul du prix total des produits du panier
async function totalProductsPrice(){
    totalProductPriceCart = quantityProductCart * priceProduitCart;
    totalPrice += totalProductPriceCart;
    console.log("Total prix panier");
    document.getElementById("totalPrice").innerText = totalPrice;

}

//Recalcule de la quantité des produits dans le panier
async function addCart(){
    let cart = getCart();
    //vérification de l'id, s'il correspond
    let foundProduct = products.find((element) => element._id === idProductsLocalStorage);
    if(foundProduct){
        let newTotalProductPriceCart = foundProducts.price * quantyProductsLocalStorage;
        newTotalPriceCart += newTotalProductPriceCart;
        console.log("Nouveau prix total du panier");
    }else{
        products.quantity = 1;
        cart.push();
    }
    

}


let alreadyInCarte = product.findIndex(
    //Pour éviter les doubles id et options
    (item => item.id === productSelected._id && item.lense === productSelected.lense)
);

//Si l'article n'est pas encore présent l'indexé à -1
if(alreadyInCarte == -1){
product.push(productToCart);
}else{
//on incrémente sa quantité
product[alreadyInCarte].number += quantity;
}

let localStorageCart = JSON.stringify(productToCart);
localStorage.setItem('productToCart', cart);





 