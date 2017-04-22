splitStr = (str, delimeter = ",") ->
    str.split(delimeter)

s1 = "1,2,3"
console.log splitStr(s1)

s2 = "1:2:3"
console.log splitStr(s2, ":")
