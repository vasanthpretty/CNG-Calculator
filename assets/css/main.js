// logic for application
//Formula 
// trip distance (divided by) fuelefficiency *fuel cost = your estimated trip budget will be calculated

const distanceEl=document.getElementById("Trip_distance");
const efficienyEl=document.querySelector("#Fuel_Efficiency");
const costEl=document.querySelector("#Fuel_cost");
const btnEl=document.querySelector("#CalculateBtn");



btnEl.addEventListener("click",(e)=>{
    e.preventDefault();
    const DistanceKm=distanceEl.value;
    const FuelEff=efficienyEl.value;
    const FuelCost=costEl.value;
    
    const result= (DistanceKm / FuelEff)*FuelCost;
    
    console.log(result);
    
})


