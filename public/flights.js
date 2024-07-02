// public/flights.js
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const origin = urlParams.get('origin');
    const destination = urlParams.get('destination');
    const date = urlParams.get('date');

    fetch(`/api/flight?origin=${origin}&destination=${destination}&date=${date}`)
        .then(response => response.json())
        .then(flightsData => {
            const flightsContainer = document.getElementById('flightsContainer');
            flightsContainer.innerHTML = ''; // Clear previous results

            if (flightsData.flights.length === 0) {
                flightsContainer.innerHTML = '<p>No flights found for the selected criteria.</p>';
            } else {
                flightsData.flights.forEach(flight => {
                    const flightElement = document.createElement('div');
                    flightElement.classList.add('flight');
                    flightElement.innerHTML = `
                        <p>Flight Name: ${flight.flightName}</p>
                        <p>Flight Number: ${flight.flightNumber}</p>
                        <p>Arrival Date: ${flight.arrivalDate}</p>
                        <p>Arrival Time: ${flight.arrivalTime}</p>
                        <p>Arrival City: ${flight.arrivalCity}</p>
                        <p>Departure Date: ${flight.departureDate}</p>
                        <p>Departure Time: ${flight.departureTime}</p>
                        <p>Departure City: ${flight.departureCity}</p>
                        <p>Total Time of Journey: ${flight.totalTimeofJourney}</p>
                        <p>Price: ${flight.price}</p>
                    `;
                    flightsContainer.appendChild(flightElement);
                });
            }
        })
        .catch(error => console.error('Error fetching flights:', error));
});
