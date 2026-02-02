let sum=0;
let fizz=0;

for (let i = 1; i <= 50; i++) {
    if (i%5===0 && i%3===0) {
        console.log("FizzBuzz");
        
        
        
    }else if( i%5 === 0){
        console.log("Buzz");
        
    }else if(i%3===0){
        console.log("Fizz");
        fizz++;
        sum+=i;
        
        
    }else{
        console.log(i);
        
    }
    
}
console.log("Tổng tất cả các số đã in ra chữ Fizz là:",sum);
