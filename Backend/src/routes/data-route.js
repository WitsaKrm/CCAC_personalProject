const express = require("express");
const router = express.Router();
const roomController = require("../controllers/room-controller");

///// rooms /////
router.get("/rooms", roomController.getAllRooms);
router.post("/rooms", roomController.getAllRooms);
router.put("/rooms/:id", roomController.getAllRooms);
router.delete("/rooms/:id", roomController.getAllRooms);
module.exports = router;