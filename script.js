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