let a = [ 1,2,2,2,3,3,4,9,5,5,6,7,7,7,7,10,10];

let n = 3;
i = 0;
while(i < a.length){
    if(a[i] == n){ 
        for(j = i; j < a.length -1 ; j++){
            a[j] = a[j+1];
        }
        a.length = a.length - 1;
    } 
    else{i = i + 1;}
}

console.log(a) 