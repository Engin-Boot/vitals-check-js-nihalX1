
function checkAll1(bpm, spo2, respRate){
    return (!checkBpm(bpm) || !checkSpo2(spo2) || !checkResprate(respRate));
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

function findHighOrLowBpm(bpm){
    if(bpm < 70) {
        return "low";
    }
    else if(bpm > 150){
        return "high";
    }
}

function findHighOrLowSpo2(spo2){
    if(spo2 < 90) {
        return "low";
    }
}

function findHighOrLowResprate(respRate){
    if(respRate < 30) {
        return "low";
    }
    else if(respRate > 95){
        return "high";
    }
}

module.exports = {
    checkBpm: checkBpm,
    checkResprate: checkResprate,
    checkSpo2: checkSpo2,
    checkAll1: checkAll1,
    findHighOrLowBpm: findHighOrLowBpm,
    findHighOrLowSpo2: findHighOrLowSpo2,
    findHighOrLowResprate: findHighOrLowResprate

}