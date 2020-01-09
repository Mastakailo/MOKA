
function isAdult(age) {
    if (typeof(age) !=='number')return undefined ;
    else if (age > 17)return true;
    else if (age <= 0 )return "wrong age";
    return false;
}
 function sortArrayUp( arr = [] ) {
     for (let i = 0; i < arr.length; i++){
        if ({}.toString.call(arr[i]) !== '[object Number]') return undefined;
        }
     if ({}.toString.call(arr) !== '[object Array]') return undefined;
    return arr.sort((a,b) => a-b);
 }
// }
//
//
//
// funct isPalindrome() {
//
// }
//
// function isOddnumber(){
// }
//
// function

//test function Is Adult (number) --> true/false
// func sortArrayUp ( [2, 3, 4, 0, 1]) ---> [0, 1, 2, 3, 4]
// funct isPalindrome(‘ogo’) ---> true, (‘og’) --> false
// function isOddNumber,
// function isEvenNumber





module.exports = {isAdult,sortArrayUp};