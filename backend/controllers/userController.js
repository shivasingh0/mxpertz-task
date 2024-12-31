const generateToken = require("../config/generateToken");
const User = require("../models/userModel");
const bcrypt = require("bcryptjs");

// register user
const registerUser = async (req, res) => {
  try {
    const { name, email, password, isDoctor } = req.body;

    if (!name || !email || !password) {
      throw new Error("Please fill in all fields");
    }


    const userExists = await User.findOne({ email });
    if (userExists) {
      throw new Error("User already exists");
    }

    // bcrypt password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // create user
    const user = await User.create({ name, email, password: hashedPassword, isDoctor });

    if (!user) {
      throw new Error("User not created");
    }

    // remove password from response
    user.password = undefined;

    res.status(201).json({ message: "User created successfully", user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// login user
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      throw new Error("Please fill in all fields");
    }

    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("User not found");
    }

    // compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new Error("Invalid credentials");
    }

    // generate token
    const token = generateToken(user._id, user.email);

    // remove password from response
    user.password = undefined;

    res.status(200).json({ message: "Logged in successfully", token, user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { registerUser, loginUser };