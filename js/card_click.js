$(document).ready(function(){
  $('.loop_card').click(function(){
    card_num = 1 + $(this).index()
    console.log($(this).index())
    $(".main_card").fadeOut(300)
    $("#main_card" + card_num).fadeIn(500)
    // if($(this).index() == 2){document.write('<script type="module" src="js/wave/app.js"></script>');}
    // if($(this).index() != 2){document.getElementById("main_card3").write("")}
    // console.log("******************************")
    // console.log(card_num)
    // console.log("******************************")
  })

  $(window).mouseenter(function(event){
    x = event.pageX;
    y = event.pageY;
    // console.log(x)
    // console.log(y)
  })
  var coordinate = 1; 

  $('.item').mouseenter(function(){
    // console.log(x)
    // console.log($(this).offset())
    if(x > ($(this).offset().left+85)){
      $(this).find('p').stop().css({'left':'110%', 'right':'-110%'})
      $(this).find('p').stop().animate({'left':'0'},300)
      coordinate++
    }else {
      $(this).find('p').stop().css({'left':'-110%', 'right':'110%'})
      $(this).find('p').stop().animate({'left':'0'},300)
      coordinate--
    }
  })
  $('.item').mouseleave(function(){
    if(coordinate == 2){
      $(this).find('p').stop().animate({'left':'-110%', 'right':'110%'},300)
    }else {
      $(this).find('p').stop().animate({'left':'110%', 'right':'-110%'},300)
    }
      coordinate = 1; 
  })
})