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

    if (!body.email  ) {
      return createError(400, "Email are required");
    }else if(!body.password){
      return createError(400, "Password are required");
    }else if(!body.username){
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
    const isUserUsernameExist = await userService.getUserByUsername(body.username);

    // Check if the user exists
    if (isUserEmailExist ) {
      return createError(400, "This Email is already exist");
    }else if(isUserUsernameExist){
      return createError(400, "This Username is already exist");
    }
    const hashedPassword = await bcrypt.hash(body.password, 10);
console.log(hashedPassword);
    await userService.createUser({
      f_name:body.f_name,
      l_name:body.l_name,
      n_name:body.n_name,
      address:body.address,
      phone:body.phone,
      email:body.email,
      username:body.username,
      password:hashedPassword,
      date_of_birth:body.date_of_birth,
      gender:body.gender,}
    );
    res.status(201).json({ message: "Registration successful" });
  } catch (err) {
    next(err);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, username, password } = req.body;

    // Check for missing fields
    if (!email || !password || !username || !password) {
      return createError(400, "Email/Username and Password are required");
    }

    // Validate input types
    if (
      typeof email !== "string" ||
      typeof password !== "string" ||
      typeof username !== "string" ||
      typeof password !== "string"
    ) {
      return createError(400, "Email/Username or Password is invalid");
    }

    // Fetch user by email and username
    const isUserEmailExist = await userService.getUserByEmail(email);
    const isUserUsernameExist = await userService.getUserByUsername(username);

    // Check if the user exists
    if (!isUserEmailExist || !isUserUsernameExist) {
      return createError(400, "Email/Username or Password is invalid");
    }
    // Function to check password match
    const isPasswordMatch = async () => {
      const isPasswordMatchWithEmail = await bcrypt.compare(
        password,
        isUserEmailExist.password
      );
      const isPasswordMatchWithUsername = await bcrypt.compare(
        password,
        isUserUsernameExist.password
      );
      return isPasswordMatchWithEmail || isPasswordMatchWithUsername;
    };

    // Check if password matches
    if (!(await isPasswordMatch())) {
      return createError(400, "Email/Username or password is invalid");
    }
    GenerateAuthToken({
      id: isUserEmailExist
        ? isUserEmailExist.id
        : isUserUsernameExist
        ? isUserUsernameExist.id
        : null,
    });
    // const token = jwt.sign({ id: isUserExist.id }, process.env.JWT_SECRET_KEY, {
    //   expiresIn: process.env.JWT_EXPIRES_IN,
    // });
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
