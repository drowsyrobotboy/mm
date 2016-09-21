$(window).on("load", function(){
  //mobile
  if($(window).width()<1049){
    if($(window).width()>499){
      $('.intro-img').css({"bottom":"0"});
      $('.intro-text').css({'font-size':'4em'});
      setTimeout(function(){
        $('#manish').css({'right':'90%', 'opacity':'1'});
        $('#maryada').css({'left':'90%', 'opacity':'1'});
      }, 1000);
    }
    else{
      $('.intro-img').css({"bottom":"0"});
      $('.intro-text').css({'font-size':'4em'});
      setTimeout(function(){
        $('#manish').css({'right':'80%', 'opacity':'1'});
        $('#maryada').css({'left':'80%', 'opacity':'1'});
        $('.intro-text').css({'background':'rgba(244,244,244,1)'});
      }, 1000);
    }
  }
  else{
    $('.intro-img').css({"bottom":"0"});
    $('.intro-text').css({'font-size':'6em'});
    setTimeout(function(){
      $('#manish').css({'right':'80%', 'opacity':'1'});
      $('#maryada').css({'left':'80%', 'opacity':'1'});
    }, 1000);
  }
});

$(window).on("resize", function(){
  if($(window).width()<1049){
    if($(window).width()>499){
      $('.intro-text').css({'font-size':'4em'});
        $('#manish').css({'right':'90%', 'opacity':'1'});
        $('#maryada').css({'left':'90%', 'opacity':'1'});
        $('.intro-text').css({'background':'rgba(244,244,244,0)'});
    }
    else{
      $('.intro-text').css({'font-size':'4em'});
        $('#manish').css({'right':'80%', 'opacity':'1'});
        $('#maryada').css({'left':'80%', 'opacity':'1'});
        $('.intro-text').css({'background':'rgba(244,244,244,1)'});
    }
  }
  else{
    $('.intro-text').css({'font-size':'6em'});
    $('#manish').css({'right':'80%', 'opacity':'1'});
    $('#maryada').css({'left':'80%', 'opacity':'1'});
  }
});
