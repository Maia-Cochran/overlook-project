import chai from 'chai';
import Customer from '../src/classes/customers';
// import customerData from '../src/data/customerData';
const expect = chai.expect;

describe('Customer Info', () => {
//global variables:
    let customer;
    let customerData;
    let booking;
    beforeEach(() => {
        customerData = {
                "id": 3,
                "name": "Kelvin Schiller"
        } 
        customer = new Customer(customerData)
    })

    it('should be a function', () => {
        expect(Customer).to.be.a('function');
    });   

    it('should be an instance of Customer', () => {
    expect(customer).to.be.an.instanceOf(Customer);
    });

    it('should take in an customer id', () => {
        expect(customer.id).to.equal(3)
    });

    it('should take in an customer name', () => {
        expect(customer.name).to.equal('Kelvin Schiller')
    });

    it('should be able to keep track of previous and current bookings', () => {
        // expect(customer.pastBookings).to.deep.equal([]);
        // expect(customer.currentBookings).to.deep.equal([]);
        expect(customer.bookings).to.deep.equal([]);
    });
    
    it('should be able to add a booking to currentBookings', () => {
        customer.makeNewReservation(booking);
        expect(customer.bookings).to.deep.equal([booking]);
    });
    // ^^^^THIS SHOULD BE IN THE BOOKINGS PERHAPS???^^^^
});