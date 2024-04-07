const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const User = require("../models/User");
const { validateEmail } = require("../utils/validateEmail");
const { generateToken } = require("../utils/generateJwtToken");
/**
 ** @desc    login user
 ** @route   POST /api/auth/login
 ** @access  Public
 */
const login = asyncHandler(async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).json("Please add all fields");
    }

    // check for user email
    const user = await User.findOne({ email: email });

    if (user && (await bcrypt.compare(password, user.password))) {
      res.json({
        _id: user.id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id),
      });
    } else {
      res.status(401).json("Invalid credentials");
    }
  } catch (error) {
    res.status(400).json("Sorry something went wrong. Couldn't log in");
  }
});

/**
 ** @desc    register new user
 ** @route   POST /api/auth/register
 ** @access  Public
 */
const register = asyncHandler(async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      res.status(400).json("Please add all fields");
      return;
    }

    // check if valid email
    if (!validateEmail(email)) {
      res.status(400).json("Invalid email");
      return;
    }

    // password length
    if (password.length <= 5) {
      res.status(400).json("Password must be at least 6 characters");
      return;
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
      res.status(409).json("User already exists");
      return;
    }

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
      name,
      email,
      password: hashPassword,
    });

    if (user) {
      res.status(201).json({
        _id: user.id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id),
      });
    } else {
      res.status(400).json("Invalid user data");
      return;
    }
  } catch (error) {
    res.status(400).json("Sorry something went wrong. Couldn't sign up");
  }
});
/**
 ** @desc    get user
 ** @route   GET /api/auth/:id
 ** @access  Public
 */
const getUser = asyncHandler(async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (user) {
      res.status(200).json(user);
    } else {
      res.status(400).json("Sorry user does not exist");
    }
  } catch (error) {
    res.status(400).json("Sorry user does not exist");
  }
});
/**
 ** @desc    get users
 ** @route   GET /api/auth
 ** @access  Public
 */
const getUsers = asyncHandler(async (req, res) => {
  try {
    const users = await User.find();

    res.status(200).json(users);
  } catch (error) {
    res.status(400).json("Sorry something went wrong. Users not found");
  }
});
/**
 ** @desc    deletes all users
 ** @route   DELETES /api/auth
 ** @access  Public TODO: should be private
 */
const deletesAllUsers = asyncHandler(async (req, res) => {
  try {
    await User.deleteMany({});

    res.status(200).json("Users deleted");
  } catch (error) {
    res.status(400).json("Sorry something went wrong. Can't delete all users");
  }
});

module.exports = {
  login,
  register,
  getUser,
  getUsers,
  deletesAllUsers,
};
