import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const UserAppointment = ({ user }) => {
  const [appointments, setAppointments] = useState([]);

  const fetchAppointments = async () => {
    const userId = user._id;
    try {
      const { data } = await axios.get(
        `http://localhost:8000/api/appointments/${userId}`
      );
      console.log(data.appointments);
      setAppointments(data.appointments);
    } catch (error) {
      console.error("An error occurred. Please try again.");
    }
  };

  const cancelAppointment = async (id) => {
    try {
      const { data } = await axios.post(
        "http://localhost:8000/api/appointments/cancel",
        { appointmentId: id }
      );
      console.log(data);
      toast.success("Appointment cancelled successfully.");
      fetchAppointments(); // Refresh appointments after cancellation
    } catch (error) {
      console.error("An error occurred. Please try again.");
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
        {appointments.length > 0 ? (
          appointments.map((appointment, index) => (
            <table className="min-w-full mt-5" key={index}>
              <thead>
                <tr>
                  <th className="text-left text-sm font-medium text-gray-900 px-6 py-4">
                    Time
                  </th>
                  <th className="text-left text-sm font-medium text-gray-900 px-6 py-4">
                    Date
                  </th>
                  <th className="text-left text-sm font-medium text-gray-900 px-6 py-4">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b">
                  <td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
                    {appointment.time}
                  </td>
                  <td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
                    {appointment.date}
                  </td>
                  <td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
                    <button
                      onClick={() => cancelAppointment(appointment._id)}
                      className="bg-red-600 text-white py-2 px-5 rounded-lg hover:bg-red-900"
                    >
                      Cancel Appointment
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          ))
        ) : (
          <p className="text-center text-gray-700 mt-4">No appointments found.</p>
        )}
      </div>
    </div>
  );
};

export default UserAppointment;

