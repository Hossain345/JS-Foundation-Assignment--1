//q1 solve...[Value detection]
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


//q2 solve...[Bangladesh Weekend Machine]
function getDayType(day){
    day = day.toLowerCase();

    switch(day){
        case "friday" :
        case "saturday" :
            return "Weekend";

        case "sunday" :
        case "monday" :
        case "tuesday" :
        case "wednesday" :
        case "thursday" :
            return "Working Day";

        default :
            return "Invalid Day";  
    }
}

console.log(getDayType("Friday"));
console.log(getDayType("friday"));
console.log(getDayType("MONDAY"));
console.log(getDayType("Bandarban"));


