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

//Capitalizing first let of words
let b= "hello world";
let b2= b.charAt(0).toUpperCase()+b.slice(1);
console.log(b2)

//Compressing string of characters
const str1 ='aaaaccccbbdddd'
const str2 ='hhhjjjjkkkkklllll'
const str3 ='mmmmmnnnnnnfffff'
const compressString=(str='')=>{
    let res ='';
    let count =1;
    for(let i=0;i<str.length;i++){
        let cur=str[i];
        let next =str[i+1];
        if(cur===next){
            count++;
        }
        else{res +=cur+String(count);
        count=1;}
    };
    return res.length<str.length?res:str;
};
console.log(compressString(str1));
console.log(compressString(str2));
console.log(compressString(str3));