var cost= parseFloat($('#price').text());
$(document).on('click', '#plus', function(event) {
  event.preventDefault();
   var value = parseInt($('#num').val());
   $('#num').val(value + 1);

   if ($("#min").is(':disabled')) {
     $("#min").prop("disabled", false);
   }
    var price_num= parseInt($('#num').val())*cost;
    var n = parseFloat(price_num); price_num = Math.round(n * 1000)/1000; 
   $('#price').html(price_num);
});

$(document).on('click', '#min', function(event) {
    event.preventDefault();
    var value = parseInt($('#num').val());
    if ((value - 1) === 0) {
        $("#min").prop("disabled", true);
        return false;
    }
    $('#num').val(value - 1);
    var price_num= parseInt($('#num').val())*cost;
    var n = parseFloat(price_num); price_num = Math.round(n * 1000)/1000; 
   $('#price').html(price_num);
});

