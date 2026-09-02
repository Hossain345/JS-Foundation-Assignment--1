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

console.log(describeValue("hello"));  //string | truthy
console.log(describeValue("")); // string | falsy
console.log(describeValue(25)); // number | truthy
console.log(describeValue(0)); // number | falsy
console.log(describeValue(true)); // boolean | truthy
console.log(describeValue(undefined)); // undefined | falsy
//watch out for these three...
console.log(describeValue("0")); // string | truthy
console.log(describeValue(NaN)); // number | falsy
console.log(describeValue(null)); // object | falsy


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

console.log(getDayType("Friday")); // Weekend
console.log(getDayType("friday")); // Weekend
console.log(getDayType("MONDAY")); // Working Day
console.log(getDayType("Bandarban")); // Invalid Day


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

console.log(validateUsername("rahim123")); // Available
console.log(validateUsername("ab")); // Too Short
console.log(validateUsername("a b")); // Too Short
console.log(validateUsername("abcd")); // Available
console.log(validateUsername("rahim islam")); // No Space Allowed
console.log(validateUsername("superadmin99")); // Reserved Word
console.log(validateUsername("Admin_Rahim")); // Reserved Word


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

console.log(getCngFare(2)); // 50
console.log(getCngFare(1)); // 50
console.log(getCngFare(5)); // 95
console.log(getCngFare(10)); // 170
console.log(getCngFare(5, false, 10)); // 115
console.log(getCngFare(5, true)); // 114
console.log(getCngFare(5, true, 10)); // 138


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

console.log(getChaseVerdict(200, 200, 12)); // Won
console.log(getChaseVerdict(200, 190, 0)); // Lost
console.log(getChaseVerdict(100, 90, 12)); // Need 10 runs in 12 balls | Comfortable
console.log(getChaseVerdict(100, 80, 12)); // Need 20 runs in 12 balls | Tough
console.log(getChaseVerdict(100, 70, 12)); // Need 30 runs in 12 balls | Almost Impossible
console.log(getChaseVerdict(150, 149, 1)); // Need 1 runs in 1 balls | Comfortable

