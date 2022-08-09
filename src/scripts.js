//IMPORTS 
import {fetchAll} from './api-calls'
import './css/styles.css';
import './images/turing-logo.png'
// import { postData } from './apiCalls';
import Customer from './classes/customers';
import Booking from './classes/bookings';
import Room from './classes/rooms';

//QUERY SELECTORS
// let viewBookingsButtons = document.querySelector('.reservation-buttons')
const welcomeCustomerMessage = document.querySelector('.welcome-customer-text');
// const roomDetailsCard = document.querySelector('.reservation-card');
const myBookings = document.querySelector('.booking-grid-container')
const roomInfoText = document.querySelector('.room-info');
const roomCostText = document.querySelector('.room-cost');
const bookRoomButton = document.querySelector('.book-room-button')
// const viewCustomerBookings = document.querySelector()
// const viewCustomerDashboard = 
//^^^^^^KEEP THIS FOR WHEN CREATING LOGIN PAGE

//GLOBAL VARIABLES
let bookingData;
let bookingsArray;
let roomData;
let customer;
let customerData;
let currentCustomer;
let currentBooking;
let bookingsPerCustomer;
let booking;

//EVENT LISTENERS
window.addEventListener('load', superFetch)
// bookingDetailsCard.addEventListener('click', findBookingsByCustomerId)

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
        console.log('currCustomer NAME', currentCustomer.name)
        displayCustomerInfo();
        displayCustomerBookings();
    })
}

function displayCustomerInfo(){
    welcomeCustomerMessage.innerText = `Howdy, ${currentCustomer.name.split( ' ' )[0]}!
    You have spent $${currentCustomer.calculateTotalDollarsSpent()} lodging with us!`;
}

function displayCustomerBookings(){
        const result = currentCustomer.bookingHistory.map(booking => {
            return `<section class='reservation-card' id=${booking.id}>
            <img src="./images/turing-logo.png" alt="turing logo">
            <section class="room-info">
            <p id="${booking.id}" class="room-info">Date of Stay: ${booking.date}</p>
            <p>Room #${booking.roomDetails.number}</p>
            <p>Room Type: ${booking.roomDetails.roomType}</p>
            <p>Bidet Included: ${booking.roomDetails.bidet}</p>
            <p>Bed Size: ${booking.roomDetails.bedSize}</p>
            <p>Number of Beds: ${booking.roomDetails.numBeds}</p>
            <p id="${booking.id}" class='room-cost'>Price for one-night stay: $${booking.roomDetails.costPerNight}</p>
            <button id="${booking.id}" class="book-room-button">Book now!</button>
          </section>
          </section>
          </section>`
        }).join(' ')
            return myBookings.innerHTML = result;
    }
    
    // function displayAllRecipesOnPage( e ) {
    //     let recipeCards = recipeContainer;
    //     newRecipe = new RecipeRepository( recipeList  )
    //     const result = newRecipe.recipes.map( recipe => {
    //         return `<section class='recipe-card' id=${ recipe.id }>
    //         <img src=${ recipe.image } class="recipe-image" alt="">
    //         <h3>${ recipe.name }</h3>
    //         <button class="lets-make-it-button" id=${ recipe.id }>Let's Make It!</button>
    //         <div>
    //         <button id=${ recipe.id } class="save-button">Save to cooking profile!</button>
    //         </div>
    //         </section>`
    //     } ).join( '' );
    //     return recipeCards.innerHTML = result;
    // };


//need function to  interpoladurp the amount of money spent
//DONE :) need to send screenshots for error with dollar amount

//need a function to display all the rooms on the page via button visible from anywhere on page
//need a function to display all currCustomer bookings on page load
//need a function to connect the date chosen by customer to the date of available rooms
//need to display the available rooms by date
//need to create a function to actually add the booking to the bookings array for customer
//need to create a function that will add an event listener to the class of room type buttons from my html to DOM
//^^^ in order to filter the AVAIL ROOMS by ROOM TYPE for the user
//need to make sure my function for the adding bookings to the booking list includes an error message for no avail rooms

//build out everything for iterations 1 & 2 before moving to accessibility and login page
//username: customer50 (where 50 is the ID of the user) password: overlook2021
//customer`${user.id}` <<<<< for the login for page function

// getBookingByCustomerID(currentCustomer){
// //     currentCustomer.bookings = []
// //    bookingData.filter(booking => 
// //     booking.userID === currentCustomer.id
// //     currentCustomer.bookings.push(booking))
//     // return currentCustomer.bookings
// }



