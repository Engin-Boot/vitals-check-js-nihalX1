
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

module.exports = {
    checkBpm: checkBpm,
    checkResprate: checkResprate,
    checkSpo2: checkSpo2
}