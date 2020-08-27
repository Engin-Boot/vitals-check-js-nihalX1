
function checkBpmAndSpo2(bpm, spo2){
    if(bpm < 70 || bpm > 150 || spo2<90) {
        return false;
    }
    return true;
}
// function checkSpo2(spo2){
//     if(spo2 < 90) {
//         return false;
//     }
//     return true;
// }
function checkResprate(respRate){
    if(respRate < 30 || respRate > 95) {
        return false;
    }
    return true;
}

module.exports = {
    checkBpmAndSpo2: checkBpmAndSpo2,
    checkResprate: checkResprate
}