
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
    $('#order').show(300);
    $(this).hide();
})



$('#order').click(function () {
    $('#formorder').submit();
})

