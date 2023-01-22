//
const containerImg = document.querySelector(".item_img")
const containerh1 = document.querySelector("title")
const containerdesc = document.getElementById("description")
const containercolor = document.getElementById("color")
const containerprice = document.getElementById("price")
const containerAddToCart = document.getElementById("addToCart")
const article = "articlePanier"


//Creer une variable qui contenant l'html du panier
let productPanier = document.querySelector(".item")
let id = new URL(window.location.href).searchParams.get("id")
const url = ` http://localhost:3000/api/products/${id}`;

//Cette fonction permet de faire appel des éléments de l'article
async function getCanapeId(){
    let reponse = await fetch(url)
    let renderHtml = ""
    
    products.forEach(data => {
        article.name = data.name
        article.description = data.description
        article.price = data.price
        article.colors = data.colors
        article.imageUrl = data.imageUrl
        article._id = data._id
        article.altTxt = data.alttTxt
    })
     
}

//Permettre à l'utilisateur de choisir sa couleur
let color = document.getElementById("colors");
async function choixColors(){
    if(color.value === "" || color.value === null) {
        alert("veuillez choisir une couleur");
        return

    }
}

// donner la possibilité de choisir la quantité voulu
let qte = document.getElementById("quantity");

async function choixQte(){
    if(qte.value <1 || qte.value === null){
        alert("veuillez choisir une quantité");
        return;
    }
}
 
const renderProduct = async(currentProduct) => {
    await getCanapeId();
    containerh1.innerHTML = currentProduct.name;
    containerprice.innerHTML = currentProduct.price.toString();
    containerdesc.innerHTML = currentProduct.description;
    containerImg.innerHTML = `<img src="${currentProduct.imageUrl}" alt="${currentProduct.name}"/>`;
    currentProduct?.color?.map((color) => {
        containercolor.innerHTML += `<option value="${color}">${color}</option>`;
    });


};
renderProduct(article);

//article est un tableau qui contient les produits du panier
const articleTab = []
const inlocalStorage = JSON.parse(localStorage.getItem("objet"))

//creer une fonction click pour ajouter les produit au panier lorsque l'utiliseur click sur le bouton
containerAddToCart.addEventListener('click', function(){
    choixColors();
    choixQte();

let articlePanier = {
    _id : article._id,
    description : article.description,
    name : article.name,
    price : article.price,
    imageUrl : article.imageUrl,
    alttTxt : article.altTxt,
    color : color.value,
    qte: Number(qte.value)
}

if(inlocalStorage){
    articleTab.push (...inlocalStorage, articlePanier)
    alert('veuillez patientez, puis recommencez')
}else{
    articleTab.push(articlePanier)
}

console.log(articlePanier)
window.localStorage.setItem("objet", JSON.stringify(articleTab))
window.location.href = "cart.html"
});



