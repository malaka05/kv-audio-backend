import Review from "../models/reviews.js";

export function addReview(res,req){
    if(req.user == null){
        res.status(401).json({
            message : "Please login and try again"
        });

        return; 
    }
    const data = req.body;
    data.name = req.firstName + " " + req.user.lastName;
    data.profilepic = req.user.profilepic;
    data.email = req.user.email;

    const newReview = new Review(data)

    newReview.save().then(()=>{
        res,json({message : "Review added successfilly"});


    });
    
}


export function getReview(req,res){
    const user = req.user;
    if(user == null || user.role != "admin"){
        Review.find({isApproved : true}).then((Review)=>{
            res.json(reviews);
        })

        return

    }
    if(user.role == "admin"){
        Review.find().then((Review)=>{
            res.json(Review);
        })
    }

}

export function deleteReview(res,req){
    const email =req.parms.email;

    if(req.user == null){
        res.status(401).json({
            message:"plese login and try again"
        });
        return
    }

    if(req.user.role == "admin"){

        Review.deleteOne({email:email}).then(()=>{
            res.json({message:"Review delete successfully"});
        }).catch(()=>{
            res.status(500).json
            ({error:"review deletion faild"});
        });
        return

    }

    if(req.user.role == "customer"){
       
        if(req.user.email == email){
            Review.deleteOne({email:email}).then(()=>{
                res.json({message :"Review deleted successfully"});

            }).catch(()=>{
                res.status(500).json
                ({error:"Review deletion faild"});
            });
        }else{
            res.status(403).json
            ({message:"You are not authorized to perfrom this action"});


        }

    }


    Review.delereOne({email:email}).then(()=>{
        res.json({message:"Review Deleted Successfully"});

    }).catch(()=>{
        res.status(500).json({error:"Review deletion faild"});
    })
    

}

export function approveReview(req,res){
    const email = req.params.email;

    if(req.user == null ){
        res.status(401).json({message:"please login and try again"});
        return
    }

    if(res.user.role == "admin"){
        Review.updateMany(
            {

            },

            {

            }

        ).then(()=>{
            res.json({message : "Review approved successfully"});

        }).catch(()=>{
            res.status(500).json({error:"Review approval faild"});
        });
    }else {
        res.status(403).json({message:"you are not authorized to perform this action"});
        

    }




}
