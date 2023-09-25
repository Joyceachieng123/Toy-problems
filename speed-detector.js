function demeritPoint(speed){
 // Define the speed limit and the rate at which demerit points are awarded.
const speedLimit = 70;
    const kmPerDemeritPoint = 5;
    const maxDemeritPoints = 12;

// Check if the car's speed is within the legal limit.
if(speed <= 70) {
    console.log("Ok");
    return;
}
// Calculate the number of demerit points based on the speed.
const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);

// Check the number of demerit points the driver has accumulated using if condition.
if (demeritPoints > maxDemeritPoints) {
    console.log("License suspended");
} else {
    console.log(`Points: ${demeritPoints}`);
}
}
//call the demeritpoint function
demeritPoint();