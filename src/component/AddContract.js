import React, { useState } from 'react';
import axios from 'axios';

const AddContract = () => {
  const [formData, setFormData] = useState({
    customerName: '',
    yearOfBirth: '',
    ssn: '',
    dateOfContract: '',
    customerAddress: '',
    phoneNumber: '',
    deposit: '',
    remain: '',
    price: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:8080/fullcontracts/add', formData);
      setFormData({
        customerName: '',
        yearOfBirth: '',
        ssn: '',
        dateOfContract: '',
        customerAddress: '',
        phoneNumber: '',
        deposit: '',
        remain: '',
        price: '',
      });
      // You might want to add a callback to refresh the contract list in the parent component
    } catch (error) {
      console.error('Error adding contract:', error);
    }
  };

  return (
    <div>
      <h2>Add New Full Contract</h2>
      <form onSubmit={handleSubmit}>
        
        
        <input placeholder='Customer Name' type="text" name="customerName" value={formData.customerName} onChange={handleChange} required />
        {/* Repeat this for other fields */}
        <input placeholder='year' type="text" name="yearOfBirth" value={formData.yearOfBirth} onChange={handleChange} required />
        <input placeholder='SSN' type="text" name="ssn" value={formData.ssn} onChange={handleChange} required />
        <input placeholder='Date Of Contract' type="text" name="dateOfContract" value={formData.dateOfContract} onChange={handleChange} required />
        <input placeholder='Customer Address' type="text" name="customerAddress" value={formData.customerAddress} onChange={handleChange} required />
        <input placeholder='Phone Number' type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
        <input placeholder='deposit' type="text" name="deposit" value={formData.deposit} onChange={handleChange} required />
        <input placeholder='remain' type="text" name="remain" value={formData.remain} onChange={handleChange} required />
        <input placeholder='price' type="text" name="price" value={formData.price} onChange={handleChange} required />
        <button type="submit">Add Contract</button>
      </form>
    </div>
  );
};

export default AddContract;
