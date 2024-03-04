import React, { useState, useEffect } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';
{/* <div>
<FontAwesomeIcon icon={faCheckSquare} />
<FontAwesomeIcon icon={faCoffee} />
</div> */}
export default function RoomComponent(props) {
  const [rooms, setRooms] = useState(props.data.rooms);
  console.log(props.data.rooms);
  const roomClick = () => {
    console.log(`roomClick`);
  };

  return (
    <>
      <div className=" min-h-screen mx-auto">
        <div className="container mx-auto p-4">
          <h1 className="text-2xl text-white font-bold mb-8">
            {`rooms`.toUpperCase() + ` component`}
          </h1>

          <div className="grid sx:grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 justify-center items-center mx-8 max-w-full ">
            {rooms.map((room) => (
              <div
                onClick={roomClick}
                key={room.id}
                className={`p-4 rounded-md shadow-md ${
                  room.status === "AVALIABLE"
                    ? "bg-white hover:text-green-400 cursor-pointer hover:bg-green-100 hover:shadow-green-300"
                    : room.status === "UNAVALIABLE"
                    ? "bg-red-100 hover:bg-red-200 border hover:border-red-200  shadow-lg  hover:shadow-red-400"
                    : " "
                }`}
              >
                <h2 className="text-xl text-gray-500 font-semibold mb-4">
                  {room.room_number}
                </h2>
                <p className="text-sm text-gray-700 truncate ">
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
