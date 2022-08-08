import chai from 'chai';
import Customer from '../src/classes/customers';
import customerData from '../src/data/customersData';
import bookingData from '../src/data/bookingsData';
import roomData from '../src/data/roomData';
import Booking from '../src/classes/bookings';
const expect = chai.expect;

describe('Customer Info', () => {
    let customer;
    let bookingInfo;
    beforeEach(() => {
        bookingInfo = bookingData.map(booking => new Booking(booking))
        customer = new Customer(customerData[0], bookingData, roomData)
    })

    it('should be a function', () => {
        expect(Customer).to.be.a('function');
    });   

    it('should be an instance of Customer', () => {
    expect(customer).to.be.an.instanceOf(Customer);
    });

    it('should have an id', () => {
        expect(customer.id).to.equal(1)
    });

    it('should have a name', () => {
        expect(customer.name).to.equal('Leatha Ullrich')
    });

    it('should be able to keep track of bookings', () => {
        expect(customer.bookingHistory).to.deep.equal([]);
    });
    
    it('should be able to add a booking to booking history', () => {
        customer.getCustomerBookingHistory(bookingData, roomData);
        expect(customer.bookingHistory).to.deep.equal([
             {
              id: '5fwrgu4i7k55hl6sz',
              userID: 1,
              date: '2022/04/22',
              roomNumber: 7,
              roomDetails: {
                number: 7,
                roomType: 'single room',
                bidet: true,
                bedSize: 'queen',
                numBeds: 2,
                costPerNight: 340.17
              }
            },
             {
              id: '5fwrgu4i7k55hl6t5',
              userID: 1,
              date: '2022/01/24',
              roomNumber: 2,
              roomDetails: {
                number: 2,
                roomType: 'suite',
                bidet: false,
                bedSize: 'full',
                numBeds: 2,
                costPerNight: 477.38
              }
            },
            {
              id: '5fwrgu4i7k55hl6t6',
              userID: 1,
              date: '2022/01/10',
              roomNumber: 3,
              roomDetails: {
                number: 3,
                roomType: 'single room',
                bidet: false,
                bedSize: 'king',
                numBeds: 1,
                costPerNight: 491.14
              }
            }
          ]);
    });
    it('should calculate the total money spent on bookings per customer', function(){
        customer.getCustomerBookingHistory(bookingData, roomData)
        expect(customer.calculateTotalDollarsSpent()).to.equal('1,308.69');
    });
});