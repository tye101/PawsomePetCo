import React, { useState } from 'react';

const Sitters = () => {
  const [selectedService, setSelectedService] = useState(''); // State for selected service
  const [startDate, setStartDate] = useState(''); // State for start date
  const [endDate, setEndDate] = useState(''); // State for end date
  const [selectedAnimalSize, setSelectedAnimalSize] = useState(''); // State for selected animal size
  const [isFiltered, setIsFiltered] = useState(false); // State to track if filtering is applied

  // Handler for service selection
  const handleServiceChange = (event) => {
    setSelectedService(event.target.value);
  };

  // Handler for start date input
  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  // Handler for end date input
  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  // Handler for animal size selection
  const handleAnimalSizeChange = (event) => {
    setSelectedAnimalSize(event.target.value);
  };

  // Handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Here, you can use the selectedService, startDate, endDate, and selectedAnimalSize
    // values to filter potential sitters based on your data or API call.

    // For example:
    console.log('Selected Service:', selectedService);
    console.log('Start Date:', startDate);
    console.log('End Date:', endDate);
    console.log('Selected Animal Size:', selectedAnimalSize);

    setIsFiltered(true); // Set the filtering flag to true when the button is clicked
  };

  // Assume you have a static list of sitters with some attributes
  const allSitters = [
    {
      name: 'Joceline',
      service: 'Boarding',
      startDate: '2023-08-01',
      endDate: '2023-08-10',
      animalSize: 'small',
    },
    {
      name: 'Heather',
      service: 'Day Care',
      startDate: '2023-08-05',
      endDate: '2023-08-15',
      animalSize: 'medium',
    },
    {
        name: 'Jessica',
        service: 'Dog Walking',
        startDate: '2023-08-01',
        endDate: '2023-08-10',
        animalSize: 'small',
      },
      {
        name: 'Sarah',
        service: 'House Sitting',
        startDate: '2023-08-05',
        endDate: '2023-08-15',
        animalSize: 'medium',
      },
      {
        name: 'Olivia',
        service: 'Drop-In Visits',
        startDate: '2023-08-01',
        endDate: '2023-08-10',
        animalSize: 'large',
      },
  
    
  ];

  // Create a filtered list of sitters based on the selected criteria
  const filteredSitters = allSitters.filter((sitter) => {
    if (selectedService && sitter.service !== selectedService) {
      return false; // Filter by selected service if it's not empty
    }

    if (startDate && sitter.startDate < startDate) {
      return false; // Filter by start date if it's not empty
    }

    if (endDate && sitter.endDate > endDate) {
      return false; // Filter by end date if it's not empty
    }

    if (selectedAnimalSize && sitter.animalSize !== selectedAnimalSize) {
      return false; // Filter by selected animal size if it's not empty
    }

    return true; // Include the sitter in the filtered list if it matches all selected criteria
  });

  return (
    <div>
      <h1>Filter Through Sitters</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Select Service:
          <select value={selectedService} onChange={handleServiceChange}>
            <option value="">Choose a service</option>
            <option value="service1">Boarding</option>
            <option value="service2">Day Care</option>
            <option value="service3">House Sitting</option>
            <option value="service4">Drop-In Visits</option>
            <option value="service5">Dog Walking</option>
          </select>
        </label>
        <br />
        <label>
          Start Date:
          <input type="date" value={startDate} onChange={handleStartDateChange} />
        </label>
        <br />
        <label>
          End Date:
          <input type="date" value={endDate} onChange={handleEndDateChange} />
        </label>
        <br />
        <label>
          Choose Animal Size:
          <br />
          <input type="radio" value="small" checked={selectedAnimalSize === 'small'} onChange={handleAnimalSizeChange} /> Small
          <br />
          <input type="radio" value="medium" checked={selectedAnimalSize === 'medium'} onChange={handleAnimalSizeChange} /> Medium
          <br />
          <input type="radio" value="large" checked={selectedAnimalSize === 'large'} onChange={handleAnimalSizeChange} /> Large
          <br />
          <input type="radio" value="extra_large" checked={selectedAnimalSize === 'extra_large'} onChange={handleAnimalSizeChange} /> Extra Large
        </label>
        <br />
        <button type="submit">Filter</button>
      </form>
      <h2>Filtered Sitters:</h2>
      <ul>
        {isFiltered
          ? filteredSitters.map((sitter, index) => (
              <li key={index}>
                <strong>{sitter.name}</strong>
                <br />
                Service: {sitter.service}
                <br />
                Start Date: {sitter.startDate}
                <br />
                End Date: {sitter.endDate}
                <br />
                Animal Size: {sitter.animalSize}
              </li>
            ))
          : allSitters.map((sitter, index) => (
              <li key={index}>
                <strong>{sitter.name}</strong>
                <br />
                Service: {sitter.service}
                <br />
                Start Date: {sitter.startDate}
                <br />
                End Date: {sitter.endDate}
                <br />
                Animal Size: {sitter.animalSize}
              </li>
            ))}
      </ul>
    </div>
  );
};

export default Sitters;
