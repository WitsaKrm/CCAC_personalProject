const createError = require("../utils/createError");
const prisma = require("../config/prisma");
const bcrypt = require("bcryptjs");
const userService = require("../services/user-serevice");
const jwt = require("jsonwebtoken");

const register = async (req, res, next) => {
  try {
    const body = req.body;

    if (!body.email || !body.password) {
      return createError(400, "Email and password are required");
    }

    if (typeof body.email !== "string" || typeof body.password !== "string") {
      return createError(400, "Email or password is invalid");
    }

    const isUserExist = await userService.getUserByEmail(body.email);

    if (isUserExist) {
      return createError(400, "User already exist");
    }

    const hashedPassword = await bcrypt.hash(body.password, 10);

    await userService.createUser(
      body.email,
      hashedPassword,
      body.f_name,
      body.l_name,
      body.n_name,
      body.address,
      body.phone,
      body.gender,
      body.date_of_birth
    );

    res.json({ message: "register success" });
  } catch (err) {
    next(err);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return createError(400, "Email and password are required");
    }

    if (typeof email !== "string" || typeof password !== "string") {
      return createError(400, "Email or password is invalid");
    }

    const isUserExist = await userService.getUserByEmail(email);

    if (!isUserExist) {
      return createError(400, "Email or password is invalid");
    }

    const isPasswordMatch = bcrypt.compare(password, isUserExist.password);

    if (!isPasswordMatch) {
      return createError(400, "Email or password is invalid");
    }

    const token = jwt.sign({ id: isUserExist.id }, process.env.JWT_SECRET_KEY, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });
    console.log(token);
    res.json({ token });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  register,
  login,
};
