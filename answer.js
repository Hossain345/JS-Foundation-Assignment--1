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


//q4 solve...[Dhaka CNG Fare Meter]
function getCngFare(distance, isNight=false, waitingMinutes=0){
    let fare=0;

    if (distance<=2){
        fare=50;
    }else if(distance>2){
        let extra_distance= distance-2;
        let extra_fare= extra_distance*15;

        fare =50+ extra_fare;
    }

    let waiting_fare= waitingMinutes*2;
    fare+= waiting_fare;

    if(isNight){
        fare*=(1.0+0.2);
    }
    return fare;
}

console.log(getCngFare(2));
console.log(getCngFare(1));
console.log(getCngFare(5));
console.log(getCngFare(10));
console.log(getCngFare(5, false, 10)); 
console.log(getCngFare(5, true));
console.log(getCngFare(5, true, 10));


//q5 solve...[Run  Chase Commentator]
const getChaseVerdict = (target, score, ballsLeft) => {
    let runsneeded= target-score;

    if(runsneeded<=0){
        return "Won";
    }
    if(ballsLeft<=0){
        return "Lost";
    }

    let requiredRate= (runsneeded/ballsLeft) * 6;
    let verdict;
    if(requiredRate<=6){
        verdict="Comfortable"
    }else if(requiredRate<=12){
        verdict= "Tough";
    }else{
        verdict= "Almost Impossible";
    }

    return `Need ${runsneeded} runs in ${ballsLeft} balls | ${verdict}`;
};

console.log(getChaseVerdict(200, 200, 12));
console.log(getChaseVerdict(200, 190, 0));
console.log(getChaseVerdict(100, 90, 12));
console.log(getChaseVerdict(100, 80, 12));
console.log(getChaseVerdict(100, 70, 12));
console.log(getChaseVerdict(150, 149, 1));


