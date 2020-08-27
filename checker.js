const expect = require('chai').expect;

function vitalsAreOk(bpm, spo2, respRate) {
    if( !checkBpm(bpm) || !checkSpo2(spo2) || !checkResprate(respRate) ){
        return false;
    }
    return true;
}

function checkBpm(bpm){
    if(bpm < 70 || bpm > 150) {
        return false;
    }
    return true;
}
function checkSpo2(spo2){
    if(spo2 < 90) {
        return false;
    }
    return true;
}
function checkResprate(respRate){
    if(respRate < 30 || respRate > 95) {
        return false;
    }
    return true;
}

expect(vitalsAreOk(100, 95, 70)).to.be.true;
expect(vitalsAreOk(50, 95, 70)).to.be.false;

console.log('checker is done');
