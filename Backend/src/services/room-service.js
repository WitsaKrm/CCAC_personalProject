const prisma = require("../config/prisma");

exports.getRooms = async () => {
  try {
    const rooms = await prisma.rooms.findMany();
    console.log(rooms);
    return rooms;
  } catch (error) {
    console.log(error + "123");
    throw error;
  }
};
exports.getRoomByUid = (id) => {
  return prisma.rooms.findFirst({
    where: {
      id,
    },
  });
};

exports.createBillService = async (data) => {
  try {
    const newBill = await prisma.bills.create({
      data: {
        room: {
          connect: {
            id: data.room_id,
          },
        },
        user: {
          connect: {
            id: data.user_id,
          },
        },
        other: data.other,
        total: data.total,
        room_price: data.room_price,
        water_unit_before: data.water_unit_before,
        water_unit_after: data.water_unit_after,
        electric_unit_before: data.electric_unit_before,
        electric_unit_after: data.electric_unit_after,
        status: "UNPAID",
      },
    });

    console.log("New Bill:", newBill);
    return newBill;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

exports.getBills = async () => {
  try {
    const userId = 3;
    const bills = await prisma.bills.findMany({
      where: {
        user_id: userId,
      },
      select: {
        id: true,
        // room_price: true,
        water_unit_before: true,
        // water_unit_after: true,
        electric_unit_before: true,
        // electric_unit_after: true,
        // status: true,
        // other: true,
        // total: true,
        user: {
          select: {
            id: true,
            f_name: true,
            l_name: true,
            // Add other user fields you want to include
          },
        },
        room: {
          select: {
            id: true,
            room_number: true,
            price_per_month: true,
            // Add other room fields you want to include
          },
        },
      },
    });

    console.log(bills);
  } catch (error) {
    console.error(error);
    // Handle the error accordingly, e.g., return an error response
  }
};

