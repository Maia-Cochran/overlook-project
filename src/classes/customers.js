import Booking from "./bookings";
class Customer {
    constructor(customerData) {
        this.id = customerData.id;
        this.name = customerData.name;
        this.bookingHistory = [];
    }
    getCustomerBookingHistory(bookingData, roomData){
       this.bookingHistory = bookingData.filter((booking) => (booking.userID === this.id))
        .map(item => new Booking(item))
        this.bookingHistory.forEach(booking => {
          booking.getRoomInfo(roomData)
        })
    }
    calculateTotalDollarsSpent(){
        return this.bookingHistory.reduce((totalAmountSpent, currBooking) => {
            totalAmountSpent += currBooking.roomDetails.costPerNight
            return totalAmountSpent
        }, 0).toLocaleString('en-US')
    }
}

export default Customer