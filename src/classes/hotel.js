class Hotel {
    constructor(bookingData, customerData, roomData){
        this.allBookings = bookingData;
        this.allCustomers = customerData;
        this.allRooms = roomData;
    }
    findAvailableRooms(date){
        this.availableRooms = this.allRooms
        let bookingDates = this.allBookings.filter(booking => booking.date === date)
        bookingDates.forEach(bookedRoom => {
            let found = this.availableRooms.map(room => room.number).indexOf(bookedRoom.roomNumber)
            this.availableRooms.splice(found, 1)
        })
       return this.availableRooms
    }
    filterRoomsByType(type, date){
        let result = this.findAvailableRooms(date)
        let filtered = result.filter(room => room.roomType === type)
        this.availableRooms = filtered
        return this.availableRooms
    }
}

// .split('-').join('/')
export default Hotel