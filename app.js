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
