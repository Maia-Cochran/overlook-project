import {fetchAll} from './api-calls'
// An example of how you tell webpack to use a CSS (SCSS) file
// import './css/styles.css';
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
// import './images/turing-logo.png'


//globalVariables
let bookings;
let customers;
let rooms;
const superFetch = () => {
    fetchAll()
    .then(data => {
        console.log(data)
        bookings = data[0].bookings
        rooms = data[1].rooms
        customers = data[2].customers
    })
}
// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

//globalFunctions
window.addEventListener('load', superFetch)
