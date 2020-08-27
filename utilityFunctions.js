
function isAllVitalsFine(bpm, spo2, respRate){
    return !(!isBpmFine(bpm) || !isSpo2Fine(spo2) || !isResprateFine(respRate));
}

function isBpmFine(bpm){
    if(bpm < 70 || bpm > 150) {
        return false;
    }
    return true;
}
function isSpo2Fine(spo2){
    if(spo2 < 90) {
        return false;
    }
    return true;
}
function isResprateFine(respRate){
    if(respRate < 30 || respRate > 95) {
        return false;
    }
    return true;
}

function findHighOrLowBpm(bpm){
    if(bpm < 70) {
        return "low";
    }
    else if(bpm > 150){
        return "high";
    }
    else{
        return "normal";
    }
}

function findHighOrLowSpo2(spo2){
    if(spo2 < 90) {
        return "low";
    }
    else{
        return "normal";
    }
}

function findHighOrLowResprate(respRate){
    if(respRate < 30) {
        return "low";
    }
    else if(respRate > 95){
        return "high";
    }
    else{
        return "normal";
    }
}

module.exports = {
    isBpmFine: isBpmFine,
    isResprateFine: isResprateFine,
    isSpo2Fine: isSpo2Fine,
    isAllVitalsFine: isAllVitalsFine,
    findHighOrLowBpm: findHighOrLowBpm,
    findHighOrLowSpo2: findHighOrLowSpo2,
    findHighOrLowResprate: findHighOrLowResprate

}