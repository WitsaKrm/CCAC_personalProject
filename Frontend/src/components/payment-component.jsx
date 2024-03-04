import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faPlus } from "@fortawesome/free-solid-svg-icons";

export default function PaymentComponent() {
  const [showDetails, setShowDetails] = useState(false);
  const addBill = () => {
    console.log("addBill Click");
  };
  const billClick = () => {
    console.log("Bill Click");
    setShowDetails(!showDetails);
  };
  return (
    <>
      <div className=" min-h-screen mx-auto">
        <div className="container mx-auto p-4">
          <div className="flex justify-between">
            <h1 className="text-2xl text-white font-bold mb-4">
              PaymentComponent
            </h1>
            <div
              className="addBill bg-white flex justify-center items-center rounded-md mx-4 mb-2 px-2 cursor-pointer hover:bg-gray-200"
              onClick={addBill}
            >
              <FontAwesomeIcon icon={faPlus} className="px-4 font-bold  " />
              <p>Add bill</p>
            </div>
          </div>
          <div className="payment ">
            <div
              className=" m-2 p-4 bg-white rounded-xl flex flex-wrap justify-between hover:cursor-pointer hover:bg-gray-200"
              onClick={billClick}
            >
              <div className="detail flex flex-row justify-start space-x-8">
                <p>ห้อง 101</p> {/* select userid */}
                <p>นายพัก ดี</p>
                <p>087-1234567</p>
                <p>TENANT</p> {/* select roomid */}
                <p>ค่าเช่ารายเดือน</p> {/* other */}
              </div>
              <div></div>
              <div className="flex flex-row space-x-8">
                <div className="status justify-start flex mx-8 bg-green-300/50 rounded-md px-2">
                  PAID
                </div>
                <div className="price">1,230</div>
                <FontAwesomeIcon icon={faCaretDown} className=" px-4" />
              </div>
            </div>

            {showDetails && (
              <div className="details-container p-4 mt-1 mb-6 mx-4 bg-red-500 h-fit">
                {/* Your additional details go here */}
                <p>Additional details go here...</p>
              </div>
            )}
            <div className=" m-2 p-4 bg-white rounded-xl flex flex-wrap justify-between">
              <div className="detail flex flex-row justify-start space-x-8 ">
                <p>ห้อง 102</p> {/* select userid */}
                <p>Witsarut Sanongphun</p>
                <p>087-1234567</p>
                <p>TENANT</p> {/* select roomid */}
                <p>ค่าเช่ารายเดือน</p> {/* other */}
              </div>
              <div></div>
              <div className="flex flex-row space-x-8">
                <div className="status justify-start flex mx-8 bg-yellow-400/50 rounded-md px-2">
                  CHECKING
                </div>
                <div className="price">1,230</div>
                <FontAwesomeIcon icon={faCaretDown} className=" px-4" />
              </div>
            </div>
            <div className=" m-2 p-4 bg-white rounded-xl flex flex-wrap justify-between">
              <div className="detail flex flex-row justify-start space-x-8 ">
                <p>ห้อง 103</p> {/* select userid */}
                <p>Test Testo</p>
                <p>087-1234567</p>
                <p>TENANT</p> {/* select roomid */}
                <p>ค่าเช่ารายเดือน</p> {/* other */}
              </div>
              <div></div>
              <div className="flex flex-row space-x-8">
                <div className="status justify-start flex mx-8 bg-red-400/50 rounded-md px-2">
                  UNPAID
                </div>
                <div className="price">1,230</div>
                <FontAwesomeIcon icon={faCaretDown} className=" px-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {showDetails && (
        <div className="details-container">
          {/* Your additional details go here */}
          <p>Additional details go here...</p>
        </div>
      )}
    </>
  );
}
