/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
const props = {
  // velocity (km/h)
 velocity : {
  value: 10000,
  measurement: "km/h"
 }, 

 // acceleration (m/s^2)
 acceleration : {
  value: 3,
  measurement: "m/s^2"
},

// seconds (1 hour)
 time : {
  value: 3600,
  measurement: "s"
 },

// distance (km)
 distance : {
  value: 0, 
  measurement: "km"
 },

 // remaining fuel (kg)
 fuel : {
  value:5000, 
  measurement: "kg"
 },

 // fuel burn rate (kg/s)
 fuelBurnRate : {
  value: 0.5 ,
  measurement: "kg/s"
},
}

const newDistance = props.distance.value + (props.velocity.value*(props.time.value/3600)) //calcultes new distance

//calculates remaining fuelnode
const remainingFuel = props.fuelBurnRate.value*props.time.value
const newRemainingFuel = props.fuel.value - remainingFuel 


// Pick up an error with how the function below is called and make it robust to such errors
function calculateNewVelocity(props) { 

  const {velocity: {value: velocity}} = props;
  const {acceleration: {value: acceleration}} = props;
  const {time: {value: time}} = props;

  const {velocity: {measurement: velocityMeasurement}} = props;
  const {acceleration: {measurement: accelerationMeasurement}} = props;
  const {time: {measurement: timeMeasurement}} = props;

  const newAcceleration = acceleration* (3600 / 1000) //convert acceleration from m/s^2 to km/h^2

  if (typeof velocity !== 'number' || typeof acceleration !== 'number' ||typeof time !== 'number') {
    throw new Error ("Invalid input: Parameters must be numbers.");
  }

  if (velocityMeasurement !== "km/h" || accelerationMeasurement !== "m/s^2" || timeMeasurement !== "s") {
    throw new Error ("Invalid input: Correct measurement required.")
  }

  if (time < 0) {
    throw new Error ("Invalid input: Time cannot be negative.");
  }

  return velocity + (newAcceleration * time)
}

const newVelocity = calculateNewVelocity(props) //calculates new velocity based on acceleration


console.log(`Corrected New Velocity: ${newVelocity} km/h`);
console.log(`Corrected New Distance: ${newDistance} km`);
console.log(`Corrected Remaining Fuel: ${newRemainingFuel} kg`);






