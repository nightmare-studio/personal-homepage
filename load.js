$(window).on('load',function(){
  $('.loader-wrapper').animate({
    opacity:0
  },500);
  setTimeout(function(){
    $('.loader-wrapper').remove();
  },500);
})