const ProductModel=require('../models/Product')

module.exports = {
    create:async function (req, res) {
        try {
           const {productName,price}=req.body;
           const product=new ProductModel({productName, price});
          return res.status(201).json( await product.save());
    
       } catch (error) {
        return  res.status(500).send("Product could saved");
       }
    },

    getAll: async function (req, res) {
        res.json(await ProductModel.find());
    },

    getById: async function (req, res) {
        res.json({id: 1, name: 'QA Test App'});
    },
    deleteById: async function (req, res) {
       const {id}=req.params
       try {
         const product=   await ProductModel.findById(id)
         if(!product)
         return res.status(404).send(`Product with id:${id} does notexits`);
            await  product.remove()
         return res.status(200).send("Product Deleted!")
       } catch (error) {
            return res.status(500).send("internal server error!")
       }
    },
    updateProduct: async function (req, res) {
       const {_id,productName,price}=req.body

       try {
         const product= await ProductModel.findById(_id)
        if(productName){
            product.productName=productName
        }
        if(price){
            product.price=price;
        }
        await product.save();
        return res.status(200).send('Product updated ')
       } catch (error) {
            return res.status(500).send("internal server error!")
       }
    }
};
