//count uppercase characters

let str = 'Khalitha';
let count = 0;
for(let ch of str){
    if(ch>='A' && ch<='Z')
        count++;
}

console.log(count);