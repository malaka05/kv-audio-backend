import express from "express";
import { addReview, approveReview, deleteReview, getReview } from "../controller/reviewcontroller.js";

const reviewRouter = express.Router();

reviewRouter.post("/", addReview);
reviewRouter.get("/", getReview);

// Optional: get by name
// reviewRouter.get("/:name", (req, res) => {
//   console.log(req.params.name);
//   res.send(`Review by ${req.params.name}`);
// });

reviewRouter.delete("/:email", deleteReview);



reviewRouter.get("/approved" ,
    (req,res)=>{
        console.log("This is approved router")
    }
)

reviewRouter.get("/:email" , (req,res)=>{
    console.log("This is email router")

})

reviewRouter.put("/:email" ,(req,res)=>{
    console.log("this is email route")
})

reviewRouter.put("/approve/:email", approveReview)


export default reviewRouter;
 