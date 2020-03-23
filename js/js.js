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
var t = document.getElementById("table");
/*for (var i = 0; i < arrayLength; i++) {
  //  console.log(myStringArray[i]);
    const {state,confirmed,recovered,deaths,active} = myStringArray[i];
    //console.log(state,confirmed,recovered,deaths,active);
 
}*/
for (let index = 1; index < t.rows.length; index++) {
  for (let d = 0; d < t.rows[index].cells.length; d++) {
    t.rows[index].cells[0].innerHTML = myStringArray[index].state;
    t.rows[index].cells[1].innerHTML = myStringArray[index].confirmed;
    t.rows[index].cells[2].innerHTML = myStringArray[index].recovered;
    t.rows[index].cells[3].innerHTML = myStringArray[index].deaths;
    t.rows[index].cells[4].innerHTML = myStringArray[index].active;
  }
  
}

} )


