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
for (let index = 0; index < t.rows.length; index++) {
  for (let d = 0; d < t.rows[index].cells.length; d++) {
    t.rows[index+1].cells[0].innerHTML = myStringArray[index].state;
    t.rows[index+1].cells[1].innerHTML = myStringArray[index].confirmed;
    t.rows[index+1].cells[2].innerHTML = myStringArray[index].recovered;
    t.rows[index+1].cells[3].innerHTML = myStringArray[index].deaths;
    t.rows[index+1].cells[4].innerHTML = myStringArray[index].active;
  }
  
}

} )

setTimeout(function(){
   window.location.reload(1);
}, 900000);


$("#mapid2").hide();

$(document).ready(function(){
$(function() {
  $("#mode").click(function() {
    $("body").toggleClass("light");
    $("#mapid2").toggle();
    $("#mapid").toggle();
    
    $("#t").toggleClass("design");
    $("#i").toggleClass("design");
    $("#t").toggleClass("design1");
    $("#i").toggleClass("design1");
    
    $("#ds").toggleClass("design");
    $("#d").toggleClass("design");
    $("#d").toggleClass("design1");
    $("#ds").toggleClass("design1");

    
    $("#o").toggleClass("design");
    $("#p").toggleClass("design");
    $("#o").toggleClass("design1");
    $("#p").toggleClass("design1");




    $("#map_div").load(window.location.href + " #map_div" );

  });});
});


