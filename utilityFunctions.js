
let bpm_limits = [70, 150];
let spo2_limits = [90, 200];
let respRate_limits = [30 , 95];

function isAllVitalsFine(bpm, spo2, respRate){
    return !(!isBpmFine(bpm) || !isSpo2Fine(spo2) || !isRespRateFine(respRate));
}

function isBpmFine(bpm)
{
    return isVitalLimitsFine(bpm, bpm_limits[0], bpm_limits[1]);
}
function isSpo2Fine(spo2)
{
    return isVitalLimitsFine(spo2, spo2_limits[0], spo2_limits[1])
}
function isRespRateFine(respRate)
{
    return isVitalLimitsFine(respRate, respRate_limits[0], respRate_limits[1])
}
function isVitalLimitsFine(value , low, high){
   return (value >= low && value <= high)
}

function findVitalHighOrLow(value, low, high){
    if(value < low) {
        return "low";
    }
    else if(value > high){
        return "high";
    }
    else{
        return "normal";
    }
}

function findHighOrLowBpm(bpm){
    return findVitalHighOrLow(bpm, bpm_limits[0], bpm_limits[1]);
}

function findHighOrLowSpo2(spo2){
    return findVitalHighOrLow(spo2, spo2_limits[0], spo2_limits[1]);
}

function findHighOrLowResprate(respRate){
    return findVitalHighOrLow(respRate, respRate_limits[0], respRate_limits[1]);
}

module.exports = {
    isBpmFine: isBpmFine,
    isRespRateFine: isRespRateFine,
    isSpo2Fine: isSpo2Fine,
    isVitalLimitsFine: isVitalLimitsFine,
    isAllVitalsFine: isAllVitalsFine,
    findHighOrLowBpm: findHighOrLowBpm,
    findHighOrLowSpo2: findHighOrLowSpo2,
    findHighOrLowResprate: findHighOrLowResprate
}