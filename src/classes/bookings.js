import Room from "./rooms";
class Booking {
    constructor(bookingData) {
        this.id = bookingData.id;
        this.userID = bookingData.userID;
        this.date = bookingData.date;
        this.roomNumber = bookingData.roomNumber;
        this.roomDetails;
    }
    getRoomInfo(roomData) {
    let roomAndBooking = roomData.find(room => room.number === this.roomNumber)
    this.roomDetails = new Room(roomAndBooking)
    }
}

export default Booking