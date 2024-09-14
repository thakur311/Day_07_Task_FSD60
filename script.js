//Q1 Get all the countries from Asia continent /region using Filter method.

var req=new XMLHttpRequest();
req.open('GET','https://restcountries.com/v3.1/all')
req.send()
req.onload=function(){
    var data=JSON.parse(req.response)
   //console.log(data)
  let res= data.filter((element)=>element.region==="Asia").map((element)=>element.name.common)
    console.log(res)

}

// Q2 Get all the countries with a population of less than 2 lakhs using Filter method.
 

var req=new XMLHttpRequest();
req.open('GET','https://restcountries.com/v3.1/all')
req.send()
req.onload=function(){
    var data=JSON.parse(req.response)
   //console.log(data)
  let res= data.filter((element)=>element.population<200000)
    console.log(res)
}

//Q3 Print the following details name, capital, flag, using forEach method


var req=new XMLHttpRequest();
req.open('GET','https://restcountries.com/v3.1/all')
req.send()
req.onload=function(){
    var data=JSON.parse(req.response)
   //console.log(data)
   data.forEach(country => {
   // console.log(`Name: ${country.name.common}`);
    //console.log(`Capital: ${country.capital }`);
    //console.log(`Flag: ${country.flag}`);
    //console.log('-------------------');
});
}



//Q4 Print the total population of countries using reduce method
 
var req=new XMLHttpRequest();
req.open('GET','https://restcountries.com/v3.1/all')
req.send()
req.onload=function(){
    var data=JSON.parse(req.response)
   //console.log(data)
   var usdCountries = data.filter(country => 
    country.currencies && country.currencies.USD
).map((element)=>element.name.common)
console.log(usdCountries)
};

