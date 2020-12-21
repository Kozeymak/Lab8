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

function sort(a,b,c){
    mas=[a,b,c];
    let j;
    for(let i=0; i<mas.length-1;i++){
        let min=mas[i];
        let minpos=i;
        for(j=i+1; j<mas.length; j++){
            if (mas[j]<min){
                min=mas[j];
                minpos=j;
            }
        }
        let t=mas[i];
        mas[i]=min;
        mas[minpos]=t;
    }
    result='';
    for(let i=0; i<mas.length; i++){
        result+=(mas[i]+', ');
    }
    result=result.slice(0,-2);
    console.log(result);
}
sort(5,2,7);

function max(a,b,c,d,e){
    mas=[a,b,c,d,e];
    let max=mas[0];
    for(let i=1; i<mas.length; i++){
        if (mas[i]>max){
            max=mas[i];
        }
    }
    console.log(max);
}
max(7,-2,14,3,0);