Var f:text;
    i:byte;
    s:string;
Begin
{  Assign(f,paramstr(1));
  Reset(f);
  Repeat
    Read(f,i);
    Write(chr(i));
  Until EOF(f);
  Close(f);}
  ReadLn(s);
  For i:=1 to length(s) do Write(ord(s[i]),',');
end.