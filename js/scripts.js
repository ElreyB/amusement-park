$(document).ready(function(){
  $("#check-height").submit(function(event){
    var heightInput = parseInt($("#height").val());

    if (heightInput >= 4) {
      $("p").show().removeClass("bg-info");
      // $("p").removeClass("bg-info");
    } else if (heightInput < 4) {
      $("p").show().removeClass("bg-danger");
      // $("p").removeClass("bg-danger");
    }
    event.preventDefault();
  });
});
