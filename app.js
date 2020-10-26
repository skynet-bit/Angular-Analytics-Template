var app = angular.module("App", ["chart.js"]);
app.controller("chartsCtrl", function ($http) {
  var vt = this;

  //Line Chart
  vt.chartLineLabels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  vt.chartLineSeries = ["New Users", "Global Quizz Results in %"];

  vt.chartLineCharts = [0, 2, 3, 7, 3, 8, 5];

  vt.chartLineOptions = {
    maintainAspectRatio: false,
    responsive: true,
    
  };

  vt.chartLineColours = ["#f1c40f", "#ec7063"];

  // Pie Chart
  vt.chartPieLabels = ["Mobile", "Laptop"];
  vt.chartPieCharts = [75, 25];
  vt.chartPieOptions = {
    legend: {
      display: true,
      position: 'right'
    },
    maintainAspectRatio: true,
    responsive: true,
  };
  
  vt.chartPieColours = [" #2ecc71 ", " #5dade2"];

  // Donut Chart
  vt.chartDonutLabels = ["Chrome", "Firefox"];
  vt.chartDonutcharts = [40, 60];
  vt.chartDonutOptions = {
    legend: {
      display: true,
      position: 'right'
    },
    maintainAspectRatio: true,
    responsive: true,
  };
  vt.chartDonutColours = ["#f1c40f", "#ec7063"];
// Horizontal Chart
  vt.horChartlabels = ["25%", "30%", "35%", "40%", "45%", "50%", "55%"];
  vt.horChartseries = ["Series A", "Series B"];
  vt.horChartColours = ["#f1c40f", "#ec7063"];
  vt.horChartOptions = {
    legend: {
      display: true,
      position: 'top'
    },
  }
  vt.horChartdata = [
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90],
  ];
});
