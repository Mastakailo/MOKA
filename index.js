function power (a,b){
    if (typeof(a,b)!=='number')return 'Wrong data';
    return Math.pow(a,b);
}

function exclusiveElements (arr) {
    return arr.filter(( el, i ) => i === el.indexOf());
}

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

function isPalindrome ( word ) {
     if (typeof(word) =='number'){
         return String(word) === String(word).split('').reverse().join('');
     }
     if ({}.toString.call(word) !== '[object String]') return undefined;

     // for (let i = 0; i < word.length; i++){
     //     if ( Number.isNaN(+word[i])||typeof(word[i]=='number') ) return false;
     //}
   return word === word.split('').reverse().join('');

}

function isOddnumber(num){
    if (typeof (num) !=='number'){
        return "Wrong data";
    }
    if (num % 2 === 1 )return true;
    return false ;


}

function evenNumber(num){
    if (typeof (num) !=='number'){
        return "Wrong data";
    }
    if (num % 2 === 0 )return true;
    return false ;


}



}




module.exports = {isAdult,sortArrayUp,isPalindrome,isOddnumber,evenNumber,power,exclusiveElements};