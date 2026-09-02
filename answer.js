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


//q3 solve...[Username Gatekeeper]
function validateUsername(username){
    let length= username.length;
    let contain_space= username.includes(" ");
    let any_letter= username.toLowerCase().includes("admin");

    if(length<4){
        return "Too Short"
    }else if(contain_space){
        return "No Space Allowed"
    }else if(any_letter){
        return "Reserved Word"
    }else{
        return "Available"
    }
}

console.log(validateUsername("rahim123"));
console.log(validateUsername("ab"));
console.log(validateUsername("a b"));
console.log(validateUsername("abcd"));
console.log(validateUsername("rahim islam"));
console.log(validateUsername("superadmin99"));
console.log(validateUsername("Admin_Rahim"));



