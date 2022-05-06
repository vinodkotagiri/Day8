





const url="https://restcountries.com/v3.1/all";
let countries;

fetch(url)
.then(response=>response.json())
.then(data=>initialize(data))
.catch(error=>console.log(`Error: ${error}`))

function initialize(countriesData){
    countries = countriesData;
   console.log(countries.map((country)=>country.name["common"]));

   //Get all the countries from Asia continent /region using Filter function
   console.log(countries.filter((country)=>country.region==="Asia").map(country=>country.name["common"]));
   
   // Get all the countries with a population of less than 2 lakhs using Filter function
   console.log(countries.filter((country)=>country.population<200000).map(country=>country.name["common"]));
   
   // Print the following details name, capital, flag using forEach function
   countries.forEach((country)=>{
       console.log(country.name["common"]);
       console.log(country.capital);
       console.log(country.flag);
   });

   // Print the total population of countries using reduce function
   population=[];
   countries.forEach((country)=>{
    population.push(country.population);
   });

   console.log(population.reduce((a,b)=>a+b));   

   // Print the country which uses US Dollars as currency.
   
   countries.forEach((country)=>{
       if(country.currencies!=undefined && "USD" in country.currencies )
       console.log(country.name["common"]);
   })
}


