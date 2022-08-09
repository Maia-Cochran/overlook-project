import chai from 'chai';
import Room from '../src/classes/rooms';
// import roomData from '../src/data/roomData';
const expect = chai.expect;

describe('Room Info', () => {
//global variables:
    let room;
    let roomData;
    beforeEach(() => {
        roomData =   {
            "number": 1,
            "roomType": "residential suite",
            "bidet": true,
            "bedSize": "queen",
            "numBeds": 1,
            "costPerNight": 358.4,
          }
        room = new Room(roomData)
    })

    it('should be a function', function() {
    expect(Room).to.be.a('function');
    });    

    it('should be an instance of Room', function() {
        expect(room).to.be.an.instanceOf(Room);
    })

    it('should indicate room number, type, bed size, number of beds, cost per night, and whether it has a bidet', () => {
        expect(room.number).to.equal(1);
        expect(room.roomType).to.equal("residential suite");
        expect(room.bidet).to.equal(true);
        expect(room.bedSize).to.equal("queen");
        expect(room.numBeds).to.equal(1);
        expect(room.costPerNight).to.equal(358.4);
    });
    // it('should calculate total money spent of past bookings', ( ) => {
    //     room.calculateTotalDollarsSpent();
    //     expect(customer.totalDollarsSpent).to.equal()
    // });
});