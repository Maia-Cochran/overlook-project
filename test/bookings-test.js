import chai from 'chai';
import Booking from '../src/classes/bookings';
import bookingData from '../src/data/bookingData';
const expect = chai.expect;

describe('Booking Info', () => {
//global variables:
    let booking;
    let bookingData;
    beforeEach(() => {
        booking = new Booking(bookingData)
    })

    it('should be a function', function() {
    expect(Booking).to.be.a('function');
    });    
    it('should be an instance of Booking', function() {
        expect(booking).to.be.an.instanceOf(Booking);

    });
});