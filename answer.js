//q1 solve...
function describeValue(any_value){
    let result;

    if(any_value){
        result = "truthy";
    }else{
        result = "falsy";
    }
    return  `${typeof any_value} | ${result}`;
}

console.log(describeValue("hello"));
console.log(describeValue(""));
console.log(describeValue(25));
console.log(describeValue(0));
console.log(describeValue(true));
console.log(describeValue(undefined));
//watch out for these three...
console.log(describeValue("0"));
console.log(describeValue(NaN));
console.log(describeValue(null));

