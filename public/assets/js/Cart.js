
$('.removeitem').click(function () {
    var id = $(this).data('proid');
    $('#txtid').val(id);
    $('#formremove').submit();
})

$('#Pay').click(function () {
    $('.paymentcontent').show(400);
})

var method;
$('#confirm').click(function () {
    var x = document.getElementById("COD").checked;
    var y = document.getElementById("Creditcard").checked;
    if (x === true) {
        method = document.getElementById("COD").value;
     
    }
    else {
        if (y === true) {
            method = document.getElementById("Creditcard").value;
        }
    }
 $('#getmethod').val(method);
  document.getElementById('genious').href=`/cart/Payinfo/${method}`;
   $(this).hide(300);
   $('#next').show(300);
})




