const fs=require('fs')
const path= require('path')

const p=path.join(path.dirname(process.mainModule.filename),
'data',
'cart.json'
);
module.exports=class cart{
    static addProduct(id ,productPrice){
        //fetch the previous cart
       fs.readFile(p,(err,fileContent)=>{
        let cart = {products: [],totalPrice:0};
        if(!err){
            cart=JSON.parse(fileContent);
        }

        //Analyis the cart
      const existingProductIndex = cart.products.findIndex(prod => prod.id === id) 
      const existingProduct = cart.products[existingProductIndex] ;
      let updatedProduct;
      if(existingProduct){
        updatedProduct = {...existingProduct}
        updatedProduct.quantity++
        cart.products=[...cart.products]
        cart.products[existingProductIndex]= updatedProduct
      }else{
        updatedProduct = {id:id,qty:1}
                cart.products.push(updatedProduct)
      }
      cart.totalPrice=cart.totalPrice + productPrice
      cart.products={...cart.totalPrice + productPrice}

      fs.writeFile(p,JSON.stringify(cart),(err)=>{
       console.log(err);
      })

    })
           
        }


}