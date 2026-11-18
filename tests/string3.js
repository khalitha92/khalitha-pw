//count vowels
let str = 'Playwright';
let count = 0;
for(let ch of str.toLowerCase())
    if('aeiou'.includes(ch))
        count++;
console.log(count);
