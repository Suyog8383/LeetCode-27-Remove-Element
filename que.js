function find(nums, val) {
    let result=[]
    for(let i=0;i<nums.length;i++){
        if(nums[i] != val){
            result.push(nums[i])
        }
    }
    return result.length;
};
console.log(find([0,1,2,2,3,0,4,2],2));


function find1(nums, val) {
  var zeroStartIdx = 0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]!==val){
            nums[zeroStartIdx]=nums[i];
            zeroStartIdx++
        }
    }
    return zeroStartIdx; 
};
console.log(find1([0,1,2,2,3,0,4,2],2));
