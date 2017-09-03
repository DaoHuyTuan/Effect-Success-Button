

$(".button").click(function() {
    $(".button").addClass("loader");
    $(".text-button").hide();
    setInterval(function(){
        $(".img-button").show();
        
        $(".button").removeClass("loader");
    },5000);
})