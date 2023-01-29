let articles = document.querySelector("#cart__items");
let totalPrice = document.querySelector("#totalPrice");
let totalQuantity = document.querySelector("#totalGquantity");
let totalArticlesPrice = 0;
let totalArticlesQuantity = 0;


(async function getCart(){
    let items = [];
    if (localStorage.getItem("panier") != null){
        items = JSON.parse(localStorage.getItem("cart"));

    }
    return items;

} );

