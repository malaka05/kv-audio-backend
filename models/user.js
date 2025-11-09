// mongoose library එක import කරනවා
import mongoose from "mongoose";

// user data structure එක define කරන Schema එක
const userSchema = new mongoose.Schema({

  // user email field එක
  email: {
    type: String,       // type එක String
    required: true,     // email අනිවාර්යයි
    unique: true        // එකම email එක database එකේ unique වෙනවා
  },

  // user password field එක
  password: {
    type: String,       // type එක String
    required: true      // password අනිවාර්යයි
  },

  // user role field එක
  role: {
    type: String,       // type එක String
    required: true,     // role අනිවාර්යයි
    default: "customer" // default role එක "customer"
  },

  // user first name field එක
  FirstName: {
    type: String,       // type එක String
    required: true      // first name අනිවාර්යයි
  },

  // user last name field එක
  lastname: {
    type: String,       // type එක String
    required: true      // last name අනිවාර්යයි
  },

  // user address field එක
  address: {
    type: String,       // type එක String
    required: true      // address අනිවාර්යයි
  },

  // user profile image field එක
  image: {
    type: String,       // type එක String
    required: true      // image අනිවාර්යයි
  },

  // user WhatsApp number field එක
  whatsApp: {
    type: String,       // type එක String
    required: true      // WhatsApp number අනිවාර්යයි
  },
  profilepic : {
        type: String,
        required : true,
        default : "https://img.icons8.com/?size=1200&id=tZuAOUGm9AuS&format=jpg" 
    },
});

// Schema එකෙන් model එක create කරනවා
// "User" කියන collection එකට map වෙනවා MongoDB තුළ
const User = mongoose.model("User", userSchema);

// model එක export කරනවා, වෙන තැන්වල use කරන්න
export default User;
