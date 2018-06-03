window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
var Bing= function(x){
   for(var i=1; i<5; i++){
       if(i!==x){
            $('#Bing'+i+'').removeClass('active');
        }
    }
    $('#Bing'+x+'').addClass('active');
 }
// window.onscroll = function () { scrollFunction1() };
// function scrollFunction1() {
//     if (document.body.scrollBottom < 20 || document.documentElement.scrollBottom < 20) {
//         document.getElementById("myBtn0").style.display = "block";
//     } else {
//         document.getElementById("myBtn0").style.display = "none";
//     }
// }
// function bottomFunction() {
//     document.body.scrollBottom = 0;
//     document.documentElement.scrollBottom = 0;
// }

