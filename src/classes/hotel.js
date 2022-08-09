class Hotel {
    constructor(bookingData, customerData, roomData){
        this.allBookings = bookingData;
        this.allCustomers = customerData;
        this.allRooms = roomData;
    }
    findAvailableRooms(date){
        let availableRooms = [...this.allRooms]
        let bookingDates = this.allBookings.filter(booking => booking.date === date.split('-').join('/'))
        bookingDates.forEach(bookedRoom => {
            let found = availableRooms.map(room => room.number).indexOf(bookedRoom.roomNumber)
            availableRooms.splice(found, 1)
        })
       return availableRooms
    }
    filterRoomsByType(type, date){
        let result = this.findAvailableRooms(date)
        let filtered = result.filter(room => room.roomType === type)
        return filtered
    } 
}

export default Hotel