class Hotel {
    constructor(bookingData, customerData, roomData){
        this.allBookings = bookingData;
        this.allCustomers = customerData;
        this.allRooms = roomData;
        // this.availableRooms = [];
    }
    findAvailableRooms(date){
        let availableRooms = [...this.allRooms]
        let bookingDates = this.allBookings.filter(booking => booking.date === date.split('-').join('/'))
        bookingDates.forEach(bookedRoom => {
            let found = availableRooms.map(room => room.number).indexOf(bookedRoom.roomNumber)
            // console.log('FOUND', found)
            availableRooms.splice(found, 1)
        })
       return availableRooms
    }
    filterRoomsByType(type, date){
        let result = this.findAvailableRooms(date)
        let filtered = result.filter(room => room.roomType === type)
        // console.log('FILTERED', result)
        return filtered
    } 
}

export default Hotel