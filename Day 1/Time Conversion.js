function timeConversion(s) {
    const timeParts = s.split(":");
    const hour = parseInt(timeParts[0]);
    const minute = timeParts[1];
    const second = timeParts[2].substring(0, 2); 
    
    if (s.includes("PM") && hour !== 12) {
        return (hour + 12) + ":" + minute + ":" + second;
    } else if (s.includes("AM") && hour === 12) {

        return "00:" + minute + ":" + second;
    } else {

        return (hour < 10 ? "0" : "") + hour + ":" + minute + ":" + second;
    }
}