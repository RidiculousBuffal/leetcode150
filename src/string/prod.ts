function productExceptSelf(nums: number[]): number[] {
    let num  = 1;
    let ans = [1]
    for (let i = 1 ; i < nums.length; i++){
        num = num*nums[i-1]
        ans.push(num)
    }
    let suffix = 1;
    for (let i = nums.length-1; i >= 0; i--){
        ans[i] = ans[i]* suffix
        suffix = suffix*nums[i]
    }
    return ans

}
console.log(productExceptSelf([1,2,3,4]))