

$(".button").click(function() {
    $(".button").addClass("loader");
    $(".button").html("");
    $(".button loader").removeClass("button");
    $(".text-button").hide();
    setInterval(function(){
        $("loader").addClass("button");
        $(".loader").removeClass("loader");
        $('button').html('<i class="ion-checkmark-round"></i>');
    },2000);
})