
//数组加一。数组每一项都不能超过两位数的整数

var plusOne = function(digits) {
   let carry =false;
   digits[digits.length-1]++;
   for(let i=digits.length-1;i>=0;i--){
       if(carry) digits[i]++;
       carry = digits[i]>9;
       digits[i]%=10;
   }
   if(carry)digits.unshift(1);
   return digits;
};
//遍历是否有进位。如果有进位。这个值跟10取余。然后加一
