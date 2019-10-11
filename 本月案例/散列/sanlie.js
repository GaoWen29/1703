let arr = Array(127)

function  betterHash(str){
   let H = 9;
   let sum = 0;
   for(let i=0;i<str.length;i++){
        sum+=str.charCodeAt(i)*H;
   }
   return sum%str.length;
}
console.log(betterHash("xissssasdadaao"))
