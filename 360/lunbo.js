$(function(){var url1="https://api.web.360kan.com/v1/block?blockid=522";$.ajax({type:"get",dataType:'jsonp',url:url1,data:"",cache:true,async:true,jsonp:'callback',jsonpCallback:'__jp2',timeout:8000,contentType:"application/json;utf-8",success:function(data){var luntu="";var luntu1="";for(var i=0,l=3;i<l;i++){luntu+='<li><a href="./360/play.html?q='+data.data.lists[i].ent_id+'&id='+data.data.lists[i].cat+'&zy=360&html=1.html" target="_blank"><img src="'+data.data.lists[i].pic_lists[0].url+'"></a></li>';}
document.getElementById("lunbotu").innerHTML=luntu;console.log(luntu);}})})
var time=null;var nexImg=0;var imgLength=$(".c-banner .banner ul li").length;$(".c-banner .jumpBtn ul li[jumpImg="+nexImg+"]").css("background-color","black");$(document).ready(function(){time=setInterval(intervalImg,3000);});function intervalImg(){if(nexImg<imgLength-1){nexImg++;}else{nexImg=0;}
$(".c-banner .banner ul img").eq(nexImg-1).css("position","absolute");$(".c-banner .banner ul img").eq(nexImg).css("position","relative");$(".c-banner .banner ul li").eq(nexImg).css("display","block");$(".c-banner .banner ul li").eq(nexImg).stop().animate({"opacity":1},1000);$(".c-banner .banner ul li").eq(nexImg-1).stop().animate({"opacity":0},1000,function(){$(".c-banner .banner ul li").eq(nexImg-1).css("display","none");});$(".c-banner .jumpBtn ul li").css("background-color","white");$(".c-banner .jumpBtn ul li[jumpImg="+nexImg+"]").css("background-color","black");}
$(".c-banner .jumpBtn ul li").each(function(){$(this).click(function(){clearInterval(time);$(".c-banner .jumpBtn ul li").css("background-color","white");jumpImg=$(this).attr("jumpImg");if(jumpImg!=nexImg){var after=$(".c-banner .banner ul li").eq(jumpImg);var befor=$(".c-banner .banner ul li").eq(nexImg);$(".c-banner .banner ul img").eq(nexImg).css("position","absolute");$(".c-banner .banner ul img").eq(jumpImg).css("position","relative");after.css("display","block");after.stop().animate({"opacity":1},1000);befor.stop().animate({"opacity":0},1000,function(){befor.css("display","none");});nexImg=jumpImg;}
$(this).css("background-color","black");time=setInterval(intervalImg,3000);});});
