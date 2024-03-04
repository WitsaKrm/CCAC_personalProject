const express = require("express");
const router = express.Router();
const roomController = require("../controllers/room-controller");
// const userController = require("../controllers/user-controller");

///// rooms /////
router.get("/rooms", roomController.getAllRooms);
// router.post("/rooms", roomController.createRoom);
// router.put("/rooms/:id", roomController.updateRoom);
// router.delete("/rooms/:id", roomController.deleteRoom);

// ///// users /////
// router.get("/users", userController.getAllUsers);
// router.post("/users", userController.createUser);
// router.put("/users/:id", userController.updateUser);
// router.delete("/users/:id", userController.deleteUser);

// ///// bills /////
router.get("/bills", roomController.getAllBills);
router.post("/create-bill", roomController.createBill);
// router.put("/bills/:id", billController.updateBill);
// router.delete("/bills/:id", billController.deleteBill);

module.exports = router;
