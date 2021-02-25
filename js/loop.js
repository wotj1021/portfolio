$(document).ready(function(){
  var menu = 0;

  $('#buttons.next').click(function(){
    menu++;
    if(menu == 16){menu = 0}
    $('#main_loop').animate({rotate: (menu * 22.5) + "deg"},500);
    console.log("next")
    console.log("menu : " + menu)
    $(".main_card").fadeOut(300)
    $("#main_card" + menu).fadeIn(500)
})
$('#buttons.prev').click(function(){
    menu--;
    if(menu == -16){menu = 0}
    $('#main_loop').animate({rotate: (menu*22.5) + "deg"},500)
    console.log("prev")
    console.log("menu : " + menu)
    $(".main_card").fadeOut(300)
    $("#main_card" + menu).fadeIn(500)
})

$('.loop_card').click(function(){
    
    // console.log("$(this).index() : " + $(this).index())
    // console.log("start menu : " + menu)
    // console.log("menu + $(this).index() : " + (menu + $(this).index()))
    console.log(",loop_card" + $(this).index())
    if($(this).index() == 0){menu = 0}
    if(menu + $(this).index() <= -14){menu = 0}
    if(menu + $(this).index() >= 30 || menu + $(this).index() == 16){menu = 0}
    if((menu + $(this).index()) == 14 || menu + $(this).index() == -2){menu++}
    if((menu + $(this).index()) == 15 || menu + $(this).index() == -1){menu++}
    if((menu + $(this).index()) == 02 || menu + $(this).index() == 18){menu--}
    if((menu + $(this).index()) == 01 || menu + $(this).index() == 17){menu--}

    $('#main_loop').animate({rotate: (menu * 22.5) + "deg"},500);
    console.log("end menu : " + menu)
    // console.log("==========================================================")
  })
// =============================================================.loop_card START=====================
// $('.loop_card').click(function(){
//     loop_station = menu
//     if(menu >= 16){loop_station = Math.floor(menu/16)}

//     console.log("$(this).index() " + $(this).index())
//     console.log("menu " + menu)
//     console.log("loop_station " + loop_station)
//     console.log("menu + $(this).index()")
//     console.log(menu + $(this).index())



//     console.log("loop_station + $(this).index()")
//     console.log(loop_station + $(this).index())

//     if((menu + $(this).index()) == 14){menu++}
//     if((menu + $(this).index()) == 15){menu++}
//     if((menu + $(this).index()) == 02){menu--}
//     if((menu + $(this).index()) == 01){menu--}
    
//     $('#main_loop').animate({rotate: (menu * 22.5) + "deg"},500);
    
//     console.log("menu " + menu)
//     console.log("==========================================================")
//   })

//   $('.loop_card').click(function(){
//     loop_station = menu
//     loop_station_num = Math.floor(loop_station/16)
//     console.log("$(this).index() " + $(this).index())
//     console.log("menu " + menu)
//     console.log("loop_station_num " + loop_station_num)
//     console.log("loop_station " + loop_station)
//     console.log(menu + $(this).index())
//     console.log(loop_station + $(this).index())
//     if(loop_station >= 16){loop_station -= (16*loop_station_num)}
//     // if(loop_station <= -14){loop_station -= (16*loop_station_num)}
//     console.log(loop_station + "--------")
//     console.log(loop_station + $(this).index())
//     if((loop_station + $(this).index()) == 14){menu++; loop_station++}
//     if((loop_station + $(this).index()) == 15){menu++}
//     if((loop_station + $(this).index()) == 18){menu--; menu--;}
//     if((loop_station + $(this).index()) == 02){menu--; loop_station--}
//     if((loop_station + $(this).index()) == -14){menu--; loop_station--}
//     if((loop_station + $(this).index()) == 01){menu--}

//     $('#main_loop').animate({rotate: (menu * 22.5) + "deg"},500);
//     console.log("menu " + menu)
//     console.log("==========================================================")
//   })
// =============================================================.loop_card END =====================


})