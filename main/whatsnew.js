﻿var whatnew = new Array(), d=new Date(), curyear=d.getFullYear(), curmonth=d.getMonth()+1, bnam=2002, bthang=7, i, j;
whatnew[2002*12+7]="01/07/2002: số trang là 38 (hai trang mới: bảng vàng, kiến thức và các trang con), Game mới microsoft chip, nanomedia smart, nhạc: các lời bài hát, các nối kết mới, tổng số files: 145. 22/07/2002: đổi giao diện và cấu trúc, tổng số files: 188, hyperlinks: 657.31/07/2002: lắp đặt sổ nhật ký. Đã có phòng trò chuyện (Chat room)";
whatnew[2002*12+8]="Lắp đặt menu. Nâng cấp phòng nghe nhạc với tổng số trên 180 bài nhạc.Game mới, phầm mềm mới";
whatnew[2002*12+9]="Improve automation of the web";
whatnew[2002*12+10]="Send Nanomedia card 2.0 to Trí tuệ Việt Nam contest";
whatnew[2002*12+11]="Nanomedia Card 2.0 is presented by Lao Động journal and TTVN Website";
whatnew[2002*12+12]="Prepare for Robocon contest - Update knowledge page: learn C streamline English by Litenning";
whatnew[2003*12+1]="Happy new year - Let's find some card for your friends";
whatnew[2003*12+2]="Go to picture site to voyage in French";
whatnew[2003*12+3]="Update knowledge page: Voyage around the world - check it out";
whatnew[2003*12+4]="Update knowledge page: Discovery about a wonderful phenomena: Sonoluminescence - What's it?";
whatnew[2003*12+5]="Update software page";
whatnew[2003*12+6]="Did you know: You can use your mouse to access any useful site in the address page - try it now";
whatnew[2003*12+7]="Finish a course about ADSL at KASATI"
whatnew[2003*12+8]="Go to do s.t at s.where donnt like to talk"
whatnew[2003*12+9]="Begin new semester, really bad"
whatnew[2003*12+10]="Nanomedia Card 3.0 beta is released" 
whatnew[2003*12+11]="Nanomedia Card 3.0 is sent to TTVN 2003"
whatnew[2003*12+12]="Try to forget one thing, but really hard"
whatnew[2004*12+1]="Nothing important has been made"
whatnew[2004*12+2]="Happy New Year to everyone"
whatnew[2004*12+3]="Welcome you tialia, a website that I really love"
whatnew[2004*12+4]="Finish Pressure Fuzzy Controller"
whatnew[2004*12+5]="Finish Motor Fuzzy Controller"
whatnew[2004*12+6]="Take the 2nd Semester Examination with many difficulties"
whatnew[2004*12+7]="Go to the Green Summer"
whatnew[2004*12+8]="Surely with my Family"
whatnew[2004*12+9]="The hard and exciteing period of life, the last year of a student"
whatnew[2004*12+10]="Who knows where I have time to tell you about this month"
whatnew[2004*12+11]="I hope I am finding s.t good about my work"
whatnew[2004*12+12]="May take a rest, It's about time to welcome new year 2005"
whatnew[2005*12+1]="New Year Begin, review something, not in this site but another site"
whatnew[2005*12+2]="Vietnam traditional Tet holiday, what can I do, ha ha"
whatnew[2005*12+3]="Pls notice that in the life, there s.t that s.o donnt like to write 'cause he love you and donnt want you to waste of ur time. Ha"
j=bnam;
for(i=bthang;i<13;i++){
    if(whatnew[j*12+i]==undefined){
        whatnew[j*12+i] = "Nothing new, stay tuned and check back later!";
    }
    document.write("<ul dynamicoutline initcollapsed><li><p class='hand'>Tháng " + i + "/" + j + "<ul><li>" + whatnew[j*12+i] + "</li></ul></li></ul>");
    if(j>=curyear && i>=curmonth){i=13;}
    if(i==12){i=0;j++;}
}