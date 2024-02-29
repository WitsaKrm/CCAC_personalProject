import React, { useState, useEffect } from "react";
import endpoint from "../services/axios";
import Header from "../components/header-component";
// import "./Guest.css"; // Import your CSS file

export default function Guest() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await endpoint.get("/API/rooms");
        console.log(response.data);
        setRooms(response.data);
      } catch (error) {
        console.error("Error fetching rooms:", error);
      }
    };
    fetchRooms();
  }, []);

  return (
    <>
      <Header
        page={`guest`}
        links={[
          { label: "register", url: "/register" },
          { label: "login", url: "/login" },
        ]}
      />
      <div className="bg-gray-100 min-h-screen mx-auto">
        <div className="container mx-auto p-4">
          <h1 className="text-2xl text-gray-500 font-bold mb-8">
            {`rooms`.toUpperCase()}
          </h1>

          <div className="grid sx:grid-cols-2  sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 justify-center items-center mx-8 max-w-full ">
            {rooms.map((room) => (
              <div
                key={room.id}
                className={`p-4 rounded-md shadow-md ${
                  room.status === "available"
                    ? "bg-white hover:text-green-400 cursor-pointer hover:bg-green-100"
                    : "bg-gray-200 hover:bg-red-200" 
                }`}
              >
                <h2 className="text-xl text-gray-500 font-semibold mb-4">
                  {room.room_number}
                </h2>
                <p className='text-sm text-gray-700 truncate '>
                  This is some content for room {room.room_number}. Lorem ipsum
                  dolor sit amet. Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit. Quam, culpa?
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
