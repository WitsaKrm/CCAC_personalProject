const createError = require("../utils/createError");
const roomService = require("../services/room-service");


exports.getAllRooms = async (req, res, next) => {
    try {
      const rooms = await roomService.getRooms();
      console.log(rooms);
      res.json(rooms);
    } catch (error) {
      next(error);
    }
  };