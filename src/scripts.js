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


//LOAD DATA FUNCTIONS
const superFetch = () => {
    fetchAll()
    .then(data => {
        console.log(data)
        allBookingData = data[0].bookings
        allRoomData = data[1].rooms
        allCustomerData = data[2].customers
    })
}

//EVENT LISTENERS
window.addEventListener('load', superFetch)

