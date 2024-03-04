import React, { useState } from "react";

const CreateBillForm = () => {
  const [formData, setFormData] = useState({
    room_price: 0,
    water_unit_before: 500,
    water_unit_after: 0,
    electric_unit_before: 1000,
    electric_unit_after: 0,
    status: "UNPAID",
    other: "",
    total: "",
    user_id: "",
    room_id: "",
  });
  // const [eUnit, setEUnit] = useState(0);
  // const [wUnit, setWUnit] = useState(0);
  const [ePrice, setEPrice] = useState(0);
  const [wPrice, setWPrice] = useState(0);
  const [oPrice, setOPrice] = useState(0);

  const handleChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };
  const af_electric_unit = (e) => {
    console.log("Electric unit after changed:", e.target.value);
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
    const unit = parseInt(e.target.value) - formData.electric_unit_before;
    // setEUnit(unit);
    setEPrice(unit * 9);
  };
  const af_water_unit = (e) => {
    console.log("Water unit after changed:", e.target.value);
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
    const unit = parseInt(e.target.value) - formData.water_unit_before;
    // setWUnit(unit);
    setWPrice(unit * 25);
  };
  const price = (e) => {
    console.log("Price changed:", e.target.value);
    const newValue = Math.max(0, parseInt(e.target.value, 10));
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
    const price = newValue;
    // setWUnit(unit);
    setOPrice(price);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto mt-8 p-4 bg-white rounded shadow-lg mb-8"
    >
      <h2 className="text-2xl font-bold mb-4">Create Bill</h2>

      <div className="mb-4">
        <label
          htmlFor="room_id"
          className="block text-sm font-medium text-gray-600"
        >
          Room Number
        </label>
        <select
          id="room_id"
          name="room_id"
          value={formData.room_id}
          onChange={handleChange}
          className="block w-full px-4 py-2 mt-2 text-green-700 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
          required
        >
          <option value="">Select Room</option>
          <option value="MALE">MALE</option>
          <option value="FEMALE">FEMALE</option>
        </select>
      </div>

      <div className="flex">
        <>
          <div className="mb-4 mr-4">
            <label
              htmlFor="electric_unit_before"
              className="block text-sm font-medium text-gray-600"
            >
              Electric Unit Before :
            </label>
            <input
              type="number"
              id="electric_unit_before"
              name="electric_unit_before"
              value={formData.electric_unit_before}
              onChange={handleChange}
              className="mt-1 p-2 w-full border font-bold  rounded-md border-green-400 ring-green-300 outline-none ring ring-opacity-40"
              // required
              disabled
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="electric_unit_after"
              className="block text-sm font-medium text-gray-600"
            >
              Electric Unit After :
            </label>
            <input
              type="number"
              id="electric_unit_after"
              name="electric_unit_after"
              value={formData.electric_unit_after}
              onChange={af_electric_unit}
              className="mt-1 p-2 w-full border  border-gray-300 rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
              required
            />
          </div>
        </>
      </div>

      <div className="flex">
        <>
          <div className="mb-4 mr-4">
            <label
              htmlFor="water_unit_before"
              className="block text-sm font-medium text-gray-600"
            >
              Water Unit Before :
            </label>
            <input
              type="number"
              id="water_unit_before"
              name="water_unit_before"
              value={formData.water_unit_before}
              onChange={handleChange}
              className="mt-1 p-2 w-full border font-bold  rounded-md border-green-400 ring-green-300 outline-none ring ring-opacity-40"
              // required
              disabled
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="water_unit_after"
              className="block text-sm font-medium text-gray-600"
            >
              Water Unit After :
            </label>
            <input
              type="number"
              id="water_unit_after"
              name="water_unit_after"
              value={formData.water_unit_after}
              onChange={af_water_unit}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
              required
            />
          </div>
        </>
      </div>
      <div className="flex">
        <div className="mb-4 mr-4">
          <label
            htmlFor="other"
            className="block text-sm font-medium text-gray-600"
          >
            Description :
          </label>
          {/* <input
            type="text"
            id="other"
            name="other"
            value={formData.other}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
            required
          /> */}
          <select
            id="other"
            name="other"
            value={formData.other}
            onChange={handleChange}
            className="block w-full p-2 mt-1 text-green-700 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
            required
          >
            <option value="">Expenses List</option>
            <option value="ค่าเช่ารายเดือน">ค่าเช่ารายเดือน</option>
            <option value="ค่ามัดจำ">ค่ามัดจำ</option>
            <option value="ค่าความเสียหาย">ค่าความเสียหาย</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            htmlFor="price"
            className="block text-sm font-medium text-gray-600"
          >
            Price :
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.other}
            onChange={price}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
            required
          />
        </div>
      </div>

      <div className="mb-4 px-4">
        <div className="flex justify-between">
          <div className="title">
            <p>Room Price</p>
          </div>
          <div className="price">
            <p>
              <span className="text-red-500 mr-2">{oPrice}</span> ฿
            </p>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="title">
            <p>Electric Units : 9฿ per unit</p>
          </div>
          <div className="price">
            <p>
              <span className="text-red-500 mr-2">{ePrice}</span> ฿
            </p>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="title">
            <p>Water Units : 25฿ per unit</p>
          </div>
          <div className="price">
            <p>
              <span className="text-red-500 mr-2">{wPrice}</span> ฿
            </p>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="title">
            <p>Total Amount</p>
          </div>
          <div className="price">
            <p>
              <span className="text-red-500 mr-2">{`${
                ePrice + wPrice + oPrice
              }`}</span>
              ฿
            </p>
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <div className="flex  justify-center">
        <button
          type="submit"
          className="bg-green-400 text-white p-2 rounded-md hover:bg-green-600 "
        >
          Create Bill
        </button>
      </div>
    </form>
  );
};

export default CreateBillForm;
