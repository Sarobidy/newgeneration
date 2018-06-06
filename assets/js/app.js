$(window).scroll(function(){
  if($(document).scrollTop() >100) {
    $("#navbar").addClass('scroll');
    
  }else{
$("#navbar").removeClass('scroll');

  }
});