const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcryptjs");
const prisma = new PrismaClient();

const pwd = bcrypt.hashSync("Admin123654");
const userData = [
  {
    f_name: "witsarut",
    l_name: "sanongphun",
    n_name: "KRM",
    address: "",
    phone: "0962231700",
    email: "witsarut.sx@gmail.com",
    // created_at: "",
    username: "witsaKrm",
    password: pwd,
    date_of_birth: "",
    gender: "MALE",
    role: "ADMIN",
  },
];

const run = async () => {
  await prisma.users.createMany({
    data: userData,
  });
};

run()
