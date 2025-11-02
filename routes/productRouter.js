import express from "express";
import { addProduct } from "../controller/productController.js";

const productRouter = express.Router();

// ✅ Product එක add කරන route එක
productRouter.post("/", addProduct);

export default productRouter;
