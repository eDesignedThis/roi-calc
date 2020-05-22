console.log("app js is running");

let stepText = $("#step-text");

stepText.html("Step <b>1</b> of 2");
//  Initialize 'Help' tooltip.
$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

// 'Next button'
$("#nextStep").click(function () {
  stepText.html("Step <b>2</b> of 2");
  const pax = parseInt($("#participants").val());
  const avgAnnualSales = $("#avgAnnualSales").val();

  console.log(pax, avgAnnualSales);

  $("#form-wrapper").css("display", "none");

  $("#roi-next-step").css("display", "block");
});

// Calculate Button'
$("#calculateRoi").click(function () {
  $("#roi-next-step").css("display", "none");
  $("#roi-results").css("display", "block");
});

// Chart

var dataSource = [
  {
    day: "Revenue Increase",
    oranges: 3,
  },
  {
    day: "Tuesday",
    oranges: 2,
  },
  {
    day: "Wednesday",
    oranges: 3,
  },
  {
    day: "Thursday",
    oranges: 4,
  },
  {
    day: "Friday",
    oranges: 6,
  },
  {
    day: "Saturday",
    oranges: 11,
  },
  {
    day: "Sunday",
    oranges: 4,
  },
];

$(function () {
  $("#chart").dxChart({
    dataSource: dataSource,
    series: {
      argumentField: "day",
      valueField: "oranges",
      name: "",
      type: "bar",
      color: "#ffaa66",
    },
  });
});
