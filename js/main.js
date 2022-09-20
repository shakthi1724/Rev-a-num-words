//Reverse a num in word order

var num = prompt("Enter the number");
function reverse(n) {
    if(n==0){
        text="Zero";
    }
    else if(n==1){
        text="One";
    }
    else if(n==2){
        text="Two";
    }
    else if(n==3){
        text="Three";
    }
    else if(n==4){
        text="Four";
    }
    else if(n==5){
        text="Five";
    }
    else if(n==6){
        text="Six";
    }
    else if(n==7){
        text="Seven";
    }
    else if(n==8){
        text="Eight";
    }
    else if(n==9){
        text="Nine";
    }
    return text;
}
var number=num;
var rev;
var rem;
while (number != 0) {
    rem = number % 10;
    rev = reverse(rem)
    number = (number - rem) / 10;
    console.log(rev);
}
