//IMPORTS 
import {fetchAll} from './api-calls'
import {postData} from './api-calls'
import './css/styles.css';
import './images/suite-sheets.png'
import './images/suite-sheets-innerPic.png'
import dayjs from 'dayjs'
import Customer from './classes/customers';
import Booking from './classes/bookings';
import Room from './classes/rooms';
import Hotel from './classes/hotel';

//QUERY SELECTORS
const welcomeCustomerMessage = document.querySelector('.welcome-customer-text');
const myBookings = document.querySelector('.booking-grid-container')
const bookRoomButton = document.querySelector('.book-room-button')
const showAvailableRooms = document.getElementById('show-available-rooms-button') 
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
let roomData;
let customerData;
let currentCustomer;
let hotel;
let availableRooms;
let newReservation;

//EVENT LISTENERS
window.addEventListener('load', superFetch)
showAvailableRooms.addEventListener('click', displayAvailableRoomsByDate)

allFilterButtons.addEventListener('click', (e) => {
    findRoomType(e.target.id)
});

myBookings.addEventListener('click', (e) => {
    if(e.target.classList == 'book-room-button'){
        return submitCreatedBooking(e)
    }
});


//CUSTOMER DASHBOARD FUNCTIONS
function displayCustomerInfo(){
    welcomeCustomerMessage.innerText = `Howdy, ${currentCustomer.name.split(' ')[0]}!
    You've spent $${currentCustomer.calculateTotalDollarsSpent()} adventuring with us!`;
}

function displayCustomerBookings(){
    const result = currentCustomer.bookingHistory.map(booking => {
        return `<section class='reservation-card' id=${booking.id}>
        <img src="./images/suite-sheets-innerPic.png" alt=under suite sheets">
        <section>
        <p>Reservation Summary:</p>
        <p> ${dayjs(booking.date).format('MMMM, D, YYYY')}</p>
        <p>Room #${booking.roomDetails.number}</p>
        <p>Room Type: ${booking.roomDetails.roomType}</p>
        <p>Bidet Included: ${booking.roomDetails.bidet ? 'yes' : 'no'}</p>
        <p>Bed Size: ${booking.roomDetails.bedSize}</p>
        <p>Number of Beds: ${booking.roomDetails.numBeds}</p>
        <p id="${booking.id}" class='room-cost'>Cost: $${booking.roomDetails.costPerNight}</p>
        </section>
        <button id="${booking.id}" class hidden="book-room-button">Book now!</button>
        </section>`
    }).join(' ')
    return myBookings.innerHTML = result;
}

function displayAvailableRoomsByDate() {
        show(allFilterButtons)
        let date = datePicked.value.split('-').join('/')
        availableRooms = hotel.findAvailableRooms(datePicked.value)
        const result = availableRooms.map((room) => {
            return `<section class='reservation-card' id=${room.id}>
            <img src="./images/suite-sheets-innerPic.png" alt=under suite sheets">
            <section>
            <p>${dayjs(date.value).format('MMMM, D, YYYY')}</p>
            <p>Room #${room.number}</p>
            <p>Room Type: ${room.roomType}</p>
            <p>Bidet Included: ${room.bidet ? 'yes' : 'no'}</p>
            <p>Bed Size: ${room.bedSize}</p>
            <p>Number of Beds: ${room.numBeds}</p>
            <p id="${room.id}" class='room-cost'>Price: $${room.costPerNight}</p>
            </section>
            <button id="${room.number}" class="book-room-button">Book now!</button>
            </section>`
        }).join(' ');
        return myBookings.innerHTML = result;
    };
    
function findRoomType(type){
    date = datePicked.value.split('-').join('/')
    availableRooms = hotel.filterRoomsByType(type, date)
    const result = availableRooms.map(room => {
        return `<section class='reservation-card' id=${room.id}>
        <img src="./images/suite-sheets-innerPic.png" alt=under suite sheets">
        <section id="${room.id}">
        <p>${dayjs(date).format('MMMM, D, YYYY')}</p>
        <p>Room #${room.number}</p>
        <p>Room Type: ${room.roomType}</p>
        <p>Bidet Included: ${room.bidet ? 'yes' : 'no'}</p>
        <p>Bed Size: ${room.bedSize}</p>
        <p>Number of Beds: ${room.numBeds}</p>
        <p id="${room.id}" class='room-cost'>Price: $${room.costPerNight}</p>
        </section>
        <button id="${room.number}" class="book-room-button">Book now!</button>
        </section>`
    }).join(' ');
    result ? myBookings.innerHTML = result : myBookings.innerHTML = `<section class="error-message">We are extra super fiercely apologetic, as it seems there are no ${type} rooms available for ${date}!
    <p> :-( </p>
    </section>`
}
    
//GET DATA FUNCTIONS
function fetchData(url) {
    return fetch(url)
        .then(data => data.json())
        .catch(err => console.log(err))
}

function superFetch() {
    fetchAll()
    .then(data => {
        bookingData = data[0].bookings;
        roomData = data[1].rooms;
        customerData = data[2].customers;
        hotel = new Hotel(bookingData, customerData, roomData);
        currentCustomer = new Customer(customerData[47]);
        // currentCustomer = new Customer(customerData[Math.floor(Math.random() * customerData.length)]);
        currentCustomer.getCustomerBookingHistory(bookingData, roomData);
        // displayCustomerInfo();
        hide(allFilterButtons);
        // displayCustomerBookings();
    })
}

//POST DATA FUNCTIONS
function createBookingForPost(e){
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
    let postBooking = postData(newBooking)
    let promiseFetch = fetchAll('bookings')
    Promise.all([postBooking, promiseFetch])
    .then(response => {
        newReservation = new Booking(response[1])
    }) 
}
                
//HELPER FUNCTIONS
function hide(elements){
    elements.classList.add('hidden');
}
         
function show(elements){
    elements.classList.remove('hidden');
}
        
