const ProductManager = require("./ProductManager");

const productMngr = new ProductManager();
productMngr.addProduct("F.PH", "Fideo puro huevo", "Aceite de oliva", "ajo" ,"Albaca", 3500, "urlImage", 10);
productMngr.addProduct("Canelones", "canelones", "Masa de panqueque", "salsa de tomate", "Queso Reggianito", 5000, "urlImage", 10);
productMngr.addProduct("Lasagna", "Jamon y Queso", "Masa puro huevo, salsa de tomate" , "Mozzarella","Reggianito", 6500, "urlImage", 10);

console.log("---getProducts()---")
productMngr.getProducts();

console.log("---getProductById(3)---")
productMngr.getProductById(3);

console.log("---getProductById(0) con error---")
productMngr.getProductById(0);