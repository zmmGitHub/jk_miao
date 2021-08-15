//1.有效的字母异位词
var isAnagram = function(s, t) {
	if(s.length!==t.length) return false;
	const base = 'a'.codePointAt();
	const arr = Array().fill(0);
	for(i of s){
		arr[i.codePointAt()-base]++;
	}
	for(j of t){
		arr[j.codePointAt()-base]--;
		if(arr[j.codePointAt()-base]--<0;) return false;
	}
	return true;
}
//首先字符串长度一定先被pass掉了。如果参与比较说明长度一定相同
//根据每一个字母的ascall码值，减去‘a’,即出现的最小字母的ascall的值；获取其下标，然后给下标所对应的数组值++；
//遍历第二个字符串每一项。如果出现下标值为小于0.说明在第一个字符串中不存在。返回false
//否则。最后结果都为0.输出true；
//时间复杂度O(n)
//空间复杂度：字符串的长度


//2.两数之和
var twoSum = function(nums, target){ 
	if(!nums[i]) return false;
	let map = new Map();
	for(let i=0;i<nums.length;i++){
		if(map.has(target-nums[i])){
			return [map.get(target-nums[i]),i];
		}else{
			map.set(nums[i],i)
		}
	}
}
//使用哈希表的map数据结构存储数据。不存储重复的值.
//nums[i]不存在直接返回false；
//使用map的has判断。如果map数组中存在target-nums[i]的值。返回这个值和nums[i]的下标。以数组形式输出
//不存在的话。就把它以键值对的形式存在map数组中。进行下一轮判断
//时间复杂度为：O(n) 数组遍历的复杂度为O(n)。map的存储和取出是O(1)；
//空间复杂度:数组长度乘以map的长度（百度到的，老师看看对不对）


//3.N叉树的前序遍历
//第一种迭代的方式
var preorder = function(root) {
	const res=[];
	const rever = (root)=>{
		// return [];
		if(root){
		res.push(root.val);
		for(let i=0;i<n.children.length;i++){
			rever(n.children[i]);
		}
		}
	}
	rever(root);
	return res;
}
//前序遍历。先push根结点到数组；
//然后遍历每个子结点。再对子结点的值进行遍历直到root不存在。将值存入res中
//时间复杂度：O(n2)数组遍历嵌套。平方
//空间复杂度：O(n) 因为所需空间为一维数组


//第二种递归
var preorder = function(root){
	const res=[];
	function rever(root){
		if(root!==null){
			res.push(root.val);
			rever(root.left);
			rever(root.right)
		} 
	}
	rever(root);
	return res;
}
//先存入根结点的值。再遍历左子树。遍历左子树的根结点。左结点和右结点。不断递归
//左结点遍历完毕。向右遍历右子树。遍历右子树的根结点，左结点右结点。不断递归
//调用结束后输出res
//时间复杂度:O(n)遍历一次数组
//空间复杂度:递归的次数乘以递归的操作次数===O(n)

//4.字母异位词分组
var groupAnagrams = function(strs) {
  let map = new Map();
  strs.forEach((str) => {
    const key = str.split("").sort().join("");
    map.has(key) ? map.get(key).push(str) : map.set(key, [str]);    
  });
  return Array.from(map.values());
}
 //将数组每一项以空格切割，排序并使用空格连接。这样如果是字母异位词。str就是一样的字符串；作为map的key值
 //将key值以及对应的它的字符串以键值对的形式set到map数组中
 //若再一次遍历得到和key一样的。再次把它对应的原本的str压入map中
//时间复杂度：O(nlogn) 循环遍历和sort排序的logn时间复杂度
//空间复杂度：O(nk)  map需要存储数据。k字符的最长长度

