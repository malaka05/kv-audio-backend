import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function registerUser(req, res) {
  try {
    const data = req.body;

    // 🛠 Password hash කරන එක
    const hashedPassword = bcrypt.hashSync(data.password, 10);

    // 🛠 නව user එක create කරන එක
    const newUser = new User({
      ...data,
      password: hashedPassword,
    });

    // 🛠 Save user to MongoDB
    await newUser.save();

    res.status(201).json({ message: "✅ user added successfully" });
  } catch (error) {
    res.status(500).json({
      error: "❌ user request failed",
      details: error.message,
    });
  }
}

// ================================
// 🟢 Login Function
// ================================
export function loginUser(req, res) {
  const data = req.body;

  // 🛠 01. findOne() තමයි හරි. find1() kiyala function ekak nathi nisa error eka enawa.
  User.findOne({
    email: data.email,
  }).then((user) => {
    // 🛠 02. User variable eka wrong. Function parameter ekata 'user' kiyala gannawa.
    if (user == null) {
      // 🛠 03. res,status() kiyanne wrong. Correct eka res.status()
      res.status(404).json({ error: "❌ user not found" });
    } else {
      // 🛠 04. object variable correct karala
      const isPasswordCorrect = bcrypt.compareSync(data.password, user.password);

      if (isPasswordCorrect) {
        // 🛠 05. jwt sign ekata userRouter nemei, user object eka ganna one
        const token = jwt.sign(
          {
            firstName: user.FirstName,
            lastName: user.lastname,
            email: user.email,
            role: user.role,
          },
          "kv-secret-89!"
        );

        // 🛠 06. success response eka ekama place ekakata dala
        res.json({ message: "✅ login successful", token: token });
      } else {
        // 🛠 07. password mismatch unaama denna error message eka
        res.status(401).json({ error: "❌ invalid password" });
      }
    }
  })
  .catch((error) => {
    res.status(500).json({ error: "❌ login request failed", details: error.message });
  });
}
