fetch("https://api.rootnet.in/covid19-in/unofficial/covid19india.org/statewise")
  .then(response => response.json())
  .then(data => {
    const {
      confirmed,
      recovered,
      deaths
    } = data.data.total;
    document.getElementById("timet").innerHTML = data.data.lastRefreshed.toString().slice(11, 16);
    document.getElementById("total").innerHTML = confirmed;
    document.getElementById("Discharged").innerHTML = recovered;
    document.getElementById("Deaths").innerHTML = deaths;
    document.getElementById("ftr").innerHTML = (deaths / confirmed * 100).toString().slice(0, 4) + "%";
    document.getElementById("rr").innerHTML = (recovered / confirmed * 100).toString().slice(0, 4) + "%";
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
          "data": "ageEstimate",
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
      ],
      "lengthChange": false,
      "pageLength": 4,
      "bInfo": false
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



      "order": [
        [1, "desc"]
      ],
      "lengthChange": false,
      "pageLength": 5,
      "bInfo": false
    });
  });
});

$(document).ready(function () {
  $('.tabs').tabs();
});

jQuery(document).ready(function ($) {
  if ($('.quote-loop').length) {
    (function loop() {
      $('.quote-loop').each(function () {
        var $self = $(this);
        $self.parent().queue(function (n) {
          $self.fadeIn(1000).delay(3000).fadeOut(1000, n);
        });
      }).parent().promise().done(loop);
    }());
  }
});