google.charts.load('current', {
  'packages': ['bar']
});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['', 'Pilates', 'Aerobics', 'Box'],
    ['10', 29, 110, 23],
    ['11', 70, 40, 29],
    ['12', 45, 35, 100],
    ['13', 90, 64, 35],
    ['14', 36, 90, 39],
    ['15', 20, 36, 53],
    ['16', 10, 54, 87],
    ['17', 20, 36, 53],
    ['18', 20, 36, 53],
    ['19', 20, 36, 53],
  ]);

  var options = {
    isStacked: true,
    bars: 'vertical',
    vAxis: {
      format: 'decimal',
      gridlines: {
        color: 'transparent'
      }
    },
    height: 230,
    colors: ['#1e096e', '#d82f38', '#e6e95a']
  };

  var chart = new google.charts.Bar(document.getElementById('chart_div'));

  chart.draw(data, google.charts.Bar.convertOptions(options));

}