import Booking from "./bookings";
class Customer {
    constructor(customerData) {
        this.id = customerData.id;
        this.name = customerData.name;
        this.bookings = [];
        // this.bookingData = allBookingData;
        // this.newReservations = [];
        // this.pastBookings = [];
        // this.totalDollarsSpent = customerData.totalDollarsSpent;
    }
    // displayCustomerName = () => {

    // } 
    getCustomerBookings = (bookingData) => {
        this.bookings = bookingData.filter((booking) => booking.userID === this.id)
    }
    // findBookingsByCustomerId = (customer) => {
    //     // let bookings =[]
    //     return allCustomerData.forEach(customer => {
    //         const currBooking = this.bookingData.filter(item => item.userID === customer.id);
    //             this.bookings.push({
    //                 id: currBooking.id,
    //                 userID: currBooking.userID,
    //                 date: currBooking.date,
    //                 roomNumber: currBooking.roomNumber,
    //             })
    //         })
        // console.log('tomer', bookings)
        // return bookings
        // return currBooking
    // }

    viewCurrentBookings(){
        //sort bookings from earliest to latest???
        //will give access to certain indices???
        //current bookings will populate in the reservation history when the user chooses a new booking
        //FIRST the user/customer should not be able to choose a booking with a date prior to TODAY's date
        //aka the date in which the user is viewing the page
        //view current reservations function should DISPLAY these in DOM manipulation in scripts file upon event listener
        //will ultimately create an array of bookings already chosen by customer
    }
    viewBookingHistory(){
        //BOOKING HISTORY will be determined by the current date
        //if the current date of TODAY is greater than the date on booking, then it will be in booking history?
        //and also the user/customer needs to have previously already booked that specific id of booking
        //need customer id as well as the booking id
        //view history of reservations function should DISPLAY these in DOM manipulation in scripts file upon event listener
        //will ultimately create an array of bookings already chosen by customer
    }
    makeNewReservation(){
        //if the booking instance date matches the current selected date then return that date to current bookings
        //upon click of the button, this function should add the booking ID to the current reservation.... reduce???
        //should be moved into SCRIPTS??? unsure yet
        // bookings.filter(booking => if(booking.date === this.id date return the booking {else} )) ??
        //this new reservation requires a matching room to the booking id's 
        //require a user match to this as well
    }
}

export default Customer