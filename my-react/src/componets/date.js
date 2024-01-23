import React, { useState } from 'react';

const DateCalculator = () => {
  const [startDate, setStartDate] = useState('');
  const [completionDate, setCompletionDate] = useState('');

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const calculateCompletionDate = () => {
    if (startDate) {
      const start = new Date(startDate);
      const completion = new Date(start);
      completion.setDate(start.getDate() + 90);

      setCompletionDate(completion.toDateString());
    } else {
      alert('Please select a start date.');
    }
  };

  return (
    <div class="container-fluid text-center bg-warning col-8  p-5 "style={{borderRadius:50,marginTop:200,marginLeft:240}} >
      <label htmlFor="startDate" class="text-success">Enter Course Start Date:</label>
      <input
        type="date"
        id="startDate"
        class="bg-primary text-white"
        value={startDate}
        onChange={handleStartDateChange}
      /><br/>
      <div class="container-fluid col-8 m-8 p-4">

      <button class="text-white bg-warning" onClick={calculateCompletionDate}>Calculate Completion Date</button>
      {completionDate && (
        <h4 class="text-primary">
          Course completion date: {completionDate}
        </h4>
      )}
      </div>
    </div>
  );
};

export default DateCalculator;



