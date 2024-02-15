const prisma = require("../config/prisma");

exports.getRooms = async () => {
    try {
      const rooms = await prisma.rooms.findMany();
      console.log(rooms);
      return rooms;
    } catch (error) {
        console.log(error+'123');
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