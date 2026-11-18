//count lowercase characters

let str = 'Khalitha';
let count = 0;
for(let ch of str){
    if(ch>='a' && ch<='z')
        count++;
}

console.log(count);