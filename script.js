document.getElementById('tracking-form').addEventListener('submit', async function (e) {
    e.preventDefault();
    const trackingNumber = document.getElementById('tracking-number').value.trim().toUpperCase();
  
    if (!trackingNumber) {
      displayError('Please enter a valid flight code.');
      return;
    }
  
    try {
      // Fetch flight details (simulated or real API call)
      const flightDetails = await fetchFlightDetails(trackingNumber);
      displayFlightDetails(flightDetails);
    } catch (error) {
      console.error('Error fetching flight details:', error);
      displayError('Failed to fetch flight details. Please try again.');
    }
  });
  
  // Simulate fetching flight details
  async function fetchFlightDetails(trackingNumber) {
    // Simulate a delay for the API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
  
    // Mock flight data (replace with actual API response)
    const mockFlights = {
      AA123: {
        flightNumber: 'AA123',
        departure: 'New York (JFK)',
        destination: 'London (LHR)',
        currentLocation: 'Over Atlantic Ocean',
        departureTime: '10:00 AM',
        arrivalTime: '4:00 PM',
        status: 'On Time',
        gate: 'A12', // Optional: Gate number
      },
      BA456: {
        flightNumber: 'BA456',
        departure: 'London (LHR)',
        destination: 'Los Angeles (LAX)',
        currentLocation: 'Over Pacific Ocean',
        departureTime: '9:00 AM',
        arrivalTime: '3:00 PM',
        status: 'Delayed',
        gate: 'B5', // Optional: Gate number
      },
      DL789: {
        flightNumber: 'DL789',
        departure: 'Los Angeles (LAX)',
        destination: 'Tokyo (NRT)',
        currentLocation: 'Over Europe',
        departureTime: '11:00 AM',
        arrivalTime: '5:00 PM',
        status: 'On Time',
        // No gate number provided for this flight
      },
    };
  
    const flight = mockFlights[trackingNumber];
    if (!flight) {
      throw new Error('Flight not found');
    }
  
    return flight;
  }
  
  // Display flight details
  function displayFlightDetails(details) {
    const flightDetailsSection = document.getElementById('flight-details');
    flightDetailsSection.innerHTML = `
      <h2>Flight Details</h2>
      <p><strong>Flight Number:</strong> ${details.flightNumber}</p>
      <p><strong>Departure:</strong> ${details.departure}</p>
      <p><strong>Destination:</strong> ${details.destination}</p>
      <p><strong>Current Location:</strong> ${details.currentLocation}</p>
      <p><strong>Departure Time:</strong> ${details.departureTime}</p>
      <p><strong>Arrival Time:</strong> ${details.arrivalTime}</p>
      <p><strong>Status:</strong> ${details.status}</p>
      ${details.gate ? `<p><strong>Gate:</strong> ${details.gate}</p>` : ''}
    `;
  }
  
  // Display error message
  function displayError(message) {
    const flightDetailsSection = document.getElementById('flight-details');
    flightDetailsSection.innerHTML = `<p class="error">${message}</p>`;
  }