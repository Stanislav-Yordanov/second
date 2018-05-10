function compoundInterest(values) {
    let sum=values[0];
    let interestRate=values[1]/100;
    let frequency=12/values[2];
    let years=values[3];

    let f=sum*Math.pow(1+interestRate/frequency,frequency*years);
    return Math.round(f*100)/100;
    
}
let outPut=compoundInterest([1500, 4.3, 3, 6]);
console.log(outPut);