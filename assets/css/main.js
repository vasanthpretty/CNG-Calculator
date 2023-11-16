// logic for application
//Formula 
// trip distance (divided by) fuelefficiency *fuel cost = your estimated trip budget will be calculated

const distanceEl=document.getElementById("Trip_distance");
const efficienyEl=document.querySelector("#Fuel_Efficiency");
const costEl=document.querySelector("#Fuel_cost");
const btnEl=document.querySelector("#CalculateBtn");
const Form=document.querySelector("#my-form");



btnEl.addEventListener("click",(e)=>{
    if(distanceEl.value===""){
        alert("enter the trip distance to calculate the value");
    }

    else if(costEl.value===""){
alert("enter the Fuel Cost to calculate the value");

    }

    else {
        e.preventDefault();
    const DistanceKm=distanceEl.value;
    const FuelEff=efficienyEl.value;
    const FuelCost=costEl.value;
    
    const result= (DistanceKm / FuelEff)*FuelCost;
      
    alert("your estimated trip amount  "+Math.round(result) );
   
    //resetiing the form value
    Form.reset();
    } 
    
})


