const prisma = require("../config/prisma");

const getUserById = (id) => {
  return prisma.user.findFirst({
    where: {
      id,
    },
  });
};

const getUserByEmail = (email) => {
  return prisma.user.findFirst({
    where: {
      email,
    },
  });
};

const createUser = (email, password) => {
  return prisma.user.create({
    data: {
      email,
      password,
    },
  });
};

module.exports = {
  getUserByEmail,
  getUserById,
  createUser,
};
