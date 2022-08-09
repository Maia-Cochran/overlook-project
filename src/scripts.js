//IMPORTS 
import {fetchAll} from './api-calls'
import {postData} from './api-calls'
import './css/styles.css';
import './images/turing-logo.png'
import dayjs from 'dayjs'
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
const roomInfoCard = document.querySelector('.reservation-card')

//GLOBAL VARIABLES
let bookingData;
let myBookingsList;
let roomData;
let customer;
let customerData;
let currentCustomer;
let hotel;
let availableRooms;
let newReservation;

//EVENT LISTENERS
window.addEventListener('load', superFetch)
showAllAvailBtn.addEventListener('click', displayAvailableRoomsByDate)

allFilterButtons.addEventListener('click', (e) => {
    findRoomType(e.target.id)
});

myBookings.addEventListener('click', (e) => {
    if(e.target.classList == 'book-room-button'){
        return submitCreatedBooking(e)
    }
});


//HELPER FUNCTIONS
function hide(elements){
    elements.classList.add('hidden');
}
  
function show(elements){
    elements.classList.remove('hidden');
}

//GET DATA FUNCTIONS
function superFetch() {
    fetchAll()
    .then(data => {
        bookingData = data[0].bookings
        roomData = data[1].rooms
        customerData = data[2].customers
        hotel = new Hotel(bookingData, customerData, roomData)
        currentCustomer = new Customer(customerData[47]);
        // currentCustomer = new Customer(customerData[Math.floor(Math.random() * customerData.length)]);
        currentCustomer.getCustomerBookingHistory(bookingData, roomData);
        console.log('currCustomer', currentCustomer)
        console.log('currCustomer NAME', currentCustomer.name)
        displayCustomerInfo();
        hide(allFilterButtons)
        // displayCustomerBookings();
    })
}

function displayCustomerInfo(){
    welcomeCustomerMessage.innerText = `Howdy, ${currentCustomer.name.split(' ')[0]}!
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
        // console.log(myBookings)
        return myBookings.innerHTML = result;
    }
    
    function displayAvailableRoomsByDate() {
        // show(bookRoomButton);
        show(allFilterButtons);
        let date = datePicked.value
        availableRooms = hotel.findAvailableRooms(date)
        const result = availableRooms.map((room) => {
            // console.log('CRIES IN ROOMS', room)
            return `<section class='reservation-card' id=${room.id}>
            <section>
            <p>Date of Stay: ${date}</p>
            <p>Room #${room.number}</p>
            <p>Room Type: ${room.roomType}</p>
            <p>Bidet Included: ${room.bidet ? 'yes' : 'no'}</p>
            <p>Bed Size: ${room.bedSize}</p>
            <p>Number of Beds: ${room.numBeds}</p>
            <p id="${room.id}" class='room-cost'>Price for one-night stay: $${room.costPerNight}</p>
            </section>
            <button id="${room.number}" class="book-room-button">Book now!</button>
          </section>`
        }).join(' ');
        return myBookings.innerHTML = result;
    };

function findRoomType(type){
    let date = datePicked.value.split('-').join('/')
    availableRooms = hotel.filterRoomsByType(type, date)
    // console.log('WHAT THE FUCK ARE WE DOING HERE:', availableRooms)
    const result = availableRooms.map(room => {
        // console.log('ROOM?????', room)
        return `<section class='reservation-card' id=${room.id}>
        <img src="suite-sheets.png" alt="turing logo">
        <section id="${room.id}">
        <p>Date of Stay: ${date}</p>
        <p>Room #${room.number}</p>
        <p>Room Type: ${room.roomType}</p>
        <p>Bidet Included: ${room.bidet ? 'yes' : 'no'}</p>
        <p>Bed Size: ${room.bedSize}</p>
        <p>Number of Beds: ${room.numBeds}</p>
        <p id="${room.id}" class='room-cost'>Price for one-night stay: $${room.costPerNight}</p>
        </section>
        <button id="${room.number}" class="book-room-button">Book now!</button>
      </section>`
    }).join(' ');
    // console.log('WHY THE FUCK????,' result)
    result ? myBookings.innerHTML = result : myBookings.innerHTML = 
    `<section class="error-message">We are extra super fiercely apologetic, as it seems there are no ${type} rooms available for ${date}!
    <p> :-( </p>
    </section>`
 }

 const createBookingForPost = (e) => {
    const newCalendarForm = new FormData(document.querySelector('.calendar-form'))
    let customerBookedRoom = {
      userID: currentCustomer.id, 
      date: dayjs(newCalendarForm.get('user-booking-date')).format('MM/DD/YYYY'),
      roomNumber: parseInt(e.target.id)
    }
    return customerBookedRoom
}

 function submitCreatedBooking (e) {
    e.preventDefault()
    let newBooking = createBookingForPost(e)
    console.log('NEW BOOKING PLS', newBooking)
    let postBooking = postData(newBooking)
    console.log('postBooking', postBooking)
    let promiseFetch = fetchAll('bookings')
    console.log('fetch bad bois', promiseFetch)
    Promise.all([postBooking, promiseFetch])
    .then(response => {
        console.log('what the actual fuck part 2', response[1])
        console.log('yeehaw!', response)
        newReservation = new Booking(response[1])
    }) 
}

    //  function bookRoom(e){
    //     console.log('hello')
    //     if (e.target.classList == "book-room-button") {
    //         e.target.closest('section').add()
    //         // currentCustomer.myBookings()
    //         currentCustomer.bookingHistory.push(e.target.id)
    //     }
    //     return currentCustomer.bookingHistory
    // }
  