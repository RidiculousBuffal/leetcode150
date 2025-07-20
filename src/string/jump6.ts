function maxResult(nums: number[], k: number): number {
    let dp: number[] = Array(nums.length).fill(0)
    let deque: number[] = [0]
    dp[0] = nums[0]
    for (let i = 1; i < nums.length; i++) {
        // 首先先弹出队头过期的
        while (deque.length > 0 && i - k > deque[0]) {
            deque.shift()
        }
        dp[i] = nums[i] + dp[deque[0]]
        while (deque.length > 0 && dp[i] >= dp[deque[deque.length - 1]]) {
            deque.pop()
        }
        deque.push(i)
    }
    return dp[dp.length - 1]
}
console.log(maxResult([1,-1,-2,4,-7,3],2))