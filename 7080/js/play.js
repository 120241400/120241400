var jx="./jx/index.html?url=";var url1=pingguozy[id]["url"];$(function(){$.ajax({type:"get",url:jiekou+url1+"?ac=detail&ids="+lianjie,data:"",error:function(XMLHttpRequest,textStatus,errorThrown){alert(textStatus);alert(errorThrown);this;},dataType:"jsonp",cache:true,contentType:"application/json;utf-8",success:function(data){var bolie=new Array();bolie=data.list["0"].vod_play_from.split("$$$");var bolie1="";var neirong1='';var neirong='';var dianbo=data.list[0].vod_play_url;var dianbo1=dianbo.replace(/\r\n/g,"#");var dianbo2=dianbo1.replace(/\$/g,"#");var strs=new Array();strs=dianbo2.split("###");var str1=new Array();for(h=0;h<strs.length;h++){str1[h]=strs[h].split("#");if(h==0){var neinei="am-tab-panel am-fade am-in am-active";var boliee='am-active';}else{var neinei="am-tab-panel am-fade tv-res";var boliee='am';}
bolie1+='<li class="'+boliee+'" ><a href="#'+bolie[h]+'">'+bolie[h]+'</a></li>';for(i=0;i<str1[h].length;i+=2)
{neirong1+='<button type="button" class="am-btn am-btn-sm am-round" title="'+str1[h][i]+'" value="'+jx+str1[h][i+1]+'"  onclick="GetHref(this);">'+str1[h][i]+'</button>';}
neirong+='<div class="'+neinei+'" id="'+bolie[h]+'">'+neirong1+'</div>';var neirong1="";}
var vide1=str1[0][0];var vide=str1[0][1];document.getElementById("demo1").innerHTML=vide1;document.getElementById("bolie2").innerHTML=bolie1;document.getElementById("video").src="./jx/index.html?url="+vide;document.getElementById("neirong").innerHTML=neirong;document.getElementById("name").innerHTML=data.list[0].vod_name;document.getElementById("tu").src=data.list[0].vod_pic;document.getElementById("nian").innerHTML=data.list[0].vod_year;document.getElementById("diqu").innerHTML=data.list[0].vod_area;document.getElementById("daoyan").innerHTML=data.list[0].vod_director;document.getElementById("fenlei").innerText=data.list[0].type_name;document.getElementById("yanyuan").innerText=data.list[0].vod_actor;document.getElementById("jiesao").innerText=data.list[0].vod_blurb;document.getElementById("jiesao1").innerText=data.list[0].vod_content;}});})