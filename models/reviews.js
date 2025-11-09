import mongoose from "mongoose";


const reviewsSchema = new mongoose.Schema({

    email : {
        type: String,
        required : true,
        unique : true
    },

    name : {
        type: String,
        required : true,  
    },
    rating : {
        type: String,
        required : true,  
    },

    comment : {
        type: String,
        required : true,  
    },
    date : {
        type: String,
        required : true,
        default : Date.now()  
    },

    isApproved : {
        type: Boolean,
        required : true, 
        default : false 
    },
    profilepic : {
        type: String,
        required : true,
        default : "https://img.icons8.com/?size=1200&id=tZuAOUGm9AuS&format=jpg" 
    },
})

const Review = mongoose.model("reviews",reviewsSchema);

export default Review;