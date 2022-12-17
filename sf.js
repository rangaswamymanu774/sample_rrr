function weekname(day){
    switch(day){
        case "Mon":
            console.log("Monday");
            break
        case "Tue":
            console.log("Tuesday");
            break
        case "Wed":
            console.log("Wednesday");
            break
        case "Thu":
            console.log("Thursday");
            break
        case "Fri":
            console.log("Friday");
            break
        case "sat":
            console.log("Saturday");
            break
        case "Sun":
            console.log("Sunday");
            break
        default:
                console.log("Error")
    }

}
weekname("Tue")