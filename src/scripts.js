//IMPORTS 
import {fetchAll} from './api-calls'
import './css/styles.css';
import './images/turing-logo.png'
// import { postData } from './apiCalls';
import Customer from './classes/customers';
import Booking from './classes/bookings';
import Room from './classes/rooms';
import Hotel from './classes/hotel';

//QUERY SELECTORS
const welcomeCustomerMessage = document.querySelector('.welcome-customer-text');
const myBookings = document.querySelector('.booking-grid-container')
const bookRoomButton = document.querySelector('.book-room-button')
const showAllAvailBtn = document.getElementById('show-available-rooms-button') 
const allFilterButtons = document.querySelector('.filter-by-room-preference-buttons-container')
const roomTypeButtons = document.querySelectorAll('.room-type-buttons')
const residential = document.getElementById('residential-suites-button')
const suite = document.getElementById('suite-button')
const single = document.getElementById('single-room-button')
const junior = document.getElementById('junior-suite-button') 
const datePicked = document.getElementById('select-date')
const viewCustomerBookings = document.getElementById('view-customer-bookings')

//GLOBAL VARIABLES
let bookingData;
let myBookingsList;
let roomData;
let customer;
let customerData;
let currentCustomer;
let hotel;
let availableRooms;
// let datePicked;

//EVENT LISTENERS
window.addEventListener('load', superFetch)
datePicked.addEventListener('click', getSelectedDate)
showAllAvailBtn.addEventListener('click', displayAvailableRoomsByDate)
viewCustomerBookings.addEventListener('click', showBookingHistory)

// .addEventListener('click', findRoomType)

allFilterButtons.addEventListener('click', (e) => {
    findRoomType(e.target.id)
});

bookRoomButton.addEventListener('click', (e) => {
    bookRoom(e.target.id)
});


//HELPER FUNCTIONS
function hide(elements){
    elements.classList.add('hidden');
  }
  
function show(elements){
    elements.classList.remove('hidden');
  }

function getSelectedDate(){
    const datePicked = document.getElementById('select-date-form').value
    return datePicked
}

//GET DATA FUNCTIONS
function superFetch() {
    fetchAll()
    .then(data => {
        bookingData = data[0].bookings
        roomData = data[1].rooms
        customerData = data[2].customers
        hotel = new Hotel(bookingData, customerData, roomData)
        currentCustomer = new Customer(customerData[Math.floor(Math.random() * customerData.length)]);
        currentCustomer.getCustomerBookingHistory(bookingData, roomData);
        console.log('currCustomer', currentCustomer)
        console.log('currCustomer NAME', currentCustomer.name)
        displayCustomerInfo();
        hide(allFilterButtons)
        // displayCustomerBookings();
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
            <section>
            <p>Date of Stay: ${booking.date}</p>
            <p>Room #${booking.roomDetails.number}</p>
            <p>Room Type: ${booking.roomDetails.roomType}</p>
            <p>Bidet Included: ${booking.roomDetails.bidet ? 'yes' : 'no'}</p>
            <p>Bed Size: ${booking.roomDetails.bedSize}</p>
            <p>Number of Beds: ${booking.roomDetails.numBeds}</p>
            <p id="${booking.id}" class='room-cost'>Price for one-night stay: $${booking.roomDetails.costPerNight}</p>
            </section>
            <button id="${booking.id}" class hidden="book-room-button">Book now!</button>
          </section>`
        }).join(' ')
        console.log(myBookings)
            return myBookings.innerHTML = result;
    }
    
    // <img src="./images/turing-logo.png" alt="turing logo">

    function displayAvailableRoomsByDate() {
        show(allFilterButtons);
        let date = datePicked.value
        availableRooms = hotel.findAvailableRooms(date)
        const result = availableRooms.map((room, roomDetails) => {
            console.log('CRIES IN ROOMS', room)
            return `<section class='reservation-card' id=${room.id}>
            <img src="./images/turing-logo.png" alt="turing logo">
            <section>
            <p>Date of Stay: ${date}</p>
            <p>Room #${room.number}</p>
            <p>Room Type: ${room.roomType}</p>
            <p>Bidet Included: ${room.bidet ? 'yes' : 'no'}</p>
            <p>Bed Size: ${room.bedSize}</p>
            <p>Number of Beds: ${room.numBeds}</p>
            <p id="${room.id}" class='room-cost'>Price for one-night stay: $${room.costPerNight}</p>
            </section>
            <button id="${room.id}" class="book-room-button">Book now!</button>
          </section>`
        }).join(' ');
        return myBookings.innerHTML = result;
    };

function findRoomType(type){
    let date = datePicked.value.split('-').join('/')
    availableRooms = hotel.filterRoomsByType(type, date)
    console.log(availableRooms)
    const result = availableRooms.map(room => {
        console.log('ROOM?????', room)
        return `<section class='reservation-card' id=${room.id}>
        <img src="./images/turing-logo.png" alt="turing logo">
        <section id="${room.id}">
        <p>Date of Stay: ${date}</p>
        <p>Room #${room.number}</p>
        <p>Room Type: ${room.roomType}</p>
        <p>Bidet Included: ${room.bidet ? 'yes' : 'no'}</p>
        <p>Bed Size: ${room.bedSize}</p>
        <p>Number of Beds: ${room.numBeds}</p>
        <p id="${room.id}" class='room-cost'>Price for one-night stay: $${room.costPerNight}</p>
        </section>
        <button id="${room.id}" class="book-room-button">Book now!</button>
      </section>`
    }).join(' ');
    return myBookings.innerHTML = result;
    // let errorMessage = `We are extra super fiercely (RAWR) apologetic, but it seems there are no ${type} rooms available for ${date}!`
 }

 function bookRoom(){
    

 }


//need function to  interpoladurp the amount of money spent
//DONE :) need to send screenshots for error with dollar amount
//need a function to display all the rooms on the page via button visible from anywhere on page
//need a function to display all currCustomer bookings on page load
//need a function to connect the date chosen by customer to the date of available rooms
//need to display the available rooms by date
//need to create a function that will add an event listener to the class of room type buttons from my html to DOM
//need to unhide the filter buttons when I do this^^^
//build out everything for iterations 1 & 2 before moving to accessibility and login page
//^^^ in order to filter the AVAIL ROOMS by ROOM TYPE for the user
// ^^^^^^^^DONE

//need to create a function to actually add the booking to the bookings array for customer

//need to make sure my function for the adding bookings to the booking list includes an error message for no avail rooms
//username: customer50 (where 50 is the ID of the user) password: overlook2021
//customer`${user.id}` <<<<< for the login for page function


// <p id="${booking.id}" class="room-info">Date of Stay: ${booking.date}</p>
// <p>Room #${booking.roomDetails.number}</p>
// <p>Room Type: ${booking.roomDetails.roomType}</p>
// <p>Bidet Included: ${booking.roomDetails.bidet}</p>
// <p>Bed Size: ${booking.roomDetails.bedSize}</p>
// <p>Number of Beds: ${booking.roomDetails.numBeds}</p>
// <p id="${booking.id}" class='room-cost'>Price for one-night stay: $${booking.roomDetails.costPerNight}</p>
// <button id="${booking.id}" class="book-room-button">Book now!</button>
// </section>