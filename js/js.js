fetch("https://api.rootnet.in/covid19-in/unofficial/covid19india.org/statewise")
.then(response => response.json())
.then(data => {
    const {confirmed,recovered,active,deaths} = data.data.total;
    document.getElementById("total").innerHTML=confirmed; 
    document.getElementById("Indian").innerHTML=active; 
    document.getElementById("Discharged").innerHTML=recovered; 
    document.getElementById("Deaths").innerHTML=deaths; 
})


fetch("https://api.rootnet.in/covid19-in/unofficial/covid19india.org/statewise")
.then(response => response.json())
.then(data => {
var myStringArray = data.data.statewise;
var arrayLength = myStringArray.length;
for (var i = 0; i < arrayLength; i++) {
  //  console.log(myStringArray[i]);
    const {state,confirmed,recovered,deaths,active} = myStringArray[i];
    console.log(state,confirmed,recovered,deaths,active);

}
//const {state,active} = data.data.statewise[0];
// console.log(state,active)
} )