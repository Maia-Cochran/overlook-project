import {fetchAll} from './api-calls'
// An example of how you tell webpack to use a CSS (SCSS) file
// import './css/styles.css';
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
// import './images/turing-logo.png'


//globalVariables
let allBookingData;
let allRoomData;
let allCustomerData;
const superFetch = () => {
    fetchAll()
    .then(data => {
        console.log(data)
        allBookingData = data[0].bookings
        allRoomData = data[1].rooms
        allCustomerData = data[2].customers
    })
}
// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

//globalFunctions
window.addEventListener('load', superFetch)
