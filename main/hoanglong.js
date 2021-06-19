//created by zelonght@yahoo.co.uk
var i=-1,k=0,style=0,delay1=100,delay2=1000,t1="",t2="",t3="",d=new Date(),s=new Array()
s[0]="Welcome to Nanomedia web site"
s[1]="A web powered by Truong Hoang Long"
s[2]=" "
s[3]="I hope you will find something wonderful"
s[4]="as soon as possible"
s[5]="Thanks for your visiting. For any idea:"
s[6]="address mail to zelonght@yahoo.co.uk"
s[7]=" "
s[8]="Latest updated: "+d.getDate()+"/"+(d.getMonth()+1)+"/"+d.getFullYear()
s[9]=" "
s[10]=" "
function hoanglong(){if (i==s[k].length-1 & style==0){i=-1;t2="";if(k==(s.length-1)){k=-1};k++;setTimeout("hoanglong()",delay2);}else{if (style==0){style=1}else{style=0};if (style==1){i++;t1=s[k].substring(i,i+1).toUpperCase();t3=t2+t1}else{t1=s[k].substring(i,i+1);t2=t2+t1;t3=t2};window.status=t3 + "_";setTimeout("hoanglong()",delay1)}};hoanglong();