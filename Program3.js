//JS Program to Find the Largest Among Three Numbers.
let largest,num1,num2,num3;

function largestNum(num1,num2,num3){
    if(num1>=num2 && num1>=num3){
        largest= num1;
    }else if(num2>=num1 && num2>= num3){
        largest = num2;
    }else{
        largest =num3;
    }
    console.log(largest);
}
function maxNum(num1,num2,num3){
    const large =Math.max(num1,num2,num3);
    console.log("The largest number is "+large);
}
largestNum(90,70,60);
maxNum(50,70,30);