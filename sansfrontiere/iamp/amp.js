var run=-1;
var track=-1;
var cttm=0;
var dur=0;
var dtype=0;
var value=0;
var etime=0;
var stime=0;
var ptime=0;
var ctime=0;
var rpt=0;
var load=false;
var rdm=false;
var rson=true;
var dactiv=false;
var rinit=false;
var start=false;
var img;
var autostart;
var aminutes;
var aseconds;
var rtimer;
var mtimer;
var jtimer;
var objct;
var step;
var tstep;
var llim;
var rlim;
var x;
var songurl=new Array();
var songtitle=new Array();
var sequence=new Array();
var convert = new Array();
var hexbase= new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F");
var ipre=new Array("i-a1p","i-a2p","i-a3p","i-a4p","i-a5p","i-plp","i-sp","i-rp");
var iprec=new Array();
window.onerror=killit;
window.onload=init;
window.onbeforeunload=unl;
document.onmousemove = moveit
document.onmouseup = dactvt

for (x=0;x<ipre.length;x++){
iprec[x]=new Image();
iprec[x].src=ipre[x]+".gif";
}

for (x=0; x<16; x++){
for (y=0; y<16; y++){
convert[value]= hexbase[x] + hexbase[y];
value++;
}
}

function unl(){
start=false;
}

function init(){
document.jsaudio.Volume=0;
document.jsaudio.Balance=0;
aminutes=0;
aseconds="00";
start=true;
if (autostart){
run=true;
track++;
document.jsaudio.FileName=songurl[track];
checkit();
}
else
document.all['mdspl'].innerText='Select a Track';
}

function f404(){
document.all['mdspl'].innerText='Error : File Not Found';
setTimeout("document.all['mdspl'].innerText='Loading next track';",1500)
setTimeout('ntrck()',3000)
}

function actvt(w){
if (load){
objct=w.id;
if (objct!="trkbtn"){
llim=0;
if (objct!="bbtn"){
rlim=50;
document.all['mdspl'].innerText="Volume : "+document.all[objct].style.posLeft*2+"%"
}
else{
rlim=40;
if (document.all[objct].style.posLeft==20)
document.all['mdspl'].innerText="Balance : Center"
else{
if (document.all[objct].style.posLeft<20)
document.all['mdspl'].innerText="Balance : "+(100-document.all[objct].style.posLeft*5)+"% Left"
else
document.all['mdspl'].innerText="Balance : "+(0-(100-document.all[objct].style.posLeft*5))+"% Right"
}
}
}
else{
cttm=Math.round(((document.all[objct].style.posLeft+3)/step)*(tstep/970));
ctmmins=parseInt(cttm/60);
ctmsecs=cttm-ctmmins*60;
if (ctmsecs<10)
ctmsecs="0"+ctmsecs;
tmins=parseInt(dur/60);
tsecs=dur-tmins*60;
if (tsecs<10)
tsecs="0"+tsecs;
perc=Math.round((100*(cttm/dur)))
llim=-3;
rlim=201;
document.all['mdspl'].innerText="Seek To : "+ctmmins+":"+ctmsecs+"/"+tmins+":"+tsecs+"  ("+perc+"%)";
}
dactiv=true;
x=event.screenX-document.all[objct].style.posLeft;
}
dactiv=true;
}

function moveit(){
if (dactiv){
if (event.screenX-x>=llim && event.screenX-x<=rlim)
document.all[objct].style.posLeft=event.screenX-x;
else{
if (event.screenX-x<llim )
document.all[objct].style.posLeft=llim;
if (event.screenX-x>rlim)
document.all[objct].style.posLeft=rlim;
}
if (objct=="vbtn"){
document.all['mdspl'].innerText="Volume : "+document.all[objct].style.posLeft*2+"%"
blue=convert[(204-document.all[objct].style.posLeft*4)];
red=convert[(document.all[objct].style.posLeft*4+51)];
rgb="#"+red+"00"+blue;
document.all['vbtndspl'].style.backgroundColor=rgb;
document.jsaudio.Volume=-(50-document.all['vbtn'].style.posLeft)*(49-document.all['vbtn'].style.posLeft);
if (document.jsaudio.Volume<-1940){
document.jsaudio.Volume=-(50-document.all['vbtn'].style.posLeft)*(166-document.all['vbtn'].style.posLeft);
if (document.jsaudio.Volume<-8230)
document.jsaudio.Volume=-10000;
}
}
if (objct=="bbtn"){
blue=convert[(204-(Math.abs(20-document.all[objct].style.posLeft))*10)];
red=convert[(Math.abs(20-document.all[objct].style.posLeft)*10+51)];
rgb="#"+red+"00"+blue;
document.all['bbtndspl'].style.backgroundColor=rgb;
if (document.all[objct].style.posLeft==20){
document.all['mdspl'].innerText="Balance : Center"
document.jsaudio.Balance=0;
}
else{
if (document.all[objct].style.posLeft<20){
document.all['mdspl'].innerText="Balance : "+(100-document.all[objct].style.posLeft*5)+"% Left"
document.jsaudio.Balance=-(100-document.all[objct].style.posLeft*5)*(100-document.all[objct].style.posLeft*5)*0.25;
if (document.jsaudio.Balance<-1806)
document.jsaudio.Balance=-(100-document.all[objct].style.posLeft*5)*(100-document.all[objct].style.posLeft*5)*0.38;
}
else{
document.all['mdspl'].innerText="Balance : "+(0-(100-document.all[objct].style.posLeft*5))+"% Right"
document.jsaudio.Balance=(100-document.all[objct].style.posLeft*5)*(100-document.all[objct].style.posLeft*5)*0.25;
if (document.jsaudio.Balance>1806)
document.jsaudio.Balance=(100-document.all[objct].style.posLeft*5)*(100-document.all[objct].style.posLeft*5)*0.38;
}
}
}
if (objct=="trkbtn"){
cttm=Math.round(((document.all[objct].style.posLeft+3)/step)*(tstep/970));
ctmmins=parseInt(cttm/60);
ctmsecs=cttm-ctmmins*60;
if (ctmsecs<10)
ctmsecs="0"+ctmsecs;
tmins=parseInt(dur/60);
tsecs=dur-tmins*60;
if (tsecs<10)
tsecs="0"+tsecs;
perc=Math.round((100*(cttm/dur)))
llim=-3;
rlim=201;
document.all['mdspl'].innerText="Seek To : "+ctmmins+":"+ctmsecs+"/"+tmins+":"+tsecs+"  ("+perc+"%)";
}
return false;
}
}

function dactvt(){
dactiv=false;
if (track>=0){
if (rinit)
document.all['mdspl'].innerHTML=songtitle[sequence[track]];
else
document.all['mdspl'].innerHTML=songtitle[track];
}
if (objct=="trkbtn"){
document.jsaudio.stop();
if (cttm>=document.jsaudio.SelectionEnd){
if (run==true)
astop();
}
else{
document.jsaudio.SelectionStart=cttm;
ptime=0;
ctime=cttm;
stime=new Date();
stime=stime.getTime()/1000;
if (run==true)
document.jsaudio.run();
}
}
objct="";
}

function killit(){
return true;
}

function chg(w){
img=w;
if (w!="i-pl"){
x=w.substring(w.length-1,w.length);
x--;
}
else
x=5;
document.images[w].src=iprec[x].src;
setTimeout('uchg()',250)
}

function uchg(){
document.images[img].src=img+".gif";
}

function tgl1(){
if (rdm){
document.images['s'].src="i-s.gif";
rdm=false;
if (rinit)
track=sequence[track];
rinit=false;
}
else{
document.images['s'].src=iprec[6].src;
rdm=true;
rplay();
}
}

function tgl2(){
if (rpt==2){
document.images['r'].src="i-r.gif";
rpt=0;
it=document.all['mdspl'].innerText;
document.all['mdspl'].innerText="Repeat Off";
jtimer=setTimeout("document.all['mdspl'].innerText=it",2500)
}
else{
rpt++;
document.images['r'].src=iprec[7].src;
it=document.all['mdspl'].innerText;
if (rpt==1)
document.all['mdspl'].innerText="Repeat One";
else
document.all['mdspl'].innerText="Repeat All";
jtimer=setTimeout("document.all['mdspl'].innerText=it",2500)
}
}

function abt(){
window.open(String.fromCharCode(104,116,116,112,58,47,47,119,119,119,46,103,101,111,99,105,116,105,101,115,46,99,111,109,47,126,108,101,102,47,106,115,97,117,100,105,111,46,104,116,109,108),'','width=450,height=200,top=0,left=0,scrollbars=1,location=1,status=1')
}

function mtdspl(){
if (document.all['trkbtn'].style.posLeft<201)
document.all['trkbtn'].style.posLeft+=step;
}

function ctdspl(){
if (dtype==0){
dtype=1;
document.all['tdspl'].title="Remaining time [Click here to switch to Elapsed Time]";
}
else{
dtype=0;
document.all['tdspl'].title="Elapsed time [Click here to switch to Remaining Time]";
}
udspl()
}

function cpy(){
abtdiv.innerHTML=String.fromCharCode(73,110,116,101,114,110,101,116,65,109,112,32,50,46,48,60,98,114,62,98,121,60,98,114,62,76,101,102,116,101,114,105,115,32,72,97,114,105,116,111,117,60,98,114,62,67,111,112,121,105,101,100,32,98,121,32,72,97,105,78,97,109,52,55);
abtdiv.style.posTop=audiodiv.style.posTop+8;
abtdiv.style.posLeft=audiodiv.style.posLeft+8;
if (abtdiv.style.visibility=="visible"){
abtdiv.style.visibility="hidden";
clearTimeout(etimer);
}
else{
abtdiv.filters[0].Apply();
abtdiv.style.visibility="visible";
abtdiv.filters[0].Play();
etimer=setTimeout('cpy2()',8000)
}
}

function cpy2(){
abtdiv.filters[0].Apply();
abtdiv.innerHTML=String.fromCharCode(80,117,115,104,105,110,103,32,74,97,118,97,83,99,114,105,112,116,60,66,82,62,116,111,32,116,104,101,32,108,105,109,105,116,115,32,33,60,66,82,62,60,72,82,62);
abtdiv.filters[0].Play();
}

function settimes(){
mtimer=setInterval('mtdspl()',tstep);
rtimer=setInterval('checktime()',800);
}

function checktime(){
etime=new Date();
etime=Math.round(etime.getTime()/1000-stime)+ptime+ctime;
aminutes=Math.floor(etime/60);
aseconds=etime-aminutes*60;
if(aseconds<10)
aseconds="0"+aseconds;
if ((dur-(aminutes*60)-aseconds)<0){
tstop();
return;
}
udspl();
}

function udspl(){
switch (dtype){
case 0 :
document.all['tdspl'].innerHTML=aminutes+":"+aseconds;
break;
case 1:
rdur=dur-(aminutes*60)-aseconds;
aminutes=parseInt(rdur/60);
aseconds=rdur-aminutes*60;
if (aseconds<10)
aseconds="0"+aseconds;
document.all['tdspl'].innerHTML="-"+aminutes+":"+aseconds;
break;
}
}

function aplay(){
clearTimeout(rtimer);
clearTimeout(mtimer);
if (load){
if (rinit)
document.all['mdspl'].innerHTML=songtitle[sequence[track]];
else
document.all['mdspl'].innerHTML=songtitle[track];
if (run==true){
document.jsaudio.stop();
cttm=0;
ptime=0;
ctime=0;
document.jsaudio.SelectionStart=0;
document.all['trkbtn'].style.posLeft=-3;
}
document.jsaudio.run();
stime=new Date();
stime=stime.getTime()/1000;
run=true;
settimes();
}
}

function astop(){
document.jsaudio.stop();
document.jsaudio.SelectionStart=0;
cttm=0;
ptime=0;
ctime=0;
run=-1;
clearTimeout(rtimer);
clearTimeout(mtimer);
clearTimeout(jtimer);
document.all['trkbtn'].style.posLeft=-3;
document.all['tdspl'].innerHTML="0:00";
}

function apause(){
if (run==true){
ptime=etime-ctime;
document.jsaudio.pause();
clearTimeout(rtimer);
clearTimeout(mtimer);
run=false;
}
else
if(run==false){
settimes();
document.jsaudio.run();
stime=new Date();
stime=stime.getTime()/1000;
run=true;
}
}

function tstop(){
if (rpt==1)
aplay();
else
if (rpt==2)
ntrck();
else
if (track==songurl.length-1 || (track==songurl.length-2 && rdm))
astop()
else
ntrck();
}

function rplay(){
sequence=new Array();
for (x=0; x<songurl.length; x++)
if (x!=track)
sequence[x]=x;
sequence.sort(rndm)
}

function rndm(a,b){
return (Math.random()-Math.random())
}

function ptrck(){
if (run==false){
astop();
if (etime<3)
aplay();
}
if (etime>2)
aplay();
else{
if (track<=0)
return;
else{
clearTimeout(jtimer);
clearTimeout(rtimer);
clearTimeout(mtimer);
document.all['trkbtn'].style.posLeft=-3;
load=false;
track--;
if (rdm)
document.all['jsaudio'].FileName=songurl[sequence[track]]
else
document.all['jsaudio'].FileName=songurl[track];
checkit();
}
}
}

function ntrck(){
if (run==false){
astop();
aplay();
}
if (track==songurl.length-1 && rdm==false){
if (rpt==2)
track=-1;
else
return;
}
else{
if (rdm){
if (rson){
if (!rinit){
track=-1;
rinit=true;
}
if (track<songurl.length-2)
track++
else
if (rpt==2)
track=0;
else
return;
clearTimeout(jtimer);
clearTimeout(rtimer);
clearTimeout(mtimer);
load=false;
document.all['trkbtn'].style.posLeft=-3;
document.all['jsaudio'].FileName=songurl[sequence[track]]
checkit();
}
}
else{
clearTimeout(jtimer);
clearTimeout(rtimer);
clearTimeout(mtimer);
track++;
document.all['jsaudio'].FileName=songurl[track];
checkit();
}
}
}

function ctrck(w){
clearTimeout(jtimer);
clearTimeout(rtimer);
clearTimeout(mtimer);
document.all['trkbtn'].style.posLeft=-3;
load=false;
run=true;
track=w;
document.all['jsaudio'].FileName=songurl[track];
checkit();
rdm=true;
tgl1();
}

function checkit(){
document.all['mdspl'].innerText='Track Loading...';
}

function loaded(){
dur=Math.round(document.jsaudio.SelectionEnd);
step=Math.round(204/dur);
tstep=Math.round((dur/204)*step*970);
aminutes=0;
aseconds="00";
load=true;
if (run==true)
aplay();
if (run!=true){
run=-1;
udspl();
}
if (rinit)
document.all['mdspl'].innerHTML=songtitle[sequence[track]];
else
document.all['mdspl'].innerHTML=songtitle[track];
}

function plist(){
plw=window.open('','playlist','top='+(audiodiv.style.posTop+232)+',left='+(audiodiv.style.posLeft-88)+',width=420,height=185,status=0,scrollbars=1');
plw.document.write('<HTML><HEAD><TITLE>Playlist</TITLE></HEAD><Body bgcolor="#000000" text="#CCCCCC" style="border:none"><CENTER><Table style="position:absolute;top:0;left:0" width="408" border=0 Cellspacing=1 Cellpadding=2><TR Align="Center" bgcolor="#BFBFBF"><TD><Font size=2 color="#00008D" Face="Vni-Times"><B>#</B></Font></TD><TD><Font size=2 color="#00008D"  Face="Vni-Times"><B>Töïa ñeà</B></Font></TD><TD><Font size=2 color="#00008D"  Face="Vni-Times"><B>Nhaán</B></Font></TD></TR>')
for (x=0; x<songurl.length; x++)
plw.document.write('<TR Align="Center" bgcolor="#005F61"><TD Bgcolor="#9F002F"><Font size=2  Face="Vni-Times"><B>'+(x+1)+'</B></Font></TD><TD><Font size=2  Face="Vni-Times"><B>'+songtitle[x]+'</B></Font></TD><TD Bgcolor="#002870"><IMG SRC="i-abt.gif" WIDTH="18" HEIGHT="18" BORDER="0" onclick="self.close();window.opener.ctrck('+x+')" Alt="Click here to play the song : '+songtitle[x]+'"></TD></TR>')
plw.document.write('<TR Align="Center" bgcolor="#BFBFBF"><TD Colspan=3><Input type="button" style="background-color:#CCCCCC;color:#000000;font-family:Arial;font-weight:bold;font-size:10pt;width:180" Value="Close" onclick="self.close()"></TD></TR></Table></CENTER></Body></HTML>')
plw.document.close();
}
