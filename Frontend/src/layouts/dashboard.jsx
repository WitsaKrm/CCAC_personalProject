import React, { useState } from "react";
import Header from "../components/header-component";
import RoomComponent from "../components/rooms-components"
import PaymentComponent from './../components/payment-component';
import RegistrationComponent from "../components/registration-conponent";
import MessageComponent from "../components/message-component";
import TenantInfoComponent from "../components/tenantinfo-component";
const ComponentToShow = ({ component: Component }) => (
  <div className="bg-white p-4 mb-4 rounded shadow">
    <Component />
  </div>
);

export default function DashBoard() {
  const [activeItem, setActiveItem] = useState("ห้องพัก");

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
      <div className="text-center mb-4">
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
      <div className="container mx-auto p-4 bg-gray-100 min-h-screen">
        {data.map(
          (itemName, idx) =>
            activeItem === itemName.name && (
              <ComponentToShow key={idx} component={itemName.component} />
            )
        )}
      </div>
    </>
  );
}
