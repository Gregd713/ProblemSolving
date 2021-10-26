"Use Strict";

// loop counting to 100
//loop declaring fizz or buzz
for(var i = 0; i <=100; i++){
    if(i%3===0&&i%5===0){
        console.log(i+" Fizz Buzz");
    }
    else if (i %3===0){
        console.log(i+" Fizz");}
    else if (i%5===0){
        console.log(i+" Buzz");
    }
    else{
        console.log(i)
    }
}

//Forward String
let a = "Devcode Camp";
for(let i =0;i<a.length;i++){
    console.log(a.charAt(i))
}
//Reverse String
for(let x =a.length; x>=0;x--){
    console.log(a.charAt(x))
}