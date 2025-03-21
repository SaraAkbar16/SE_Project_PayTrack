import React, { useState } from "react";
import "./salarySlip.css"; // Page-specific styles
import EmployeeLayout from "../../components/EmployeeLayout";


const DisplaySalarySlips = () => {
  return (
    <EmployeeLayout>
    <div className="salary-details">
      <div className="receipt-header">
        <h1>RECEIPT No.</h1>
        <h2>020121</h2>
      </div>
      
      <div className="receipt-body">
        <div className="receipt-row">
        <p><strong>Date:</strong> <input type="text" value="14-03-2024" name="leaveDate"/></p>

          <p><strong>Amount:</strong> $10,231</p>
        </div>
        <div className="receipt-row">
          <p><strong>From:</strong> Rio.co</p>
          <p><strong>Payment For:</strong> Monthly Salary</p>
        </div>
        <div className="receipt-row">
          <p><strong>Account:</strong><input type="text" value="031928176183 " readonly/> </p>
          <p><strong>Generated On:</strong><input type="text" value="14-03-2024" readonly/></p>
        </div>
        <div className="receipt-row">
          <p><strong>Deductions:</strong> <input type="text" value="1000" readonly></input></p>
          <p><strong>Tax Rate:</strong> 5%</p>
        </div>
        <div className="receipt-row">
          <p><strong>Leaves:</strong><input type="text" value="10" readonly/></p>
          
        </div>
        <div className="receipt-row">
          <h2 ><strong>Total</strong> 10</h2>
        </div>
      </div>
    </div>
    </EmployeeLayout>
  
  );
};

export default DisplaySalarySlips;
