fetch("https://api.rootnet.in/covid19-in/unofficial/covid19india.org/statewise")
.then(response => response.json())
.then(data => {
    const {confirmed,recovered,active,deaths} = data.data.total;
    document.getElementById("total").innerHTML=confirmed; 
    document.getElementById("Indian").innerHTML=active; 
    document.getElementById("Discharged").innerHTML=recovered; 
    document.getElementById("Deaths").innerHTML=deaths; 
})

/*
$(window).resize(function () {
    var viewportWidth = $(window).width();
    if (viewportWidth < 750) {
            $("#tdiv").removeClass("row");
            $("#rdiv").removeClass("row");
    }
    if (viewportWidth > 750) {
        $("#tdiv").addClass("row");
        $("#rdiv").addClass("row");
}
});*/