const express = require("express");
const {
  bookAppointment,
  cancelAppointment,
  getAppointments,
  getAppointmentsByUser,
} = require("../controllers/appointmentController");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/book", bookAppointment);
router.post("/cancel", cancelAppointment);
router.get("/", getAppointments);
router.get("/:userId", getAppointmentsByUser);

module.exports = router;
