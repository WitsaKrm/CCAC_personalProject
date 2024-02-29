const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcryptjs");
const prisma = new PrismaClient();

const pwd = bcrypt.hashSync("Krm-4421");
const userData = [
  {
    f_name: "witsarut",
    l_name: "sanongphun",
    n_name: "KRM",
    address: "165 หมู่4 ต.โพธิ์ทอง อ.เสลภูมิ จ.ร้อยเอ็ด 45120",
    phone: "0962231700",
    email: "witsarut.sx@gmail.com",
    username: "witsaKrm",
    password: pwd,
    date_of_birth: "03/07/2000",
    gender: "MALE",
    role: "ADMIN",
  },
];

const run = async () => {
  try {
    await prisma.users.createMany({
      data: userData,
    });
    console.log("User created successfully.");
  } catch (error) {
    if (
      error.code === 'P2002' &&
      error.meta?.target === 'Users_email_key'
    ) {
      console.error(
        `Skipping user creation due to duplicate email: ${error.meta.modelName}`
      );
    } else {
      console.error("Error creating user:", error);
    }
  } finally {
    await prisma.$disconnect();
  }
};

run();
