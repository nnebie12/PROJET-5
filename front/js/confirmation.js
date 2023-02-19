(async function getCart(){
    let items = [];
    if (localStorage.getItem("cart") == null){
        items = JSON.parse(localStorage.getItem("cart"));

    }else{
    return items;
    }
})(); 
//Enregistrement du panier dans le localStorage
function saveCart(cart){
    localStorage.setItem("cart", JSON.stringify(cart))
}

// Calcul de la quantité total d'article dans le panier
(async function totalProductsQuantity(){
    totalQunatity += parseInt(quantityProductPanier);
    console.log("Total quantité panier", totalQuantity);
    document.getElementById("totalQuantity").innerText = totalQuantity;
})();

//Calcul du prix total des produits du panier
(async function totalProductsPrice(){
    totalProductPriceCart = quantityProductCart * priceProduitCart;
    totalPrice += totalProductPriceCart;
    console.log("Total prix panier");
    document.getElementById("totalPrice").innerText = totalPrice;

})();
//Recalcule de la quantité des produits dans le panier
(async function addCart(){
    let cart = getCart();
    //vérification de l'id, s'il correspond
    for(let i = 0; i < getCart.length; i++){
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
    

})();
