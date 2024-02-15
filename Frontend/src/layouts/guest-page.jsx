import React, { useState, useEffect } from "react";
import endpoint from "../services/axios";
import Header from "../components/header-component";

export default function Guest() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await endpoint.get("/guest/rooms");
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
      <div className="bg-gray-100 min-h-screen">
        <div className="container mx-auto p-4">
          <h1 className="text-2xl text-gray-500 font-bold mb-8">
            {`rooms`.toUpperCase()}
          </h1>

          <div className="flex flex-wrap gap-4 justify-center items-center mx-8 ">
            {rooms.map((room) => (
              <div
                key={room.id}
                className={`p-4 rounded-md shadow-md sm:w-1/3 md:w-1/4 lg:w-1/6 ${
                  room.status === "available"
                    ? "bg-white hover:text-green-400 cursor-pointer"
                    : "bg-gray-200"
                }`}
              >
                <h2 className="text-xl text-gray-500 font-semibold mb-4">
                  {room.room_number}
                </h2>
                <p>This is some content for room {room.room_number}.</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
