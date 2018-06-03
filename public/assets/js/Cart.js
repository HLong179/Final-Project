
$('#minus1').click(function(){
    var number= parseInt($('#num1').val());
    if ((number - 1) === 0) {
        $("#minus1").prop("disabled", true);
        return false;
    }
    $('#num1').val(number-1);
    $('#total1').text((number-1)*69+'$');
    sum();
})

$('#plus1').click(function(){
    var number= parseInt($('#num1').val());
    $('#num1').val(number+1);
    if ($("#minus1").is(':disabled')) {
        $("#minus1").prop("disabled", false);
      }
      $('#total1').text((number+1)*69+'$');

      sum();
})

$('#minus2').click(function(){
    var number= parseInt($('#num2').val());
    if ((number - 1) === 0) {
        $("#minus2").prop("disabled", true);
        return false;
    }
    $('#num2').val(number-1);
    $('#total2').text((number-1)*69+'$');
    sum();
})

$('#plus2').click(function(){
    var number= parseInt($('#num2').val());
    $('#num2').val(number+1);
    if ($("#minus2").is(':disabled')) {
        $("#minus2").prop("disabled", false);
      }
      $('#total2').text((number+1)*69+'$');
      sum();
})
if(localStorage.getItem('#before') === 'clicked'){
    { 
    $("#before").css('display','none');
    $('#after').css('display','block');
         
 }
}
var count=0;
$('.delete').click(function(){
   
   $(this).closest('tr').remove();
   count++;
   if(count===2)
{
    $('#none-empty').css('display','none');
    $('#isempty').css('display','block');
}
   sum();
})

$(document).ready(function(){
    var total1= parseInt( $('#total1').text());
    var total2= parseInt( $('#total2').text());
    var total;
        total=total1+ total2;
    
    $('#totalproducts').text(total+'$');
    $('#sumary').text(total+5+'$');
})
function sum()
{
    // var total= parseInt( $('#total1').text())+ parseInt( $('#total2').text()) ;
    // $('#totalproducts').text(total+'$');
    // $('#sumary').text(total+5+'$');
    var total1= parseInt( $('#total1').text());
    var total2= parseInt( $('#total2').text());
    var total;
    if(total1 && total2)
        total= total1+total2;
    else{
        if(total1)
            total= total1;
        else
        total= total2;
    }
       
    $('#totalproducts').text(total+'$');
    $('#sumary').text(total+5+'$');
}
$('#Pay').click(function(event){

    if(localStorage.getItem('#before') !== 'clicked')
      {
        event.preventDefault();
        window.location.href='sign-in.html';
      }  
})