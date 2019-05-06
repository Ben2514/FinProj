//0:spicy, 1:wasabi, 2:peanut, 3:no sauce
var sauce = 0;

//0:default, 1:history, 2:custom
var default_or_not = 0;

//Food custom
var cheese = true;
var tomato = true;
var cucumber = true;
var lettuce = true;

//Amount of the order (1~9)
var amount = 1;

$(document).ready(function(){

    $("#show").click(function(){
        $("#Custom_page").animate({
            top: "0"
        }, 400, function(){});
    });

    $("#cancel").click(function(){
        $("#Custom_page").animate({
            top: "-100%"
        }, 400, function(){});
    });

    $("#add_to_cart").click(function(){
        $("#Custom_page").animate({
            top: "-100%"
        }, 400, function(){});
    });

   

    /* Selecte the sauce  */
    $("#spicy_sauce").click(function(){
        if(sauce != 0){
            sauce = 0;
            $("#spicy_sauce").animate({
                opacity: 1
            }, 250, function(){});
            $("#wasabi_sauce").animate({
                opacity: 0.4
            }, 250, function(){});
            $("#peanut_sauce").animate({
                opacity: 0.4
            }, 250, function(){});
            $("#no_sauce").animate({
                opacity: 0.4
            }, 250, function(){});
        }
    })

    $("#wasabi_sauce").click(function(){
        if(sauce != 1){
            sauce = 1;
            $("#spicy_sauce").animate({
                opacity: 0.4
            }, 250, function(){});
            $("#wasabi_sauce").animate({
                opacity: 1
            }, 250, function(){});
            $("#peanut_sauce").animate({
                opacity: 0.4
            }, 250, function(){});
            $("#no_sauce").animate({
                opacity: 0.4
            }, 250, function(){});
        }
    })

    $("#peanut_sauce").click(function(){
        if(sauce != 2){
            sauce = 2;
            $("#spicy_sauce").animate({
                opacity: 0.4
            }, 250, function(){});
            $("#wasabi_sauce").animate({
                opacity: 0.4
            }, 250, function(){});
            $("#peanut_sauce").animate({
                opacity: 1
            }, 250, function(){});
            $("#no_sauce").animate({
                opacity: 0.4
            }, 250, function(){});
        }
    })

    $("#no_sauce").click(function(){
        if(sauce != 3){
            sauce = 3;
            $("#spicy_sauce").animate({
                opacity: 0.4
            }, 250, function(){});
            $("#wasabi_sauce").animate({
                opacity: 0.4
            }, 250, function(){});
            $("#peanut_sauce").animate({
                opacity: 0.4
            }, 250, function(){});
            $("#no_sauce").animate({
                opacity: 1
            }, 250, function(){});
        }
    })

    /* Choose setting if needed. */
    $("#default").click(function(){
        if(default_or_not != 0){
            default_or_not = 0;
            $("#default").animate({
                opacity: 1
            }, 250, function(){});
            $("#history").animate({
                opacity: 0.6
            }, 250, function(){});
        }
        cheese = true;
        tomato = true;
        cucumber = true;
        lettuce = true;
        $("#cheese_op").animate({
            opacity: 1
        }, 250, function(){});
        $("#cheese_pic").animate({
            opacity: 1
        }, 250, function(){});
        $("#tomato_op").animate({
            opacity: 1
        }, 250, function(){});
        $("#tomato_pic").animate({
            opacity: 1
        }, 250, function(){});
        $("#cucumber_op").animate({
            opacity: 1
        }, 250, function(){});
        $("#cucumber_pic").animate({
            opacity: 1
        }, 250, function(){});
        $("#lettuce_op").animate({
            opacity: 1
        }, 250, function(){});
        $("#lettuce_pic").animate({
            opacity: 1
        }, 250, function(){});
    })

    $("#history").click(function(){
        if(default_or_not != 1){
            default_or_not = 1;
            $("#default").animate({
                opacity: 0.6
            }, 250, function(){});
            $("#history").animate({
                opacity: 1
            }, 250, function(){});
        }
    })

    /* Custom the element of the burger. */
    $("#cheese_op").click(function(){
        cheese = !cheese;
        if(cheese == true){
            $("#cheese_op").animate({
                opacity: 1
            }, 250, function(){});
            $("#cheese_pic").animate({
                opacity: 1
            }, 250, function(){});
        }
        else{
            $("#cheese_op").animate({
                opacity: 0.4
            }, 250, function(){});
            $("#cheese_pic").animate({
                opacity: 0.4
            }, 250, function(){});
        }
        default_or_not = 2;
        $("#default").animate({
            opacity: 0.6
        }, 250, function(){});
        $("#history").animate({
            opacity: 0.6
        }, 250, function(){});
    })

    $("#tomato_op").click(function(){
        tomato = !tomato;
        if(tomato == true){
            $("#tomato_op").animate({
                opacity: 1
            }, 250, function(){});
            $("#tomato_pic").animate({
                opacity: 1
            }, 250, function(){});
        }
        else{
            $("#tomato_op").animate({
                opacity: 0.4
            }, 250, function(){});
            $("#tomato_pic").animate({
                opacity: 0.4
            }, 250, function(){});
        }
        default_or_not = 2;
        $("#default").animate({
            opacity: 0.6
        }, 250, function(){});
        $("#history").animate({
            opacity: 0.6
        }, 250, function(){});
    })

    $("#cucumber_op").click(function(){
        tomato = !tomato;
        if(tomato == true){
            $("#cucumber_op").animate({
                opacity: 1
            }, 250, function(){});
            $("#cucumber_pic").animate({
                opacity: 1
            }, 250, function(){});
        }
        else{
            $("#cucumber_op").animate({
                opacity: 0.4
            }, 250, function(){});
            $("#cucumber_pic").animate({
                opacity: 0.4
            }, 250, function(){});
        }
        default_or_not = 2;
        $("#default").animate({
            opacity: 0.6
        }, 250, function(){});
        $("#history").animate({
            opacity: 0.6
        }, 250, function(){});
    })

    $("#lettuce_op").click(function(){
        tomato = !tomato;
        if(tomato == true){
            $("#lettuce_op").animate({
                opacity: 1
            }, 250, function(){});
            $("#lettuce_pic").animate({
                opacity: 1
            }, 250, function(){});
        }
        else{
            $("#lettuce_op").animate({
                opacity: 0.4
            }, 250, function(){});
            $("#lettuce_pic").animate({
                opacity: 0.4
            }, 250, function(){});
        }
        default_or_not = 2;
        $("#default").animate({
            opacity: 0.6
        }, 250, function(){});
        $("#history").animate({
            opacity: 0.6
        }, 250, function(){});
    })

    /* Adjust the amount of the order */
    $("#add").click(function(){
        if(amount < 9){
            amount++;
            $("#amount").html(amount);
        }
    })

    $("#minus").click(function(){
        if(amount > 1){
            amount--;
            $("#amount").html(amount);
        }
    })
});
