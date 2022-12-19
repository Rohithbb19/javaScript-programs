let num=50;
let i;
let j;

for(i=1;i<=num;i++){
    var count=0;
    for(j=1;j<=i/j;j++){
        if(i%j==0){
            count++;
            if(j!=i/j)count++;
        }
    }if(count==2)console.log(i);
}