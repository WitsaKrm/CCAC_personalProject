const prisma = require("../config/prisma");

exports.getUserById = (id) => {
  return prisma.users.findFirst({
    where: {
      id,
    },
  });
};

exports.getUserByEmail = (email) => {
  return prisma.users.findFirst({
    where: {
      email,
    },
  });
};
exports.getUserByUsername = (username) => {
  return prisma.users.findFirst({
    where: {
      username,
    },
  });
};

exports.createUser = async (
  data
) => {
  try {
    console.log(data.phone);

    const createdUser = await prisma.users.create({
      data: {
        f_name: data.f_name,
        l_name: data.l_name,
        n_name: data.n_name,
        address: data.address,
        phone: data.phone,
        email: data.email,
        username: data.username,
        password: data.password,
        date_of_birth: data.date_of_birth,
        gender: data.gender,
      },
    });

    return createdUser;
  } catch (error) {
    console.error("Error creating user:", error.message);
    throw new Error("User creation failed");
  }
};
