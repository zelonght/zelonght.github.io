function tip(w,h,title,text){
if (title==''){title='Nanomedia Popup Window'}
if (w==''){w='300'}
if (h==''){h='300'}
text='<link href=css.css rel=stylesheet><body topmargin=0 leftmargin=0  onBlur=window.close()><table border=0 cellpadding=0 width=100% cellspacing=0 height=100%><tr><td width=100% valign=middle align=center>'+text+'</td></tr></table></body>'
t=window.open('','win32','top='+(screen.height/2-h/2)+',left='+(screen.width/2-w/2)+',width='+w+',height='+h+',status=0,scrollbars=1')
t.document.write('<title>'+title+'</title>'+text)
t.document.close()}