import express from "express"; // Express framework එක import කරනවා
import bodyParser from "body-parser"; // Body parser import කරනවා, JSON data handle කරන්න
import mongoose from "mongoose"; // MongoDB connect වීමට mongoose import කරනවා
import userRouter from "./routes/userRouter.js"; // User routes import කරනවා
import productRouter from "./routes/productRouter.js"; // Product routes import කරනවා
import jwt from "jsonwebtoken"; // JWT (JSON Web Token) import කරනවා

const app = express(); // Express app එක initialize කරනවා

app.use(bodyParser.json()); // Middleware එකක් set කරනවා, request body එක JSON format එකට convert කරන්න

// Middleware එකක් set කරනවා, සියලු request වලට token check කිරීමේ function එකක්
app.use((req,res,next)=>{
  console.log("request is here") // Console එකේ print කරනවා request එක ආවා කියලා

  let token = req.header("Authorization") // Header එකෙන් Authorization token එක ලබාගන්නවා

  if(token != null){ // Token null නැතිනම්
    token = token.replace("Bearer"," ") // "Bearer" keyword එක token එකෙන් remove කරනවා

    // Token verify කරනවා JWT secret key එකත් එක්ක
    jwt.verify(token,"kv-secret-89!", (err,decoded)=>{
        if(!err){ // Error නැතිනම්
          console.log(decoded); // Token එක valid නම් decoded info එක print කරනවා
        }
    })
  }
  //hiii

  console.log(token) // Token එක print කරනවා

  next() // Middleware එකෙන් next function එකට යන්න
})

const mongourl = "mongodb+srv://admin123:school12345@cluster0.efdhxnc.mongodb.net/?retryWrites=true&w=majority"; // MongoDB connection URL

// MongoDB connect කරනවා
mongoose.connect(mongourl)
  .then(() => console.log("✅ MongoDB connection successfully")) // Success message print කරනවා
  .catch((err) => console.log("❌ MongoDB connection failed:", err.message)); // Error message print කරනවා

app.use("/api/user", userRouter); // /api/user endpoint එකට userRouter use කරනවා
app.use("/api/product", productRouter); // /api/product endpoint එකට productRouter use කරනවා

// Server එක start කරනවා port 3000 එකේ
app.listen(3000, () => {
  console.log("🚀 Server is running on port 3000"); // Server start message print කරනවා
});
