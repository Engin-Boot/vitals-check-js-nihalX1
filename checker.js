var utilities = require('./utilityFunctions.js');

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

//console.log(findAbnormalVital(100,95,20));

module.exports = {
    vitalsAreOk: vitalsAreOk,
    findAbnormalVital: findAbnormalVital
}
