/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
const velocity = 10000; // velocity (km/h)
const acceleration = 3; // acceleration (m/s^2)
const time = 3600; // seconds (1 hour)
const distance = 0; // distance (km)
const fuel = 5000; // remaining fuel (kg)
const fuelBurnRate = 0.5; // fuel burn rate (kg/s)


const newDistance = distance + (velocity*(time/3600)) //calcultes new distance

const newAcceleration = (acceleration*3600) / 1000 //convert acceleration from m/s^2 to km/h^2

//calculates remaining fuel
const remainingFuel = fuelBurnRate*time 
const newRemainingFuel = fuel - remainingFuel 

const newVelocity = calcNewVel(acceleration, velocity, time) //calculates new velocity based on acceleration

// Pick up an error with how the function below is called and make it robust to such errors
function calcNewVel(velocity, acceleration, time) { 
  if (typeof velocity !== 'number' || typeof acceleration !== 'number' || typeof time !== 'number') {
    throw new Error ("Invalid input: Parameters must be numbers.");
  }
  if (time < 0) {
    throw new Error ("Invalid input: Time cannot be negative.");
  }
  return velocity + (newAcceleration * time)
}

console.log(`Corrected New Velocity: ${newVelocity} km/h`);
console.log(`Corrected New Distance: ${newDistance} km`);
console.log(`Corrected Remaining Fuel: ${newRemainingFuel} kg`);






