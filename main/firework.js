var ns=document.layers?1:0
var ie4=document.all?1:0
var ns6=document.getElementById&&!document.all?1:0
amount=14;if(ns){for(i=0;i<amount;i++)
document.write("<LAYER NAME='nsstars"+i+"' LEFT=0 TOP=0 BGCOLOR='ffa500' CLIP='0,0,1,1'></LAYER>");}else if(ie4||ns6){document.write("<div id='ieCov' style='position:absolute;top:0px;left:0px'>");document.write("<div style='position:relative'>");for(i=0;i<amount;i++)
document.write("<div id='iestars"+i+"' style='position:absolute;top:0px;left:0px;width:1;height:1;background:#ffffff;font-size:1;z-index:10'></div>");document.write("</div></div>");}Clrs=new Array('000000','000099','009900','990000','999900','00FF00','FF0000','FF00FF','0000FF')
sClrs=new Array('000000','000099','009900','990000','999900')
Xpos=300;Ypos=150;initialStarColor='00ff00';step=4;currStep=0;explosionSize=100;function Fireworks(){var WinHeight=(ns||ns6)?window.innerHeight-100:window.document.body.clientHeight-100;var WinWidth=(ns||ns6)?window.innerWidth-100:window.document.body.clientWidth-100;var Yscroll=(ns||ns6)?window.pageYOffset:document.body.scrollTop;for(i=0;i<amount;i++){if(ie4||ns6)
var layer=ns6?document.getElementById("iestars"+i).style:eval("iestars"+i).style;else if(ns)
var layer=document.layers["nsstars"+i]
var randCol=Math.round(Math.random()*8);var randSz=Math.round(Math.random()*2);layer.top=Ypos+explosionSize*Math.sin((currStep+i*5)/3)*Math.sin(currStep/100)
layer.left=Xpos+explosionSize*Math.cos((currStep+i*5)/3)*Math.sin(currStep/100)
if(currStep<110){if(ns){layer.bgColor=initialStarColor;layer.clip.width=1;layer.clip.height=1}else{layer.background=initialStarColor;layer.width=1;layer.height=1;layer.fontSize=1}}else{if(ns){layer.bgColor=Clrs[randCol];layer.clip.width=randSz;layer.clip.height=randSz}else{layer.background=Clrs[randCol];layer.width=randSz;layer.height=randSz;layer.fontSize=randSz}}}if(currStep>220)
{currStep=0;Ypos=50+Math.round(Math.random()*WinHeight)+Yscroll;Xpos=50+Math.round(Math.random()*WinWidth);for(i=0;i<sClrs.length;i++)
{var newIcol=Math.round(Math.random()*i);}initialStarColor=sClrs[newIcol];explosionSize=Math.round(80*Math.random()+100);}currStep+=step;setTimeout("Fireworks()",20);}Fireworks();