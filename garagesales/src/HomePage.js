import React, { useState } from 'react';

const HomePage = () => {
  // State hooks for form inputs
  const [typeOfSale, setTypeOfSale] = useState('');
  const [address, setAddress] = useState('');
  const [timeFrame, setTimeFrame] = useState('');

  // Handle form input changes
  const handleTypeOfSaleChange = (event) => setTypeOfSale(event.target.value);
  const handleAddressChange = (event) => setAddress(event.target.value);
  const handleTimeFrameChange = (event) => setTimeFrame(event.target.value);

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // For now, just log the state to the console
    console.log({ typeOfSale, address, timeFrame });
    // Here you would usually send the data to the server or state management
  };

  return (
    <div>
      <h1>Welcome to the Garage Sales Finder</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Type of Sale:</label>
          <input
            type="text"
            value={typeOfSale}
            onChange={handleTypeOfSaleChange}
          />
        </div>
        <div>
          <label>Address:</label>
          <input
            type="text"
            value={address}
            onChange={handleAddressChange}
          />
        </div>
        <div>
          <label>Time Frame:</label>
          <input
            type="text"
            value={timeFrame}
            onChange={handleTimeFrameChange}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default HomePage;
