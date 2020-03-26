async function getData() {
  fetch("https://api.covid19india.org/data.json")
    .then(response => response.json())
    .then(data => {
      var myStringArray = data.tested;
      for (let index = 0; index < myStringArray.length; index++) {
        h = (data.tested[index].updatetimestamp).slice(0, 4)
        g.push(h)
        i = (data.tested[index].totalpositivecases)
        y.push(i)
        k = (data.tested[index].totalsamplestested)
        l.push(k)
      }

      var myArray = data.cases_time_series;
      for (let index = 0; index < myArray.length; index++) {
        n = (data.cases_time_series[index].date).slice(0, 6)
        m.push(n)
        x = (data.cases_time_series[index].dailyconfirmed)
        z.push(x)
        j = (data.cases_time_series[index].dailyrecovered)
        v.push(j)
        we = (data.cases_time_series[index].dailydeceased)
        ew.push(we)
        bn = (data.cases_time_series[index].totalconfirmed)
        nm.push(bn)
        zx = (data.cases_time_series[index].totalrecovered)
        xz.push(zx)
        km = (data.cases_time_series[index].totaldeceased)
        mk.push(km)
      }
      ok = (data.statewise[0].confirmed)
      ko.push(ok)
    })


  fetch("https://covid2019-api.herokuapp.com/v2/total")
    .then(response => response.json())
    .then(data => {
      nh = (data.data.confirmed)
      hn.push(nh)
    })
}