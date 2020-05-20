console.log("app js is running");

$("#calculate").click(function () {
  const pax = $("#participants").val();
  console.log(pax);

  $("#form-wrapper").css("display", "none");
});
