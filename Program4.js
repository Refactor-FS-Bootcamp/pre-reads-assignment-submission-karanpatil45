//JS Program to Check if a Number is prime or not.
let n=3;
flag=false;
for(let i=2; i<=n/2; i++){
    if(n%i==0){
        flag=true;
        break;
    }
}
if(!flag){
    console.log(n+" is a prime number.");
}else{
    console.log(n+" is not a prime number.");
}

//how to optimize website
//Content security polciess