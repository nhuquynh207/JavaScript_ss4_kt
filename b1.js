let n=10;
if (n%2===0) {
    console.log(`Số ${n} là số chẵn`);
} else {
    console.log(`Số ${n} là số chẵn`);
    
}
//2
if(n>0){
    console.log(`${n} là số dương`);
    console.log("Dãy số từ 1 đến",n);
    
    for (let i = 1; i <= n; i++) {
        console.log(i);
    }
    
}else if(n<0){
    console.log(`${n} là số âm`);
    console.log("Giá trị này không hợp lệ để tạo dãy số");
    
    
}else{
    console.log("n bằng 0");
    console.log("Giá trị này không hợp lệ để tạo dãy số");
}


