import chai from 'chai';
import Booking from '../src/classes/bookings';
import Room from '../src/classes/rooms';
import bookingData from '../src/data/bookingsData';
import roomData from '../src/data/roomData';
const expect = chai.expect;

describe('Booking Info', () => {
    let booking;
    beforeEach(() => {
        booking = new Booking(bookingData[2])
    });

    it('should be a function', function() {
        expect(Booking).to.be.a('function');
    });    

    it('should be an instance of Booking', function() {
        expect(booking).to.be.an.instanceOf(Booking);
    });

    it('should have an ID', () => {
        expect(booking.id).to.equal('5fwrgu4i7k55hl6t6');
    });
    
    it('should have an userID', () => {
        expect(booking.userID).to.equal(1);
    });
    
    it('should have an date', () => {
        expect(booking.date).to.equal('2022/01/10');
    });
    
    it('should have a roomNumber', () => {
        expect(booking.roomNumber).to.equal(3);
    });
    
    it('should match room number with booking number', () => {
        booking.getRoomInfo(roomData);
        expect(booking.roomDetails).to.be.an.instanceOf(Room);
        expect(booking.roomDetails.number).to.equal(3);
    });

    it('should have number to match booking number', () => {
        expect(booking.roomDetails).to.equal();
    });
});