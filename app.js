const ProductManager = require("./clases/ProductManager.js");
const iniciar = async () => {

  try {
      const productMngr = new ProductManager("./productos.json");
      
      console.log("------------------addProduct()------------------");
      await productMngr.addProduct("Las.jq", "Lasagna jamon y queso", "Masa lasagna, salsa de tomate, fetas de jamon, ajo, queso barra", 8400, "urlImage", 10);
      await productMngr.addProduct("Can.ver", "Canelones de verdura", "Panqueque, salsa de tomate, ricotta, espinaca", 8400, "urlImage", 10);
      await productMngr.addProduct("F.ph", "Fideos puro huevo", "Harina, huevo, aceite de oliva, parmesano, ajo", 4800, "urlImage", 10);

      console.log("------------------addProduct() con ERROR------------------");
      await productMngr.addProduct("F.ph", "Fideos puro huevo", "Harina, huevo, aceite de oliva, parmesano, ajo", 4800, "urlImage", 10);
      
      console.log("------------------getProducts()------------------");
      const productos = await productMngr.getProducts();
      productos.forEach(element => {
          console.log(element);
      });

      console.log("------------------getProductById()------------------");
      let producto = await productMngr.getProductById(2);
      console.log(producto);

      console.log("------------------getProductById() con ERROR------------------");
      producto = await productMngr.getProductById(0);
      console.log(producto);

      console.log("------------------updateProduct() con objeto entero------------------");
      await productMngr.updateProduct(2, {
          title: 'Lasagna jyq objeto',
          description: 'Masa lasagna, salsa de tomate, fetas de jamon, ajo, queso barra',
          price: 8000,
          thumbnail: 'urlImage',
          code: 'Las.jq',
          stock: 10 
      });
      producto = await productMngr.getProductById(2);
      console.log(producto);

      console.log("------------------updateProduct() especificando un campo------------------");
      await productMngr.updateProduct(2, null, "title", 'Lasagna jyq objeto');
      producto = await productMngr.getProductById(2);
      console.log(producto);

      console.log("------------------deleteProduct()------------------");
      await productMngr.deleteProduct(2);
      await productMngr.getProductById(2);

      console.log("------------------deleteProduct() con ERROR------------------");
      await productMngr.deleteProduct(0);
      await productMngr.getProductById(0);
      

  } catch (error) {
      console.log(error.message);
  }
}

iniciar();