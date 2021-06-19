function itot(){
mail.filters[0].Apply() 
mail.innerHTML ="<marquee width=100 height=80 style=font-size:24pt><center><a href=email.htm><p>Click here to check your mails or to sign up for a free mail account</p></a></center></marquee>";
mail.filters[0].Play()} 
function ttoi(){
mail.filters[0].Apply() 
mail.innerHTML ="<img style=CURSOR:hand onclick=navigate('email.htm') src=images/mail.gif >"
mail.filters[0].Play()} 
function qualai(){
ttoi()
setTimeout("itot()",12000)
setTimeout("qualai()",26000)}
qualai()