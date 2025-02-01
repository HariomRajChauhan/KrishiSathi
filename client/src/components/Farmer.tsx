import React, { useState } from "react";

export default function FarmerApp() {
  // State to manage Farmer's details
  const [farmerDetails, setFarmerDetails] = useState({
    name: "",
    contact: "",
    farmSize: "",
    location: "",
    cropYieldTime: "",
    cropCutDownTime: "",
  });

  // State to manage Income and Expenses
  const [incomeExpenses, setIncomeExpenses] = useState({
    income: 0,
    expenses: 0,
    profit: 0,
  });

  // Handling change for farmer details input
  const handleFarmerDetailsChange = (e) => {
    const { name, value } = e.target;
    setFarmerDetails({ ...farmerDetails, [name]: value });
  };

  // Handling change for income/expenses input
  const handleIncomeExpensesChange = (e) => {
    const { name, value } = e.target;
    setIncomeExpenses({ ...incomeExpenses, [name]: parseFloat(value) || 0 });
  };

  // Calculating Profit (Income - Expenses)
  const calculateProfit = () => {
    const profit = incomeExpenses.income - incomeExpenses.expenses;
    setIncomeExpenses({ ...incomeExpenses, profit });
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Farmer Details</h2>
      {/* Farmer Details Form */}
      <div className="space-y-4">
        <div>
          <label className="block font-medium">Farmer Name</label>
          <input
            type="text"
            name="name"
            value={farmerDetails.name}
            onChange={handleFarmerDetailsChange}
            className="w-full p-2 border rounded"
            placeholder="Enter Farmer's Name"
          />
        </div>
        <div>
          <label className="block font-medium">Contact</label>
          <input
            type="text"
            name="contact"
            value={farmerDetails.contact}
            onChange={handleFarmerDetailsChange}
            className="w-full p-2 border rounded"
            placeholder="Enter Contact Number"
          />
        </div>
        <div>
          <label className="block font-medium">Farm Size</label>
          <input
            type="text"
            name="farmSize"
            value={farmerDetails.farmSize}
            onChange={handleFarmerDetailsChange}
            className="w-full p-2 border rounded"
            placeholder="Enter Farm Size"
          />
        </div>
        <div>
          <label className="block font-medium">Location</label>
          <input
            type="text"
            name="location"
            value={farmerDetails.location}
            onChange={handleFarmerDetailsChange}
            className="w-full p-2 border rounded"
            placeholder="Enter Location"
          />
        </div>
        <div>
          <label className="block font-medium">Crop Yield Time</label>
          <input
            type="text"
            name="cropYieldTime"
            value={farmerDetails.cropYieldTime}
            onChange={handleFarmerDetailsChange}
            className="w-full p-2 border rounded"
            placeholder="Enter Crop Yield Time"
          />
        </div>
        <div>
          <label className="block font-medium">Crop Cut-Down Time</label>
          <input
            type="text"
            name="cropCutDownTime"
            value={farmerDetails.cropCutDownTime}
            onChange={handleFarmerDetailsChange}
            className="w-full p-2 border rounded"
            placeholder="Enter Crop Cut-Down Time"
          />
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Income and Expenses Tracker</h2>
      {/* Income and Expenses Form */}
      <div className="space-y-4">
        <div>
          <label className="block font-medium">Income</label>
          <input
            type="number"
            name="income"
            value={incomeExpenses.income || ""}
            onChange={handleIncomeExpensesChange}
            className="w-full p-2 border rounded"
            placeholder="Enter Total Income"
          />
        </div>
        <div>
          <label className="block font-medium">Expenses</label>
          <input
            type="number"
            name="expenses"
            value={incomeExpenses.expenses || ""}
            onChange={handleIncomeExpensesChange}
            className="w-full p-2 border rounded"
            placeholder="Enter Total Expenses"
          />
        </div>
        <div>
          <button
            onClick={calculateProfit}
            className="w-full p-2 bg-green-600 text-white rounded"
          >
            Calculate Profit
          </button>
        </div>
        <div>
          <p className="font-medium">Profit: {incomeExpenses.profit}</p>
        </div>
      </div>

      {/* Display Farmer Details */}
      {farmerDetails.name && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-2">Farmer's Details Summary:</h2>
          <ul className="list-disc pl-5">
            <li>Name: {farmerDetails.name}</li>
            <li>Contact: {farmerDetails.contact}</li>
            <li>Farm Size: {farmerDetails.farmSize}</li>
            <li>Location: {farmerDetails.location}</li>
            <li>Crop Yield Time: {farmerDetails.cropYieldTime}</li>
            <li>Crop Cut-Down Time: {farmerDetails.cropCutDownTime}</li>
          </ul>
        </div>
      )}
    </div>
  );
}