//IMPORTS 
import {fetchAll} from './api-calls'
import './css/styles.css';
// import './images/turing-logo.png'
// import { postData } from './apiCalls';
import Customer from './classes/customers';
import Booking from './classes/bookings';
import Room from './classes/rooms';

//QUERY SELECTORS
let viewBookingsButtons = document.querySelector('.reservation-buttons')

//GLOBAL VARIABLES
let bookingData;
let roomData;
let customerData;
let customer;
let currentCustomer;
let bookingsPerCustomer;
// let bookings = [];

// const createCustomer = (id) => {
//     const customer = customerData.filter(customer => customer.id === id);
//     currentCustomer = new Customer(customer);
//     // greetUser();
//     // displayTrips();
//     // populateOptions();
//     // currentCustomer.findLastTripId(tripsData);
// }
//LOAD DATA FUNCTIONS
const superFetch = () => {
    fetchAll()
    .then(data => {
        bookingData = data[0].bookings
        roomData = data[1].rooms
        customerData = data[2].customers
        currentCustomer = new Customer(customerData[Math.floor(Math.random() * customerData.length)]);
        console.log(currentCustomer)
        // createCustomer(1);
        // console.log(createCustomer(1))
        // console.log('currCustomer', currCustomer)
        // console.log('currCustomer Bookings', currCustomer.bookings)
        // booking = new Booking(allBookingData);
        // currCustomer.bookings = `${findBookingsByCustomerId()}`;
    })
}



// sortOnlyCurrentBookings(){
//     //use this to sort the current bookings to only display the bookings from the array
//     //should do this on page load??? 
//     //can set minimum date for this for on page load
// }
        // calculateTotalDollarsSpent(){
    //     return this.currentBookings.reduce((totalAmountSpent, currBooking) => {
    //         totalAmountSpent += currBooking.costPerNight
    //         return totalAmountSpent
    //     }, 0)
    //     //and room.costPerNight -(REFER TO DATA COMMENTED OUT RIGHT NOW TO SEE WHAT DATA WE USE FOR TEST)
    // }
    // calculateTotalDollarsSpent(){
    //     return this.currentBookings.reduce((totalAmountSpent, currBooking) => {
    //         if(currBooking.roomNumber === newRoom.number)
    //         totalAmountSpent += currBooking.costPerNight
    //         return totalAmountSpent
    //     }, 0)
    //     //and room.costPerNight -(REFER TO DATA COMMENTED OUT RIGHT NOW TO SEE WHAT DATA WE USE FOR TEST)
    // }

//EVENT LISTENERS
window.addEventListener('load', superFetch)
// viewBookingsButtons.addEventListener('click', findBookingsByCustomerId)

