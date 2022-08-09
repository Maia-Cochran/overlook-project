import chai from 'chai';
import Booking from '../src/classes/bookings';
import bookingData from '../src/data/bookingsData';
import Customer from '../src/classes/customers';
import customerData from '../src/data/customersData';
import Room from '../src/classes/rooms';
import roomData from '../src/data/roomData';
import Hotel from '../src/classes/hotel';
const expect = chai.expect;

describe('Hotel Info', function() {
    let hotel;
    let hotelInfo;
    let customer;
    let room;
    let booking;
    let date;
    beforeEach(() => {
        room = new Room(roomData);
        customer = new Customer(customerData);
        booking = new Booking(bookingData);
        hotel = new Hotel(bookingData, customerData, roomData);
    })

    it('should be a function', () => {
        expect(Hotel).to.be.a('function');
    });   

    it('should be an instance of Hotel', () => {
    expect(hotel).to.be.an.instanceOf(Hotel);
    });

    it('should have all bookings, customers, and rooms', () => {
        expect(hotel.allBookings).to.equal(bookingData);
        expect(hotel.allCustomers).to.equal(customerData);
        expect(hotel.allRooms).to.equal(roomData);
    });

    it('should be able to track which rooms are availabile', () => {
        expect(hotel.findAvailableRooms("2022/04/22").length).to.equal(4);
    });

    it('should be able to filter the list of available rooms by their roomType property', () => {
        expect(hotel.filterRoomsByType('residential suite', "2022/04/22").length).to.equal(1)
        expect(hotel.filterRoomsByType('residential suite', "2022/04/22")).to.deep.equal([
            {
              number: 1,
              roomType: 'residential suite',
              bidet: true,
              bedSize: 'queen',
              numBeds: 1,
              costPerNight: 358.4
            }
          ]);
    });
});
