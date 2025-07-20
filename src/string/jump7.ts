function canReach_(s: string, minJump: number, maxJump: number): boolean {
    let dp = Array(s.length).fill(false)
    dp[0] = true
    let reach_count = 0
    // i + minJump <= j <= min(i + maxJump, s.length - 1)
    // i <= j-minJump    j<= i +maxJump i >= j-maxJump
    for (let i = 1; i < s.length; i++) {
        if (i - minJump >= 0 && dp[i - minJump]) {
            reach_count++
        }
        if (i - maxJump > 0 && dp[i - maxJump - 1]) {
            reach_count--
        }
        if (s[i] == '0' && reach_count > 0) {
            dp[i] = true
        }
    }
    return dp[s.length - 1]
}

const s = "00111010", minJump = 3, maxJump = 5
console.log(canReach_(s, minJump, maxJump))
/*
* 给你一个下标从 0 开始的二进制字符串 s 和两个整数 minJump 和 maxJump 。一开始，你在下标 0 处，且该位置的值一定为 '0' 。当同时满足如下条件时，你可以从下标 i 移动到下标 j 处：

i + minJump <= j <= min(i + maxJump, s.length - 1) 且
s[j] == '0'.
如果你可以到达 s 的下标 s.length - 1 处，请你返回 true ，否则返回 false 。



示例 1：

输入：s = "011010", minJump = 2, maxJump = 3
输出：true
解释：
第一步，从下标 0 移动到下标 3 。
第二步，从下标 3 移动到下标 5 。
示例 2：

输入：s = "01101110", minJump = 2, maxJump = 3
输出：false

* */