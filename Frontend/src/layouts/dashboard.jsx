import React, { useState, useEffect } from "react";
import endpoint from "../services/axios";
import Header from "../components/header-component";
import RoomComponent from "../components/rooms-components";
import PaymentComponent from "./../components/payment-component";
import RegistrationComponent from "../components/registration-conponent";
import MessageComponent from "../components/message-component";
import TenantInfoComponent from "../components/tenantinfo-component";

export default function DashBoard() {
  const [activeItem, setActiveItem] = useState("ห้องพัก");
  const [rooms, setRooms] = useState([]);
  const dataComponent = {
    rooms,
  };
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
  const data = [
    { name: "ห้องพัก", component: RoomComponent },
    { name: "ข้อมูลการชำระเงิน", component: PaymentComponent },
    { name: "ลงทะเบียนผู้เช่า", component: RegistrationComponent },
    { name: "ข้อมูลผู้เช่า", component: TenantInfoComponent },
    { name: "ข้อความ", component: MessageComponent },
  ];

  const handleItemClick = (itemName) => {
    console.log(itemName);
    setActiveItem(itemName);
  };
  const ComponentToShow = ({ component: Component }) => (
    <div className="bg-gray-400 text-black p-4  rounded shadow">
      <Component data={dataComponent} />
    </div>
  );
  return (
    <>
      <Header
        page={`dashboard`}
        links={[
          { label: "dashboard", url: "/dashboard" },
          { label: "register", url: "/register" },
          { label: "login", url: "/login" },
        ]}
      />
      <div className="min-h-full">
        <div className="text-center mb-4 ">
          <ul className="menu menu-horizontal bg-gray-200 rounded-box text-black text-bold">
            {data.map((itemName, idx) => (
              <li key={idx}>
                <a
                  className={`${
                    activeItem === itemName.name
                      ? "active:text-red-500 bg-white rounded-box hover:bg-gray-300"
                      : "hover:bg-gray-300"
                  }`}
                  onClick={() => handleItemClick(itemName.name)}
                >
                  {itemName.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="container mx-auto p-4 bg-gray-300 min-h-full rounded-xl ">
          {data.map(
            (itemName, idx) =>
              activeItem === itemName.name && (
                <ComponentToShow key={idx} component={itemName.component} />
              )
          )}
        </div>
      </div>
    </>
  );
}
