 function palindrome(str){
    for (var i = 0; i <= str.length; i++){ 
        if  (str[i] !== str[str.length - 1 - i]) {
            return "The string is not a palindrome";
        }
    }
return "The string IS a palindrome"
}

var result1=palindrome("abcdcba");
console.log(result1);


var result2=palindrome("abcdcb");
console.log(result2);