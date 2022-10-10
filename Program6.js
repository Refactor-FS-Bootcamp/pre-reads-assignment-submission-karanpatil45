//JavaScript Program to print the Fibonacci series.
let n1=0,n2=1,n3,i,count=10;
console.log(n1+" "+n2);//printing 0 and 1
for(i=2; i< count; i++){
    n3= n1+ n2;
    console.log(" "+n3);
    n1= n2;
    n2= n3;
}