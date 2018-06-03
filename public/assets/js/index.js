$("#carazon").click(function(e){
    e.preventDefault();
    var goto=this.getAttribute("href");
    setTimeout(function(){
        window.location=goto;
    },500);
})


$(".nav>a").click(function(){
    $(".nav>a").removeClass("active");
    $(this).addClass("active");
})

