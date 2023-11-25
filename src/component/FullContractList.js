import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FullContractList = () => {
  const [contracts, setContracts] = useState([]);

  const fetchContracts = async () => {
    try {
      const response = await axios.get('http://localhost:8080/fullcontracts/list');
      setContracts(response.data);
    } catch (error) {
      console.error('Error fetching contracts:', error);
    }
  };

  useEffect(() => {
    fetchContracts();
  }, []);

  return (
    <div>
      <h2>Full Contracts</h2>
      <table>
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Year of Birth</th>
            <th>SSN</th>
            <th>Date of Contract</th>
            <th>Customer Address</th>
            <th>Phone Number</th>
            <th>Deposit</th>
            <th>Remain</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {contracts.map((contract) => (
            <tr key={contract.id}>
              <td>{contract.customerName}</td>
              <td>{contract.yearOfBirth}</td>
              <td>{contract.ssn}</td>
              <td>{contract.dateOfContract}</td>
              <td>{contract.customerAddress}</td>
              <td>{contract.phoneNumber}</td>
              <td>{contract.deposit}</td>
              <td>{contract.remain}</td>
              <td>{contract.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FullContractList;
