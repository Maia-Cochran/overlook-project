class Room {
    constructor(roomData) {
        this.roomNumber = roomData.roomNumber;
        this.roomType = roomData.roomType;
        this.bidet = roomData.bidet;
        this.bedSize = roomData.bedSize;
        this.numBeds = roomData.numbeds;
        this.costPerNight = roomData.costPerNight;
        // "number": 1,
        // "roomType": "residential suite",
        // "bidet": true,
        // "bedSize": "queen",
        // "numBeds": 1,
        // "costPerNight": 358.4
//be mindful that these are only set up this way to be as dynamic as possible
//in future iterations, it may be beneficial to make the Number, numBeds, bidet, 
//and this.costPerNight -(REFER TO DATA COMMENTED OUT RIGHT NOW TO SEE WHAT DATA WE USE FOR TEST)
//their own dataSet/param needing to go through the constructor rather than the roomData
    };
}

export default Room