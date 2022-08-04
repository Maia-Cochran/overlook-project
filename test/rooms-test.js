import chai from 'chai';
import Room from '../src/classes/rooms';
import roomData from '../src/data/roomData';
const expect = chai.expect;

describe('Room Info', () => {
//global variables:
    let room;
    let roomData;
    beforeEach(() => {
        room = new Room(roomData)
    })

    it('should be a function', function() {
    expect(Room).to.be.a('function');
    });    
    it('should be an instance of Room', function() {
        expect(room).to.be.an.instanceOf(Room);

    });
});