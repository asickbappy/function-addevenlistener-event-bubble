function evenify_all(nums){
for(let i=0; i<nums.length; i++){
    const num = nums[i];
    if(num % 2 == 0){
        console.log(num, '; is even Number');
    }else{
        console.log(num * 2, '; is odd number');
    }
}
}
nums = [5, 12, 69, 45, 18, 8];
evenify_all(nums);