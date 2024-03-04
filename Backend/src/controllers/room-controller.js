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

exports.createBill = async (req, res, next) => {
  console.log("Create Bill");
  try {
    const data = req.body;
    console.log("incontroll : " + data);
    const bill = await roomService.createBillService(data);
    res.status(200).json({ message: 'Bill created successfully', bill });
  } catch (error) {
    next(error);
  }
};

exports.getAllBills =async (req, res, next) =>{
  try {
   const bills = await roomService.getBills()
   res.status(200).json({ message: 'get bill success', bills });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching bills' });
  }
}


