import chai from 'chai';
import Booking from '../src/classes/bookings';
// import bookingData from '../src/data/bookingData';
const expect = chai.expect;

describe('Booking Info', () => {
//global variables:
    let booking;
    let bookingData;
    beforeEach(() => {
        bookingData = {
            "id": "5fwrgu4i7k55hl6sz",
            "userID": 9,
            "date": "2022/04/22",
            "roomNumber": 15,
          }
        booking = new Booking(bookingData.id, bookingData.userId, bookingData.date, bookingData.roomNumber)
    });

    it('should be a function', function() {
    expect(Booking).to.be.a('function');
    });    
    it('should be an instance of Booking', function() {
        expect(booking).to.be.an.instanceOf(Booking);

    });
});