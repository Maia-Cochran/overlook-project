//IMPORTS
import './css/styles.css';
import './images/suite-sheets.png'
import './images/suite-sheets-innerPic.png'
import dayjs from 'dayjs'
import Customer from './classes/customers';
import Booking from './classes/bookings';
import Room from './classes/rooms';
import Hotel from './classes/hotel';

//QUERY SELECTORS
const customerLoginPage = document.querySelector('.customer-login-page')
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
const viewCustomerBookings = document.getElementById('view-customer-bookings')
const roomInfoCard = document.querySelector('.reservation-card')
const loginButton = document.querySelector('.login-button')
const username = document.querySelector('.username-input')
const password = document.querySelector('.password-input')
const errorMessage = document.querySelector('.error-message')

//GLOBAL VARIABLES
let bookingData;
let roomData;
let customerData;
let currentCustomer;
let hotel;
let availableRooms;
let newReservation;
let newBooking;
let customer;

//EVENT LISTENERS
window.addEventListener('load', superFetch)
showAvailableRooms.addEventListener('click', displayAvailableRoomsByDate)
loginButton.addEventListener('click', customerLogIn)

allFilterButtons.addEventListener('click', (e) => {
    findRoomType(e.target.id)
});

myBookings.addEventListener('click', (e) => {
    if(e.target.classList == 'book-room-button'){
        myBookings.innerHTML = `BON VOYAGE! Your stay with us was successfully booked, friend!`
    }
    return submitCreatedBooking(e)
});

//CUSTOMER DASHBOARD FUNCTIONS
function superFetch() {
    fetchAll()
    .then(data => {
        bookingData = data[0].bookings;
        roomData = data[1].rooms;
        customerData = data[2].customers;
        hotel = new Hotel(bookingData, customerData, roomData);
        })
        hide(allFilterButtons);
    }

function displayCustomerInfo(name){
    welcomeCustomerMessage.innerText = `Howdy, ${name}!
    You've spent $${currentCustomer.calculateTotalDollarsSpent()} adventuring with us!`
};

function displayCustomerBookings(){
    const result = currentCustomer.bookingHistory.map(booking => {
        return `<section class='reservation-card' id=${booking.id}>
        <img src="./images/suite-sheets-innerPic.png" alt=under suite sheets">
        <section>
        <p>Reservation Summary:</p>
        <p> ${booking.date}</p>
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
    result ? myBookings.innerHTML = result : myBookings.innerHTML = `<section class="error-message">You haven't booked with us yet, nomad! Pick a date to get started! <3
    </section>`
}

function displayAvailableRoomsByDate(e) {
    show(allFilterButtons)
    let datePicked = document.getElementById('select-date').value
    availableRooms = hotel.findAvailableRooms(datePicked)
    const result = availableRooms.map((room) => {
        return `<section class='reservation-card' id=${room.id}>
        <img src="./images/suite-sheets-innerPic.png" alt=under suite sheets">
        <section>
        <p>${dayjs(datePicked).format('MMMM, D, YYYY')}</p>
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
    result ? myBookings.innerHTML = result : myBookings.innerHTML = `<section class="error-message">We are extra super fiercely apologetic, as it seems there are no rooms available for ${datePicked}!
    <p> :-( </p>
    Pls don't hate us forever. </3
    </section>`
};

function customerLogIn(e) {
    e.preventDefault()
    const currentUsername = username.value.split('customer')[1]
    const currentPassword = password.value
    if(username.value.includes('customer') && currentPassword === `overlook2021`) {
        console.log(customerData[0], currentUsername)
        currentCustomer = new Customer(customerData.find(customer => customer.id === Number(currentUsername)))
        hide(customerLoginPage);
        currentCustomer.getCustomerBookingHistory(bookingData, roomData)
        displayCustomerBookings();
        return displayCustomerInfo(currentCustomer.name)
    } else if (currentUsername === '' || currentPassword === '') {
        errorMessage.innerText = `Oopsie! Looks like you missed a few fields! Fill both of them out to login.`
    } else {
        return errorMessage.innerText = `YeeeeeNAW, my friend! The username or password is incorrect. Please try again.`
    }
}

function findRoomType(type){
    let datePicked = document.getElementById('select-date').value
    availableRooms = hotel.filterRoomsByType(type, datePicked)
    const result = availableRooms.map(room => {
        return `<section class='reservation-card' id=${room.id}>
        <img src="./images/suite-sheets-innerPic.png" alt=under suite sheets">
        <section id="${room.id}">
        <p>${dayjs(datePicked).format('MMMM, D, YYYY')}</p>
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
    result ? myBookings.innerHTML = result : myBookings.innerHTML = `<section class="error-message">We are extra super fiercely apologetic, as it seems there are no ${type} rooms available for ${datePicked}!
    <p> :-( </p>
    </section>`
}

//GET DATA FUNCTIONS
function fetchData(url) {
    return fetch(url)
    .then(data => data.json())
    .catch(err => console.log(err))
}

function fetchAll() {
    return Promise.all([fetchData('http://localhost:3001/api/v1/bookings'),
    fetchData('http://localhost:3001/api/v1/rooms'),
    fetchData('http://localhost:3001/api/v1/customers')])
}

//POST DATA FUNCTIONS
function createBookingForPost(e){
        const newCalendarForm = new FormData(document.querySelector('.calendar-form'))
        let customerBookedRoom = {
            userID: currentCustomer.id, 
            date: dayjs(newCalendarForm.get('user-booking-date')).format('YYYY/MM/DD'),
            roomNumber: parseInt(e.target.id)
        }
        return customerBookedRoom
    }
    
    function submitCreatedBooking(e){
        e.preventDefault()
        let newBooking = createBookingForPost(e)
        let postBooking = postData(newBooking)
        let promiseFetch = fetchAll('bookings')
        Promise.all([postBooking, promiseFetch])
        .then(response => {
            newReservation = new Booking(response[1])
            currentCustomer.getCustomerBookingHistory()
        })
    }
    
    function postData(formData){
        return fetch('http://localhost:3001/api/v1/bookings',
        {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(data => data.json()).then(data => {
            console.log(data)
        })
        .catch(error => console.log(error))
    }
             
//HELPER FUNCTIONS
function hide(elements){
    elements.classList.add('hidden')
}

function show(elements){
    elements.classList.remove('hidden')
}
