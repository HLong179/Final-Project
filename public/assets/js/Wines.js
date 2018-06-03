var Display= function(x,y){
    var string='';

     for(var i=x;i<y;i++)
      {
       string+='<div class="col-xs-6 col-md-3"><a href="'+i+'.html" class="thumbnail prd "><img class="image" title="Click for Details"  src="../IMG/wine'+i+'.jpg" alt="wine'+i+'">';
    
       switch(i){
           case 1:
           {

             string+='<div class="overlay"><div class="row"><b class="divcost text-left">69$ &nbsp &nbsp</b><i class="text-right"><button id="Addcart" title="Add to cart">+<span class="glyphicon glyphicon-shopping-cart"></span></button></i></div><br><div class="divname">CORAZÓN SPUMANTE MOSCATO</div></div>'
             string+='</a></div>';
           }break;
           case 2:
           {
               string+='<div class="overlay"><div class="row"><b class="divcost text-left">69$ &nbsp &nbsp</b><i class="text-right"><button id="Addcart" title="Add to cart">+<span class="glyphicon glyphicon-shopping-cart"></span></button></i></div><br><div class="divname">CORAZÓN LOCO RED</div></div>'

             string+='</a></div>';

           }break;
           case 3:
           {
               string+='<div class="overlay"><div class="row"><b class="divcost text-left">69$ &nbsp &nbsp</b><i class="text-right"><button id="Addcart" title="Add to cart">+<span class="glyphicon glyphicon-shopping-cart"></span></button></i></div><br><div class="divname">DULCE CORAZÓN WHITE</div></div>'

               string+='</a></div>';
              
           }break;
           case 4:
           {
               
               string+='<div class="overlay"><div class="row"><b class="divcost text-left">69$ &nbsp &nbsp</b><i class="text-right"><button id="Addcart" title="Add to cart">+<span class="glyphicon glyphicon-shopping-cart"></span></button></i></div><br><div class="divname">SWEET HEART ROSÉ</div></div>'

               string+='</a></div>';
           }break;
           case 5:
           {
              
               string+='<div class="overlay"><div class="row"><b class="divcost text-left">69$ &nbsp &nbsp</b><i class="text-right"><button id="Addcart" title="Add to cart">+<span class="glyphicon glyphicon-shopping-cart"></span></button></i></div><br><div class="divname">CORAZÓN LOCO SELECCIÓN</div></div>'

               string+='</a></div>';
           }break;
           case 6:
           {
              
               string+='<div class="overlay"><div class="row"><b class="divcost text-left">69$ &nbsp &nbsp</b><i class="text-right"><button id="Addcart" title="Add to cart">+<span class="glyphicon glyphicon-shopping-cart"></span></button></i></div><br><div class="divname">CORAZÓN LOCO PREMIUM</div></div>'

               string+='</a></div>';
             
           }break;
           case 7:
           {
               string+='<div class="overlay"><div class="row"><b class="divcost text-left">69$ &nbsp &nbsp</b><i class="text-right"><button id="Addcart" title="Add to cart">+<span class="glyphicon glyphicon-shopping-cart"></span></button></i></div><br><div class="divname">CORAZÓN LOCO NATURE</div></div>'

               string+='</a></div>';
           }break;
           case 8:
           {
              
               string+='<div class="overlay"><div class="row"><b class="divcost text-left">69$ &nbsp &nbsp</b><i class="text-right"><button id="Addcart" title="Add to cart">+<span class="glyphicon glyphicon-shopping-cart"></span></button></i></div><br><div class="divname">FINCA EL CARRIL SORCERER</div></div>'

               string+='</a></div>';
           }break;
           case 9:
           {
             
               string+='<div class="overlay"><div class="row"><b class="divcost text-left">69$ &nbsp &nbsp</b><i class="text-right"><button id="Addcart" title="Add to cart">+<span class="glyphicon glyphicon-shopping-cart"></span></button></i></div><br><div class="divname">FINCA EL CARRIL VALERIA</div></div>'

               string+='</a></div>';
               
           }break;
           case 10:
           {
               
               string+='<div class="overlay"><div class="row"><b class="divcost text-left">69$ &nbsp &nbsp</b><i class="text-right"><button id="Addcart" title="Add to cart">+<span class="glyphicon glyphicon-shopping-cart"></span></button></i></div><br><div class="divname">FINCA EL CARRIL BLANCO</div></div>'

               string+='</a></div>';
             
           }break;
           case 11:
           {
               string+='<div class="overlay"><div class="row"><b class="divcost text-left">69$ &nbsp &nbsp</b><i class="text-right"><button id="Addcart" title="Add to cart">+<span class="glyphicon glyphicon-shopping-cart"></span></button></i></div><br><div class="divname">FINCA EL CARRIL ROBLE</div></div>'


               string+='</a></div>';
             
           }break;
           case 12:
           {
               string+='<div class="overlay"><div class="row"><b class="divcost text-left">69$ &nbsp &nbsp</b><i class="text-right"><button id="Addcart" title="Add to cart">+<span class="glyphicon glyphicon-shopping-cart"></span></button></i></div><br><div class="divname">MINUTO 116 WHITE</div></div>'


               string+='</a></div>';
               
           }break;
           case 13:
           {
               string+='<div class="overlay"><div class="row"><b class="divcost text-left">69$ &nbsp &nbsp</b><i class="text-right"><button id="Addcart" title="Add to cart">+<span class="glyphicon glyphicon-shopping-cart"></span></button></i></div><br><div class="divname">MINUTO 116 RED</div></div>'


               string+='</a></div>';
             
           }break;
           case 14:
           {
               string+='<div class="overlay"><div class="row"><b class="divcost text-left">69$ &nbsp &nbsp</b><i class="text-right"><button id="Addcart" title="Add to cart">+<span class="glyphicon glyphicon-shopping-cart"></span></button></i></div><br><div class="divname">CORAZÓN LOCO WHITE</div></div>'


               string+='</a></div>';
             
           }break;
           case 15:
           {
              
               string+='<div class="overlay"><div class="row"><b class="divcost text-left">69$ &nbsp &nbsp</b><i class="text-right"><button id="Addcart" title="Add to cart">+<span class="glyphicon glyphicon-shopping-cart"></span></button></i></div><br><div class="divname">CORAZÓN LOCO NATURE WHITE</div></div>'

                   string+='</a></div>';
             
           }break;
           case 16:
           {
               string+='<div class="overlay"><div class="row"><b class="divcost text-left">69$ &nbsp &nbsp</b><i class="text-right"><button id="Addcart" title="Add to cart">+<span class="glyphicon glyphicon-shopping-cart"></span></button></i></div><br><div class="divname">CORAZÓN SPUMANTE WHITE</div></div>'

           string+='</a></div>';
             
           }break;
           case 17:
            {
               string+='<div class="overlay"><div class="row"><b class="divcost text-left">69$ &nbsp &nbsp</b><i class="text-right"><button id="Addcart" title="Add to cart">+<span class="glyphicon glyphicon-shopping-cart"></span></button></i></div><br><div class="divname">CORAZÓN SPUMANTE ROSADO</div></div>'


               string+='</a></div>';
             
           }break;
           
           case 18: {
              
               string+='<div class="overlay"><div class="row"><b class="divcost text-left">69$ &nbsp &nbsp</b><i class="text-right"><button id="Addcart" title="Add to cart">+<span class="glyphicon glyphicon-shopping-cart"></span></button></i></div><br><div class="divname">CORAZÓN SPUMANTE MOSCATO</div></div>'

               string+='</a></div>';
             
           }break;

       }
       
     }
     return string;
   }


$('.page1').html(Display(2,10));
$('.page2').html(Display(7,15));
$('.page3').html(Display(11,19));
$('.page4').html(Display(3,11));
$('.page5').html(Display(7,15));

var Put= function(x){
    for(var i=1;i<6;i++)
    {
        if(i!==x)
        {
           // $('.page'+i+'').css('display', 'none');
            $('.page'+i+'').hide(500);
            $('#page'+i+'').removeClass('active');
        }
        
    }
  //  $('.page'+x+'').css('display', 'block');
    $('.page'+x+'').show(500);
    $('#page'+x+'').addClass('active');
    

    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}