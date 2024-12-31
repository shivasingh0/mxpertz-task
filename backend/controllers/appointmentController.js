const Appointment = require("../models/appointmentModel");

// book appointment
const bookAppointment = async (req, res) => {
  try {
    const { name, email, phone, date, time, userId } = req.body;

    if (!name || !email || !phone || !date || !time || !userId) {
      throw new Error("Please fill in all fields");
    }

  // check if appointment already exists
    const existingAppointment = await Appointment.findOne({ date, time });
    if (existingAppointment) {
      throw new Error("Appointment already exists");
    }

    const appointment = await Appointment.create({
      name,
      email,
      phone,
      date,
      time,
      userId,
    });

    if (!appointment) {
      throw new Error("Appointment not created");
    }

    res
      .status(201)
      .json({ message: "Appointment created successfully", appointment });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// cancel appointments
const cancelAppointment = async (req, res) => {
  try {
    const { appointmentId } = req.body;

    if (!appointmentId) {
      throw new Error("Appointment ID is required");
    }

    const appointment = await Appointment.findById(appointmentId);

    if (!appointment) {
      throw new Error("Appointment not found");
    }

    await Appointment.findByIdAndDelete(appointmentId);

    res.status(200).json({ message: "Appointment canceled successfully" });

  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// get all appointments
const getAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.status(200).json({ appointments });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// get appointments by user
const getAppointmentsByUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const appointments = await Appointment.find({ userId });
    res.status(200).json({ appointments });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { bookAppointment, cancelAppointment, getAppointments, getAppointmentsByUser };