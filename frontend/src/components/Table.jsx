import axios from "axios";
import React, { useEffect, useState } from "react";

const Table = () => {
    const [data, setData] = useState([]);
  const fetchAppointments = async () => {
    try {
      const {data} = await axios.get("http://localhost:8000/api/appointments");
      // convert time
    //   console.log(data.appointments);
    //   const date = new Date().getTime(
    //     data.appointments[0].time
    //   );
    //   console.log(date);
        setData(data.appointments);
        
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
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full">
              <thead className="bg-white border-b">
                <tr>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    S.No.
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Email
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Phone
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Date
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Time
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((appointment, index) => (
                    <tr key={index}>
                        <td className="whitespace-nowrap py-4 px-6 text-sm font-medium text-gray-900">
                            {index + 1}
                        </td>
                        <td className="whitespace-nowrap capitalize py-4 px-6 text-sm font-medium text-gray-900">
                            {appointment.name}
                        </td>
                        <td className="whitespace-nowrap py-4 px-6 text-sm font-medium text-gray-900">
                            {appointment.email}
                        </td>
                        <td className="whitespace-nowrap py-4 px-6 text-sm font-medium text-gray-900">
                            {appointment.phone}
                        </td>
                        <td className="whitespace-nowrap py-4 px-6 text-sm font-medium text-gray-900">
                            {appointment.date}
                        </td>
                        <td className="whitespace-nowrap py-4 px-6 text-sm font-medium text-gray-900">
                            {appointment.time}
                        </td>
                    </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
