import Product from "../models/product.js";

export function addProduct(req, res) {
    console.log(req.body, req.user);

    if(req.user == null){
       // ❌ req.status -> ✅ res.status
       res.status(401).json({
         message : "Place login and try again"
       });
       return;
    }
    


    if(req.user.role !="admin"){
        res.status(403).json({
            message : "yor are not authorized to perform this action"
        })

    } 

    const data = req.body;

    const newProduct = new Product(data);

    newProduct.save()
      .then(() => {
        res.json({ message: "✅ Product added successfully" });
      })
      .catch((error) => {
        res.status(500).json({ 
          error: "❌ Product addition failed", 
          details: error.message 
        });
      });
}
