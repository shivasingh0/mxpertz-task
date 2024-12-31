import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";

const BookAppointment = ({ user }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [phone, setPhone] = useState("");
  const [userId, setUserId] = useState(user._id);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        "http://localhost:8000/api/appointments/book",
        {
          name,
          email,
          time,
          date,
          phone,
          userId,
        }
      );
      console.log(data);
      setName("");
      setEmail("");
      setTime("");
      setDate("");
      setPhone("");

      toast.success("Appointment booked successfully.");
      window.location.reload();
    } catch (error) {
      console.error("An error occurred. Please try again.");
    }
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-4 mx-[20%] mt-5">
      <div className="flex flex-col">
        <label className="block">
          Name
          <input
            type="text"
            className="border p-2 w-full"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label className="block">
          Email
          <input
            type="email"
            className="border p-2 w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label className="block">
          Phone
          <input
            type="number"
            className="border p-2 w-full"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </label>
        <label className="block">
          Time
          <input
            type="time"
            className="border p-2 w-full"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </label>
        <label className="block">
          Date
          <input
            type="date"
            className="border p-2 w-full"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </label>
        <button type="submit" className="bg-indigo-600 p-2 mt-3 text-white">
          Book
        </button>
      </div>
    </form>
  );
};

export default BookAppointment;
