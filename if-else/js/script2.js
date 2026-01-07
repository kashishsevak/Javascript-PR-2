// find Max value using <= 
 
let a=10,b=20,c=5;

if(a<=b){
    if(b<=c){
        console.log("C is max");
    }else{
        console.log("B is max");
    }
}else{
    if(a<=c){
        console.log("C is max");
    }else{
        console.log("A is max");
    }
}