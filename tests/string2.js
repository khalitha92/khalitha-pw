let str = 'madam'
let rev = ''
for(i=str.length-1;i>=0;i--){
    rev+=str[i]
}
console.log(str===rev?'plaindrome':'not palindrome')