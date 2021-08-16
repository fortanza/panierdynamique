// Algo 1 afficher liste de produit dynamique
//Date + Visualisation

// A Les données: créer tableaux liste de produit (String) function initArrayProduct

//B vider menu UL LI : resetMenu()

// C boucler sur la liste des produits function addAllToMenu()

// D sur chaque produit Ajouter ELEMENT GRAPHIQUE addItemToMenu(param )

// E  ResetAndInitMenu() // resetMenu + addAllToMenu

// *************************************************************
// variable

let productList = [];
const ul = document.querySelector("ul");
const li = document.querySelectorAll("li");


// *************************************************************
// function

const initArrayProduct = (product) => {
  productList.push(product);
};

initArrayProduct("Huawei");
initArrayProduct("Samsung");
initArrayProduct("Apple");
initArrayProduct("Xiaomi");
initArrayProduct("Oppo");
initArrayProduct("Sony");
initArrayProduct("Honor");

const resetMenu = () => {
  for (let i = 0; i < li.length; i++) {
    let liSelection = li[i];
    ul.removeChild(liSelection);
  }
};

const addItemToMenu = (name) => {
  const newLi = document.createElement("li");
  const a = document.createElement("a");
  a.setAttribute("href", "#");
  a.textContent = name;
  newLi.appendChild(a);
  ul.appendChild(newLi);
};

const addAllToMenu = () => {
  for (let i = 0; i < productList.length; i++) {
    let item = productList[i];
    console.log(item);
    addItemToMenu(item);
  }
};

const resetAndInitMenu = () => {
  resetMenu();
  addAllToMenu();
};

resetAndInitMenu();
