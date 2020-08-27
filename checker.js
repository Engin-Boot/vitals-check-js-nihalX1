var utilities = require('./utilityFunctions.js');
const { checkAll1 } = require('./utilityFunctions.js');
const expect = require('chai').expect;

function vitalsAreOk(bpm, spo2, respRate) {
    if( checkAll1(bpm, spo2, respRate) ){
        return false;
    }
    return true;
}


expect(vitalsAreOk(100, 95, 70)).to.be.true;
expect(vitalsAreOk(50, 95, 70)).to.be.false;

console.log('checker is done');
