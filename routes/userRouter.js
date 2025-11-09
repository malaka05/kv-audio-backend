// express library එක import කරනවා
import express from "express";

// user controller එකෙන් loginUser සහ registerUser functions import කරනවා
import { loginUser, registerUser } from "../controller/userncontroller.js";

// express Router object එක create කරනවා
// මේ Router එකෙන් user related routes handle කරන්න පුළුවන්
const userRouter = express.Router();

// ✅ User registration route
// HTTP POST request එකක් "/" path එකට එන විට registerUser function එක call වෙනවා
userRouter.post("/", registerUser);

// ✅ User login route
// HTTP POST request එකක් "/login" path එකට එන විට loginUser function එක call වෙනවා
userRouter.post("/login", loginUser);

// Router එක export කරනවා, app.js එකේ use කරන්න
export default userRouter;
