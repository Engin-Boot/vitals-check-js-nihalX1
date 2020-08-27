var utilities = require('./utilityFunctions.js');
const expect = require('chai').expect;

function vitalsAreOk(bpm, spo2, respRate) {
    return utilities.isAllVitalsFine(bpm, spo2, respRate);
}

function findAbnormalVital(bpm, spo2, respRate){
    let vitalStatus = "";

    vitalStatus += "BPM "+utilities.findHighOrLowBpm(bpm)+"\n";
    vitalStatus += "RespRate "+ utilities.findHighOrLowResprate(respRate)+"\n";;
    vitalStatus += "Spo2 "+ utilities.findHighOrLowSpo2(spo2)+"\n";;

    return vitalStatus;
}

console.log(findAbnormalVital(100,95,20));
expect(vitalsAreOk(100, 95, 70)).to.be.true;
expect(vitalsAreOk(50, 95, 70)).to.be.false;
expect(vitalsAreOk(50, 80, 20)).to.be.false;//all fail
expect(vitalsAreOk(200, 80, 20)).to.be.false;//all fail
expect(vitalsAreOk(50, 80, 100)).to.be.false;//all fail
expect(vitalsAreOk(200, 80, 100)).to.be.false;//all fail
expect(vitalsAreOk(100, 80, 50)).to.be.false;//2nd fails
expect(vitalsAreOk(100, 80, 50)).to.be.false;//2nd fails
expect(vitalsAreOk(100, 95, 20)).to.be.false;//3rd fails
expect(vitalsAreOk(100, 95, 100)).to.be.false;//3rd fails
expect(vitalsAreOk(200, 95, 70)).to.be.false;//1st fails
expect(vitalsAreOk(50, 80, 70)).to.be.false;//1 and 2 fails
expect(vitalsAreOk(200, 80, 70)).to.be.false;//1 and 2 fails
expect(vitalsAreOk(50, 95, 20)).to.be.false;//1 and 3 fails
expect(vitalsAreOk(200, 95, 20)).to.be.false;//1 and 3 fails
expect(vitalsAreOk(50, 95, 100)).to.be.false;//1 and 3 fails
expect(vitalsAreOk(200, 95, 100)).to.be.false;//1 and 3 fails

console.log('checker is done');
