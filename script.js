"use strict";

// **** Algo 1 afficher liste de produit dynamique ****
//Date + Visualisation

// A Les données: créer tableaux liste de produit (String) function initArrayProduct

//B vider menu UL LI : resetMenu()

// C boucler sur la liste des produits function addAllToMenu()

// D sur chaque produit Ajouter ELEMENT GRAPHIQUE addItemToMenu(param )

// E  ResetAndInitMenu() // resetMenu + addAllToMenu

// **** Algo 2 Ajouter produits au catalogue ****

// A crèer un champ input

//B créer bouton avec bouton onclick

// C sur event appeler fonction AddItem(name) (le nom vient du input)

// D Ajouter element de le arrayDeProduit

// E  call reserAndInitMenu

// F BONUS function checkDoublons (return un boolean true )

// function avec param name à tester.

// Boucle sur chaque produit et tester chaque élément.

// si élément trouvé (nom) return true / sinon false

// **** Algo 3  PANIER AJOUTER ET VIDER ****

// A ajouter bouton DELETE

// B créer fonction deleteItem(name)

// C parcourir la liste de produits et supprimer si trouvé

// D BONUS mousseOver : Si la souris survole un item du menu de gauche,
// faire un SET input pour avec le nom du produit survolé dans le champs texte

// **** Algo 4 PANIER AJOUTER ET VIDER ****

// A Creer un ARRAY qui correspont à notre panier

// B afficherTexte Panier

// C onclick sur les elelement tu menu AddToCard(name)

// D Bouton VIDER PANIER

// E afficher le detail du panier (tous les produit )

// *************************************************************
// variable

let productList = [];
let productBasket = [];
const input = document.querySelector("input");

// *************************************************************
// function

const initArrayProduct = () => {
  productList.push("Huawei");
  productList.push("Samsung");
  productList.push("Apple");
  productList.push("Xiaomi");
  productList.push("Oppo");
  productList.push("Sony");
  productList.push("Honor");
  productList.push("LG");
};

initArrayProduct();

const resetMenu = () => {
  const ul = document.querySelector("ul");
  const li = document.querySelectorAll("li");
  for (let i = 0; i < li.length; i++) {
    let liSelection = li[i];

    ul.removeChild(liSelection);
  }
};

const addAllToMenu = () => {
  for (let i = 0; i < productList.length; i++) {
    let item = productList[i];
    addItemToMenu(item);
  }
};

const addItemToMenu = (name) => {
  const ul = document.querySelector("ul");
  const newLi = document.createElement("li");
  const a = document.createElement("a");
  a.setAttribute("href", "#");
  a.setAttribute("onmouseover", "setInput('" + name + "')");
  a.setAttribute("onclick", "addToCard('" + name + "')");
  a.textContent = name;
  newLi.appendChild(a);
  ul.appendChild(newLi);
};

const resetAndInitMenu = () => {
  resetMenu();
  addAllToMenu();
};

resetAndInitMenu();

let checkDuplicate = (testProduct) => {
  let isDuplicate = false;
  for (let i = 0; i < productList.length; i++) {
    let items = productList[i];
    if (items === testProduct) {
      isDuplicate = true;
    }
  }
  return isDuplicate;
};

document.querySelector("button").addEventListener("click", () => {
  if (checkDuplicate(input.value)) {
    alert("Erreur: Produit existant");
  } else {
    productList.push(input.value);
  }
  console.log(productList);
  resetAndInitMenu();
});

document.getElementById("delete").addEventListener("click", () => {
  const removeInput = input.value;
  for (let i = 0; i < productList.length; i++) {
    let items = productList[i];
    if (items === removeInput) {
      productList.splice(i, 1);
      console.log(productList[i]);
    }
  }
  resetAndInitMenu();
});

const setInput = (name) => {
  input.value = name;
};

const addItemToBasket = (name) => {
  const div = document.getElementById("yourBasket");
  const p = document.createElement("p");
  p.textContent = name;
  p.setAttribute("class", "li-basket");
  div.appendChild(p);
};

const addAllToBasket = () => {
  for (let i = 0; i < productBasket.length; i++) {
    let itemBasket = productBasket[i];
    addItemToBasket(itemBasket);
  }
};

const resetBasket = () => {
  const div = document.getElementById("yourBasket");
  const p = document.querySelectorAll("li-basket");
  for (let i = 0; i < p.length; i++) {
    let pSelection = p[i];
    div.removeChild(pSelection);
  }
  console.log("remove");
};

const resetAndInitBasket = () => {
  resetBasket();
  addAllToBasket();
};

// resetAndInitBasket();

const addToCard = (name) => {
  productBasket.push(name);
  console.log(productBasket);
  let basket = "Votre panier est vide";
  if (productBasket.length > 0) {
    basket = "Vous avez " + productBasket.length + " produits dans le panier";
  }
  document.getElementById("basket-content").textContent = basket;
  resetAndInitBasket();
};

document.getElementById("empty-basket").addEventListener("click", () => {
  console.log("essai");
  resetBasket();
});
