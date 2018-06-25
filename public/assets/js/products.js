var cost= +($('#price').text());
$('#plus').click(function(){
  var value = +($('#num').val());
  $('#num').val(value + 1);

  if ($("#min").is(':disabled')) {
    $("#min").prop("disabled", false);
  }
   var price_num= +($('#num').val())*cost;
  $('#price').html(price_num);
})

$('#min').click(function(){
  var value = +($('#num').val());
  if ((value - 1) === 0) {
      $("#min").prop("disabled", true);
      return false;
  }
  $('#num').val(value - 1);
  var price_num= +($('#num').val())*cost;
 $('#price').html(price_num);
})

