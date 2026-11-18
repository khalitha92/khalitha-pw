//count digits

//count lowercase characters

let str = 'Khalitha123';
let count = 0;
for(let ch of str){
    if(ch>=0 && ch<=9)
        count++;
}

console.log(count);