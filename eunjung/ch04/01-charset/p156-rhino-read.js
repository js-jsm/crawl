var txt;
txt = readFile('sample-utf8.txt', 'utf-8');
print(txt);

txt = readFile('sample-unknown.txt', 'euc-kr');
print(txt);
