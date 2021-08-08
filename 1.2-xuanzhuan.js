//旋转数组
1.
let reverse = function(nums,start,end){
     while(start<end){
     [nums[start++],nums[end--]]= [nums[end],nums[start]];
     }
 }
  let rotate=function(nums,k){
      k %= nums.length;
     reverse(nums,0,nums.length-1);
     reverse(nums,0,k-1);
     reverse(nums,k,nums.length-1); 
     return nums;
  }
//先整体翻转数组
//再计算出k相对于数组长度的取余的值。这样减少循环次数；

翻转整个数组,以k为划分
k之前的进行单独翻转
k之后的进行单独翻转

//2.新建一个数组
var rotate = function(nums, k) {
    let arr =new Array();
    for(let i=0,len=nums.length;i<len;i++){
        arr[(i+k)%len] = nums[i];
    }
    for(let j=0;j<nums.length;j++){
        nums[j]=arr[j];
    }
};

用一个新的数组接收翻转后的数组再赋值给原数组
计算当值为k时,数组第一个的下标.依次类推;并将值赋给新数组
新数组再将值赋给原数组输出
