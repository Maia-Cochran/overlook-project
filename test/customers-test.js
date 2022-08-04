import chai from 'chai';
import Booking from '../src/classes/bookings';
import customerData from '../src/data/customerData';
const expect = chai.expect;

describe('Customer Info', () => {
//global variables:
    let customer;
    let customerData;
    beforeEach(() => {
        customer = new Booking(customerData)
    })

    it('should be a function', function() {
    expect(Customer).to.be.a('function');
    });    
    it('should be an instance of Booking', function() {
        expect(customer).to.be.an.instanceOf(Customer);

    });
});