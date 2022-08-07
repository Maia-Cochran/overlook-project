import Booking from "./bookings";
import Customer from "./customers";

class Room {
    constructor(roomData) {
        this.number = roomData.number;
        this.roomType = roomData.roomType;
        this.bidet = roomData.bidet;
        this.bedSize = roomData.bedSize;
        this.numBeds = roomData.numBeds;
        this.costPerNight = roomData.costPerNight;
        // "number": 1,
        // "roomType": "residential suite",
        // "bidet": true,
        // "bedSize": "queen",
        // "numBeds": 1,
        // "costPerNight": 358.4
//be mindful that these are only set up this way to be as dynamic as possible
//in future iterations, it may be beneficial to make the Number, numBeds, bidet, 
//and this.costPerNight -(REFER TO DATA COMMENTED OUT RIGHT NOW TO SEE WHAT DATA WE USE FOR TEST)
//their own dataSet/param needing to go through the constructor rather than the roomData
    }
    // calculateTotalDollarsSpent(){
    //     let customer = new Customer(customerData);
    //     console.log(customer.bookings)
    //     return customer.bookings.reduce((totalAmountSpent, currBooking) => {
    //         if(currBooking.roomNumber === this.number)
    //         totalAmountSpent += this.costPerNight
    //         return totalAmountSpent
    //     }, 0)
    //     //and room.costPerNight -(REFER TO DATA COMMENTED OUT RIGHT NOW TO SEE WHAT DATA WE USE FOR TEST)
    // }
}
// console.log(this.calculateTotalDollarsSpent())

export default Room