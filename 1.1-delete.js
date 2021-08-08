//删除数组中重复的项
var removeDuplicates = function(nums) {
    if(!nums.length) return 0;
    let i=0;
    for(let j=1;j<nums.length;j++){
        if(nums[i]!==nums[j]){
            i++;
            nums[i]=nums[j];
        }
    }
    return i+1;
};

//双指针算法--
快慢指针的算法;
程序初始化,快指针比慢指针多走一位;
判断快指针与慢指针的是否相等. 如果相等,快指针后移一位继续与慢指针比较
如果不相等;慢指针后移一位;快指针的值赋值给慢指针
直到遍历到j结束,程序退出.返回慢指针+1 的值
