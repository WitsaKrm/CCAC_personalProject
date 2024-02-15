const createError = require("../utils/createError");
const prisma = require("../config/prisma");
const bcrypt = require("bcryptjs");
const userService = require("../services/user-serevice");
const jwt = require("jsonwebtoken");
const GenerateAuthToken = require("../middlewares/generateAuthToken");

const register = async (req, res, next) => {
  try {
    const body = req.body;
    console.log(body.password);

    if (!body.email) {
      return createError(400, "Email are required");
    } else if (!body.password) {
      return createError(400, "Password are required");
    } else if (!body.username) {
      return createError(400, "Username are required");
    }

    if (
      typeof body.email !== "string" ||
      typeof body.password !== "string" ||
      typeof body.username !== "string"
    ) {
      return createError(400, "Email/Username and Password is invalid");
    }

    // Fetch user by email and username
    const isUserEmailExist = await userService.getUserByEmail(body.email);
    const isUserUsernameExist = await userService.getUserByUsername(
      body.username
    );

    // Check if the user exists
    if (isUserEmailExist) {
      return createError(400, "This Email is already exist");
    } else if (isUserUsernameExist) {
      return createError(400, "This Username is already exist");
    }
    const hashedPassword = await bcrypt.hash(body.password, 10);
    console.log(hashedPassword);
    await userService.createUser({
      f_name: body.f_name,
      l_name: body.l_name,
      n_name: body.n_name,
      address: body.address,
      phone: body.phone,
      email: body.email,
      username: body.username,
      password: hashedPassword,
      date_of_birth: body.date_of_birth,
      gender: body.gender,
    });
    res.status(201).json({ message: "Registration successful" });
  } catch (err) {
    next(err);
  }
};

const login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    console.log(req.body);
    if (!username || !password) {
      return createError(400, "Username and Password are required");
    }

    if (typeof username !== "string" || typeof password !== "string") {
      return createError(400, "Username or Password is invalid");
    }

    const isUserExist = await userService.getUserByUsername(username);
    if (!isUserExist) {
      console.log("username");
      return createError(400, "Username or Password is invalid");
    }
    const isPasswordMatch = await bcrypt.compare(
      password,
      isUserExist.password
    );
    if (!isPasswordMatch) {
      return createError(400, "Username or password is invalid");
    }

    const token = GenerateAuthToken({ id: isUserExist.id });
    console.log(token, "98");
    res.json({ token: token, message: "Login successful" });
  } catch (err) {
    next(err, "123456");
  }
};

module.exports = {
  register,
  login,
};
