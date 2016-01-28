function readlines(s)
{
var f = new File(s);
var i,a,c;

if (f.isopen) {
i=0;
while ((a=f.readline()) && i<10) { // returns a string
var parsed = JSON.parse(a);
outlet(0,parsed.name + " " + parsed.value);
i++;
}
f.close();
} else {
post("could not open file: " + s + "\n");
}
}