//odd numbers to "odd", even numbers to "even"

function isEvenOrOdd(num) {
  if (num%2===0) {
  	return "even";
  }else {
    return "odd";
  }
}





// first character of each word in a string to upercase

function makeTitle(str) {
     str = str.toLowerCase().split(' ');

     for(var i = 0; i < str.length; i++){
          str[i] = str[i].split('');
          str[i][0] = str[i][0].toUpperCase();
          str[i] = str[i].join('');
     }
     return str.join(' ');
}
