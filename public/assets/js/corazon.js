$("#home").click(function(e){
    e.preventDefault();
    var goto=this.getAttribute("href");
    setTimeout(function(){
        window.location=goto;
    },500);
})

$("#finca").click(function(e){
    e.preventDefault();
    var goto=this.getAttribute("href");
    setTimeout(function(){
        window.location=goto;
    },500);
    
})

$("#corazon").click(function(e){
    e.preventDefault();
    var goto=this.getAttribute("href");
    setTimeout(function(){
        window.location=goto;
    },500);
    
})
$("#minuto").click(function(e){
    e.preventDefault();
    var goto=this.getAttribute("href");
    setTimeout(function(){
        window.location=goto;
    },500);
    
})
if(localStorage.getItem('#before') === 'clicked'){
    { 
    $("#before").css('display','none');
    $('#after').css('display','block');
         
 }
} $('.shopcart').click(function(){
    window.location.href='Cart.html';
})
var Put= function(x){
    for(var i=1;i<6;i++)
    {
        if(i!==x)
        {
          //  $('.page'+i+'').css('display', 'none');
          $('.page'+i+'').hide(900);
            $('#page'+i+'').removeClass('active');
        }
        
    }
   // $('.page'+x+'').css('display', 'block');
   $('.page'+x+'').show(900);
    $('#page'+x+'').addClass('active');
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
