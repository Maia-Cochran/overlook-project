class Customer {
    constructor(customerData) {
        this.id = customerData.id;
        this.name = customerData.name;
        this.currentBookings = [];
        // this.newReservations = [];
        this.pastBookings = [];
        this.totalDollarsSpent = customerData.totalDollarsSpent;
    }
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
    makeNewReservation(newBooking){
        return this.currentBookings.push(newBooking)
        //if the booking instance date matches the current selected date then return that date to current bookings
        //upon click of the button, this function should add the booking ID to the current reservation.... reduce???
        //should be moved into SCRIPTS??? unsure yet
        // bookings.filter(booking => if(booking.date === this.id date return the booking {else} )) ??
        //this new reservation requires a matching room to the booking id's 
        //require a user match to this as well
    }
}

export default Customer