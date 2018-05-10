function getValues(values) {
    let v1=values[0];
    let v2=values[1];
    let timeInSec=values[2];
        let timeInHours=timeInSec/3600;
    let dis1=v1*timeInHours;
    let dis2=v2*timeInHours;
    let delta=Math.abs(dis1-dis2);
    console.log(delta*1000);
}
let arr=[5, -5, 40];
getValues(arr);