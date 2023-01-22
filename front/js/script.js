//cette fonction permet de récupérer les produits depuis l'API du backend//
async function getProducts(){
    try{
        let response = await fetch ("http://localhost:3000/api/products"); 
        return await response.json();   
    }catch(error){
        console.log("erreur dans le traitement de la requête",error)
    }
}
//cette fonction permet d'afficher les produits de l'API du backend dans la page d'accueil//
(async function displayProducts(){
    let products = await getProducts();
    let renderHtml = " ";
    products.forEach(element => {
        let renderElement = ` 
        <a href="./product.html?id=${element._id}">
            <article>
              <img src="${element.imageUrl}" alt="${element.altTxt}">
              <h3 class="productName">${element.name}</h3>
              <p class="productDescription">${element.description}</p>
            </article>
          </a> 
          ` ;
          renderHtml += renderElement;
        
    });

    let itemsContainer = document.getElementById("items");
    itemsContainer.innerHTML = renderHtml;

})();







