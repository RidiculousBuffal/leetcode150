/*
* 给你一个整数数组 arr 和一个整数 d 。每一步你可以从下标 i 跳到：

i + x ，其中 i + x < arr.length 且 0 < x <= d 。
i - x ，其中 i - x >= 0 且 0 < x <= d 。
除此以外，你从下标 i 跳到下标 j 需要满足：arr[i] > arr[j] 且 arr[i] > arr[k] ，其中下标 k 是所有 i 到 j 之间的数字（更正式的，min(i, j) < k < max(i, j)）。

你可以选择数组的任意下标开始跳跃。请你返回你 最多 可以访问多少个下标。

请注意，任何时刻你都不能跳到数组的外面。

 
* */
function maxJumps(arr: number[], d: number) {
    const n = arr.length;
    const dp: number[] = new Array(n).fill(1);
    const indices: number[] = Array.from({length: n}, (_, i) => i);
    indices.sort((a, b) => arr[a] - arr[b]);
    let finalMax = 1;
    for (const i of indices) {
        const value = arr[i]
        const idx = i;
        let x = 1;
        let Max = 0;
        while (0 < x && x <= d && idx + x < arr.length) {
            const can_reach = idx + x
            if (arr[can_reach] >= value) {
                break;
            }
            Max = Math.max(Max, dp[can_reach] ?? 0)
            x = x + 1
        }
        x = 1
        while (idx - x >= 0 && x > 0 && x <= d) {
            const can_reach = idx - x
            if (arr[can_reach] >= value) {
                break;
            }
            Max = Math.max(Max, dp[can_reach] ?? 0)
            x = x + 1
        }
        dp[idx] = Max + 1

        finalMax = Math.max(finalMax, Max + 1)
    }
    return finalMax
}

console.log(maxJumps([6, 4, 14, 6, 8, 13, 9, 7, 10, 6, 12], 2))