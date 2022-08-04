import chai from 'chai';
import Customer from '../src/classes/customers';
// import customerData from '../src/data/customerData';
const expect = chai.expect;

describe('Customer Info', () => {
//global variables:
    let customer;
    let customerData;
    beforeEach(() => {
        customerData = {
                "id": 3,
                "name": "Kelvin Schiller"
        } 
        customer = new Customer(customerData.id, customerData.name)
    })

    it('should be a function', function() {
    expect(Customer).to.be.a('function');
    });    
    it('should be an instance of Customer', function() {
        expect(customer).to.be.an.instanceOf(Customer);

    });
});