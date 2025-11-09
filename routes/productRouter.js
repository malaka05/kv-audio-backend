// express library එක import කරනවා
import express from "express";

// productController.js file එකෙන් addProduct function එක import කරනවා
import { addProduct } from "../controller/productController.js";

// express Router object එක create කරනවා
// මේ Router එකෙන් product related routes handle කරන්න පුළුවන්
const productRouter = express.Router();

// ✅ Product එක add කරන route එක
// HTTP POST request එකක් "/" path එකට එන විට addProduct function එක call වෙනවා
productRouter.post("/", addProduct);

// Router එක export කරනවා, app.js එකේ use කරන්න
export default productRouter;
