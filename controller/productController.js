// Product model එක import කරනවා
import Product from "../models/product.js";

// addProduct කියන function එක export කරනවා
// req -> client request එක
// res -> server response එක
export function addProduct(req, res) {
    // console log එකෙන් request body එක සහ user object එක print කරනවා
    console.log(req.body, req.user);

    // user login වී නැති නම් check කරන කොටස
    if(req.user == null){
       // ❌ req.status -> ✅ res.status
       // user login නැති නම් 401 Unauthorized response return කරනවා
       res.status(401).json({
         message : "Place login and try again"
       });
       return; // function එක exit කරනවා
    }
    
    // user එක admin role එකෙන් නැත්තම් check කරන කොටස
    if(req.user.role != "admin"){
        // 403 Forbidden response return කරනවා
        res.status(403).json({
            message : "You are not authorized to perform this action"
        })
        return; // function එක exit කරනවා
    } 

    // request body එකෙන් data එක ලබාගන්නවා
    const data = req.body;

    // Product model එකෙන් new product object එක create කරනවා
    const newProduct = new Product(data);

    // MongoDB database එකට save කරනවා
    newProduct.save()
      .then(() => {
        // save successful නම් success message return කරනවා
        res.json({ message: "✅ Product added successfully" });
      })
      .catch((error) => {
        // save fail නම් error message return කරනවා
        res.status(500).json({ 
          error: "❌ Product addition failed", 
          details: error.message 
        });
      });
}
