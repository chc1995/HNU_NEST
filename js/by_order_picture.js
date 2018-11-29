
var i=0;
var timer;
$(function(){
	 $("#igs").hover(function(){$(".btn").show();},function(){$(".btn").hade();});
	 $(".ig").eq(0).show().siblings().hide();
	 ShowTime();
	 $(".tab").hover(function(){
		i= $(this).index();
		Show();	 
		clearInterval(timer); //移除輪播
	 },function(){
		 ShowTime(); 
	 });
	 
	 $(".btn1").click(function(){
		 clearInterval(timer);
		 if(i==0){
			 i=6;
		 }
		 i--;
		 Show();
		 ShowTimer();
	 });
	 
	 $(".btn2").click(function(){
		 clearInterval(timer);
		 if(i==5){
			 i=-1;
		 }
		 i++;
		 Show();
		 ShowTimer();
	 })
	 
	 
});

function Show(){
	 $(".ig").eq(i).fadeIn(1500).siblings().fadeOut(1500);
	 $(".tab").eq(i).addClass("bg").siblings().removeClass("bg");
}

function ShowTime(){
	timer=setInterval(function(){
		 i++;
		 if(i==6){
			 i=0;
		 }
		 Show();
	 },4000);
}