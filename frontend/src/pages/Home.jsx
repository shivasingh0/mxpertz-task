import React from "react";
import Table from "../components/Table";
import toast from "react-hot-toast";
import BookAppointment from "../components/BookAppointment";
import UserAppointment from "../components/UserAppointment";

const Home = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/";
    toast.success("Logged out successfully.");
  };
  return (
    <>
      {user.isDoctor === true ? (
        <div className="mt-5">
          <div className="flex justify-between mx-10">
          <h1 className="text-3xl text-center font-bold">Welcome Dr. {user.name}</h1>
          <button onClick={handleLogout} className="bg-red-600 text-white py-2 px-5 rounded-lg hover:bg-red-900">Logout</button>
          </div>
          <Table />
        </div>
      ) : (
        <div className="mt-5">
          <div className="flex justify-between mx-10">
          <h1 className="text-3xl text-center font-bold">Welcome Dr. {user.name}</h1>
          <button onClick={handleLogout} className="bg-red-600 text-white py-2 px-5 rounded-lg hover:bg-red-900">Logout</button>
          </div>
          <BookAppointment user={user} />
          <UserAppointment user={user} />
        </div>
      )}
    </>
  );
};

export default Home;
