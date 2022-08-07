//IMPORTS 
import {fetchAll} from './api-calls'
import './css/styles.css';
// import './images/turing-logo.png'
// import { postData } from './apiCalls';
import Customer from './classes/customers';
import Booking from './classes/bookings';
import Room from './classes/rooms';


//GLOBAL VARIABLES
let allBookingData;
let allRoomData;
let allCustomerData;
let currCustomer;

//LOAD DATA FUNCTIONS
const superFetch = () => {
    fetchAll()
    .then(data => {
        console.log(data)
        allBookingData = data[0].bookings
        allRoomData = data[1].rooms
        // console.log('ALL ROOM DATA: ', allRoomData)
        allCustomerData = data[2].customers
        currCustomer = new Customer(allCustomerData[Math.floor(Math.random() * allCustomerData.length)]);
        allBookingData = new Booking(allBookingData);
        // availableRoomsData = new Room()
        console.log('currCustomer', currCustomer)
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

