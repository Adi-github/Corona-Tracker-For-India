fetch("https://api.rootnet.in/covid19-in/unofficial/covid19india.org/statewise")
  .then(response => response.json())
  .then(data => {
    const {
      confirmed,
      recovered,
      active,
      deaths
    } = data.data.total;
    document.getElementById("total").innerHTML = confirmed;
    document.getElementById("Indian").innerHTML = active;
    document.getElementById("Discharged").innerHTML = recovered;
    document.getElementById("Deaths").innerHTML = deaths;
  })


setTimeout(function () {
  window.location.reload(1);
}, 900000);


$("#mapid2").hide();

$(document).ready(function () {
  $("#mode").click(function () {
    $("html").toggleClass("light");
    $("body").toggleClass("light");
    $("h6").toggleClass("lighth6");
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

  });
});


$(document).ready(function () {
  $.getJSON("https://api.rootnet.in/covid19-in/unofficial/covid19india.org", function (data) {
      $('#data-table').DataTable({
          "data": data.data.rawPatientData,
          columns: [{
                  "data": "patientId",
                  "defaultContent": "<i>Not Available</i>"
              },
              {
                  "data": "gender",
                  "defaultContent": "<i>Not Available</i>"
              },
              {
                  "data": "city",
                  "defaultContent": "<i>Not Available</i>"
              },
              {
                  "data": "state",
                  "defaultContent": "<i>Not Available</i>"
              },
              {
                  "data": "status",
                  "defaultContent": "<i>Not Available</i>"
              },
              {
                  "data": "notes",
                  "defaultContent": "<i>Not Available</i>"
              }
          ]
      });
  });
});

$(document).ready(function () {
  $.getJSON("https://api.rootnet.in/covid19-in/unofficial/covid19india.org/statewise", function (data) {
      $('#dat-table').DataTable({
          "data": data.data.statewise,
          columns: [{
                  "data": "state",
                  "defaultContent": "<i>Not Available</i>"
              },
              {
                  "data": "confirmed",
                  "defaultContent": "<i>Not Available</i>"
              },
              {
                  "data": "recovered",
                  "defaultContent": "<i>Not Available</i>"
              },
              
              {
                  "data": "active",
                  "defaultContent": "<i>Not Available</i>"
              },
              {
                  "data": "deaths",
                  "defaultContent": "<i>Not Available</i>"
              }
      ],


      
      "order" : [[ 1, "desc" ]]
      });
  });
});