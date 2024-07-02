/*const date=document.getElementById("date")
let d=new Date()
if(`${d.getMonth()+1}`.length==1){
    dateStr=`${d.getFullYear()}-${"0"+(d.getMonth()+1)}-${d.getDate()}`  
}
else if(`${d.getDate()}`.length==1){
    dateStr=`${d.getFullYear()}-${(d.getMonth()+1)}-${"0"+d.getDate()}`
}
else if(`${d.getMonth()+1}`.length && `${d.getDate()}`.length==1){
    dateStr=`${d.getFullYear()}-${"0"+(d.getMonth()+1)}-${"0"+d.getDate()}`
}
else{
let dateStr=`${d.getFullYear()}-${(d.getMonth()+1)}-${d.getDate()}`
}
date.setAttribute("min",dateStr)
//practice delete later
const dr = new Date("2024-12-4")
console.log(`${dr.getDate()}-${dr.getMonth()+1}-${dr.getFullYear()}`)
const dt=new Date(2018,6,24,12,33)
console.log(`${dt.getHours()}:${dt.getMinutes()}`)
console.log(`${dt.getDate()}-${dt.getMonth()}-${dt.getFullYear()}`)*/
// index.js
//document.getElementById('date').min = new Date().toISOString().split("T")[0];




// index.js

/*document.getElementById('flightForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent form submission

    const origin = document.getElementById('origin').value;
    const destination = document.getElementById('destination').value;
    const date = document.getElementById('date').value;

    try {
        const response = await fetch(`/api/flight?origin=${origin}&destination=${destination}&date=${date}`);
        const flightsData = await response.json();

        const flightsContainer = document.getElementById('flightsContainer');
        flightsContainer.innerHTML = ''; // Clear previous results

        if (flightsData.flights.length === 0) {
            flightsContainer.innerHTML = '<p>No flights found for the selected criteria.</p>';
        } else {
            flightsData.flights.forEach(flight => {
                flightsContainer.innerHTML += `
                    <div>
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
                    </div>
                    <hr>
                `;
            });
        }
    } catch (error) {
        console.error('Error fetching flights:', error);
    }
});
*/

//complete correct code   
/*document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('date').min = new Date().toISOString().split("T")[0];

    document.getElementById('flightForm').addEventListener('submit', async function(event) {
        event.preventDefault(); // Prevent form submission

        const origin = document.getElementById('origin').value;
        const destination = document.getElementById('destination').value;
        const date = document.getElementById('date').value;

        console.log('Submitting form:', { origin, destination, date });

        try {
            const response = await fetch(`/api/flight?origin=${origin}&destination=${destination}&date=${date}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const flightsData = await response.json();

            const flightsContainer = document.getElementById('flightsContainer');
            flightsContainer.innerHTML = ''; // Clear previous results

            if (flightsData.flights.length === 0) {
                flightsContainer.innerHTML = '<p>No flights found for the selected criteria.</p>';
            } else {
                flightsData.flights.forEach(flight => {
                    flightsContainer.innerHTML += `
                        <div>
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
                        </div>
                        <hr>
                    `;
                });
            }
        } catch (error) {
            console.error('Error fetching flights:', error);
        }
    });
});
*/



// public/index.js
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('date').min = new Date().toISOString().split("T")[0];

    document.getElementById('flightForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        const origin = document.getElementById('origin').value;
        const destination = document.getElementById('destination').value;
        const date = document.getElementById('date').value;

        // Redirect to flights.html with query parameters
        window.location.href = `flights.html?origin=${origin}&destination=${destination}&date=${date}`;
    });
});
