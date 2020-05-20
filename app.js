console.log("app js is running");
//  Initialize 'Help' tooltip.
$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

// 'Next button'
$("#calculate").click(function () {
  const pax = parseInt($("#participants").val());
  const avgAnnualSales = $("#avgAnnualSales").val();

  console.log(pax, avgAnnualSales);

  $("#form-wrapper").css("display", "none");
  $("#roi-results").css("display", "block");
});
