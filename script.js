const sheepCount=prompt('Сколько овец нужно посчитать?')
for (let i=0; i<sheepCount; i++){
    console.log((i+1)+' овечка...');
}

let number = 0;
do{
    if(number%2==0){
        console.log(number+" четное");
    }else{
        console.log(number+" нечетное");
    }
    number++;
} while(number<=15);

let board ="";
let pos= 0;
while (true){
    pos++;
    if(pos>=72){
        break;
    }else if(pos%9==0){
        board+="\n";
    }else if(pos%2==0){
        board+="#";
    }else{
        board+=" ";
    }
}
console.log(board);