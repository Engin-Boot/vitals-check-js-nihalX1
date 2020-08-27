var utilities = require('./utilityFunctions.js');
const expect = require('chai').expect;

function vitalsAreOk(bpm, spo2, respRate) {
    if( !utilities.checkBpmAndSpo2(bpm, spo2) || !utilities.checkResprate(respRate) ){
        return false;
    }
    return true;
}


expect(vitalsAreOk(100, 95, 70)).to.be.true;
expect(vitalsAreOk(50, 95, 70)).to.be.false;

console.log('checker is done');
