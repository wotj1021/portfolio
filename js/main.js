$(document).ready(function(){
  // $(window).height()
  // $(window).width()
  // console.log($(window).width())
  // console.log($(window).height())
  var lastTop = $(document).scrollTop()
  $('header').css({'width':$(window).width()+'px'})
  $('header').css({'height':$(window).height()+'px'})
  $('div#header_box_empty').css({'height':$(window).height()+'px'})
  $('section#page_view').css({'height':$(window).height()-80+'px'})
  $('section#page_view div').css({'height':(($(window).height()-80)/2)+'px'})
  $('article#viewpoint').css({'height':$(window).height()-80+'px'})
  
  $(window).resize(function(){
    $('header').css({'width':$(window).width()+'px'})
    $('header').css({'height':$(window).height()+'px'})
    $('div#header_box_empty').css({'height':$(window).height()+'px'})
    $('section#page_view').css({'height':$(window).height()-80+'px'})
    $('section#page_view div').css({'height':(($(window).height()-80)/2)+'px'})
    $('article#viewpoint').css({'height':$(window).height()-80+'px'})
  })

  $(window).scroll(function(){
		var scrollY = $(document).scrollTop() + 1;		//스크롤된 거리
    if(scrollY >= $(window).height()){
      $("#contect_bar").css({"position":"fixed", "top":"0", "top":"0"})
      $("article#empty_box").css({"width": "100%", "height": "80px", "display": "block", "background": "#101820"})
    } else {
      $("#contect_bar").css({"position":"relative"})
      $("article#empty_box").css({"width": "100%", "height": "80px", "display": "none", "background": "#101820"})
    }
    
    if(lastTop == 0){
      $('html, body').animate({scrollTop:$('#viewpoint').offset().top - 80},1000);
      // console.log($('#contect_bar').offset().top)
      // console.log("$(document).scrollTop() : " + $(document).scrollTop())
      // console.log("lastTop : " + lastTop)
    }
    lastTop = $(document).scrollTop()
  })

  document.querySelector('#contect_bar li:first-child').addEventListener('click',function(){
    $('html, body').animate({scrollTop:0},1000);
  })
  document.querySelector('#contect_bar li:nth-child(2)').addEventListener('click',function(){
    $('html, body').animate({scrollTop:$(window).height()},1000);
  })
  document.querySelector('#contect_bar li:last-child').addEventListener('click',function(){
    $('html, body').animate({scrollTop:$(window).height()*2},1000);
  })
})
