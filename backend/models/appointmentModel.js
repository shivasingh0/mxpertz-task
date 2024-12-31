const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
  }
);

const Appointment = mongoose.model("Appointment", appointmentSchema);
module.exports = Appointment;