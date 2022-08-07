//IMPORTS 
import {fetchAll} from './api-calls'
import './css/styles.css';
// import './images/turing-logo.png'
// import { postData } from './apiCalls';
import Customer from './classes/customers';
import Booking from './classes/bookings';
import Room from './classes/rooms';

//QUERY SELECTORS
// let viewBookingsButtons = document.querySelector('.reservation-buttons')

//GLOBAL VARIABLES
let bookingData;
let bookingsArray;
let roomData;
let customer;
let customerData;
let currentCustomer;
let currentBooking;
let bookingsPerCustomer;

//EVENT LISTENERS
window.addEventListener('load', superFetch)


//LOAD DATA FUNCTIONS
function superFetch() {
    fetchAll()
    .then(data => {
        bookingData = data[0].bookings
        roomData = data[1].rooms
        customerData = data[2].customers
        currentCustomer = new Customer(customerData[Math.floor(Math.random() * customerData.length)]);
        currentCustomer.getCustomerBookingHistory(bookingData, roomData);
        console.log('currCustomer', currentCustomer)
    })
}

// function displayRandomCustomerName( ) {
//     welcomeUserMessage.innerText = `Howdy, ${ currentCustomer.name.split( ' ' )[ 0 ] }!`;
// }

// getBookingByCustomerID(currentCustomer){
// //     currentCustomer.bookings = []
// //    bookingData.filter(booking => 
// //     booking.userID === currentCustomer.id
// //     currentCustomer.bookings.push(booking))
//     // return currentCustomer.bookings
// }


// welcomeUserMessage.addEventListener('load', displayRandomCustomerName)
// viewBookingsButtons.addEventListener('click', findBookingsByCustomerId)

