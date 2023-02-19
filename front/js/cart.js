// décaration des variales global pour le calcul total de la quantité de produits et le prix du panier
let products = document.querySelector("#cart__items");
let totalPrice = 0;
let totalQuantity = 0;
let quantityProductCart = 0;
let priceProductCart = 0;
let totalProductPriceCart = 0;



(async function getCartById(){
    let cartId = getIdCart();
    try{
        let response = await fetch (`http://localhost:3000/api/products/${productId}`); 
        return await response.json();   
    }catch(error){
        console.log("erreur dans le traitement de la requête",error)
    }

})();

async function addToCart(){
    let getCart = [];
    let ArrayCart = JSON.parse(localStorage.getItem("cart"));
    if(ArrayCart !== nul){
        for(let i = 0; i < ArrayCart.length; i++){
            let cartToDisplay = await getCartById();
            let productsData = new article(
                productData._id,
                colorData.ArrayCartcolor,
                NameData.

            )

        }
    }

}


(async function displayCart(){
    let reponseFetch = await addToCart();
   let cartValue= JSON.parse(localStorage.getItem("cart"));
    if (cartValue !== null && cartValue.length !== 0){
            let cartToDisplay = await getCartById();
            let renderHtml = " ";
           products.forEach(products => {
             let  = products`
             <article class="cart__item" data-id="${products_id}" data-color="${products-color}">
                <div class="cart__item__img">
                  <img src="${products.imageUrl}" alt="${products.altTxt}">
                </div>
                <div class="cart__item__content">
                  <div class="cart__item__content__description">
                    <h2>${products.name}</h2>
                    <p>${products.descrition}</p>
                    <p>${products.price}</p>
                  </div>
                  <div class="cart__item__content__settings">
                    <div class="cart__item__content__settings__quantity">
                      <p>${products.quantity}</p>
                      <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${cartToDisplay.quantity}">
                    </div>
                    <div class="cart__item__content__settings__delete">
                      <p class="deleteItem">${products.descrition}</p>
                    </div>
                  </div>
                </div>
               </article>
               `;
           });
        
    }else{
        alert("Panier vide, veuillez vhoisir un article" )
    }

    
})();









 