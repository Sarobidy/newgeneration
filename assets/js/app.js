$(window).scroll(function(){
  if($(document).scrollTop() >100) {
    $("#navbar").addClass('scroll');
    
  }else{
$("#navbar").removeClass('scroll');

  }
});
$(window).scrollTop(function(){
var $position = $(window).scrollTop(); 
if($position >500){
	$("portfolio").scrollTop('fixed');
}
})