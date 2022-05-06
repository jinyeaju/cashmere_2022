$(document).ready(function(){
    $(".introMenu").click(function(){
        $("html, body").animate({scrollTop:$(".intro").offset().top - 80}, 1000);
        $("#open_menu").prop("checked", false); //prop() : [property : 속성] 내부의 변경할 값을 강제로 넣는다. ◎ -> ○
        return false;
    });
    $(".storyMenu").click(function(){
        $("html, body").animate({scrollTop:$(".story").offset().top - 80}, 1000);
        $("#open_menu").prop("checked", false);
        return false;
    });
    $(".journalMenu").click(function(){
        $("html, body").animate({scrollTop:$(".journal").offset().top - 80}, 1000);
        $("#open_menu").prop("checked", false);
        return false;
    });
    $(".storesMenu").click(function(){
        $("html, body").animate({scrollTop:$(".stores").offset().top - 80}, 1000);
        $("#open_menu").prop("checked", false);
        return false;
    });
});