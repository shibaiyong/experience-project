var greeter=require("./greeter.js");
var inpevent=require("./input-event.js");

var ele=$('.inp')


document.getElementById("box").appendChild(greeter())//显示hello wrod;
inpevent(ele)//检测input 事件
