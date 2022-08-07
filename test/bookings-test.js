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
        booking = new Booking(bookingData)
    });

    it('should be a function', function() {
    expect(Booking).to.be.a('function');
    });    

    it('should be an instance of Booking', function() {
        expect(booking).to.be.an.instanceOf(Booking);
    });

    it('should have an ID, userID, date, and a roomNumber', function() {
        expect(booking.id).to.equal('5fwrgu4i7k55hl6sz');
        expect(booking.userID).to.equal(9);
        expect(booking.date).to.equal("2022/04/22");
        // ^^^REMEMBER LATER THAT THIS IS A STRING AND MAY NEED TO MANIPULATE LATER^^^
        expect(booking.roomNumber).to.equal(15);
    })
});