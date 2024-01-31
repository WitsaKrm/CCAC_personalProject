const prisma = require('../config/prisma')

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

exports.createUser = async (email, password, f_name, l_name, n_name, address, phone, gender, date_of_birth) => {
  try {
    const createdUser = await prisma.users.create({
      data: {
        email,
        password,
        f_name,
        l_name,
        n_name,
        address,
        phone,
        gender,
        date_of_birth,
      },
    });

    return createdUser;
  } catch (error) {
    console.error("Error creating user:", error.message);
    throw new Error("User creation failed");
  }
};



