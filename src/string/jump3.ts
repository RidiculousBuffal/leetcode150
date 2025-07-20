// 这里有一个非负整数数组 arr，你最开始位于该数组的起始下标 start 处。当你位于下标 i 处时，你可以跳到 i + arr[i] 或者 i - arr[i]。
//
// 请你判断自己是否能够跳到对应元素值为 0 的 任一 下标处。
//
// 注意，不管是什么情况下，你都无法跳到数组之外。
//
//
//
// 示例 1：
//
// 输入：arr = [4,2,3,0,3,1,2], start = 5
// 输出：true
// 解释：
// 到达值为 0 的下标 3 有以下可能方案：
// 下标 5 -> 下标 4 -> 下标 1 -> 下标 3
// 下标 5 -> 下标 6 -> 下标 4 -> 下标 1 -> 下标 3
// 示例 2：
//
// 输入：arr = [4,2,3,0,3,1,2], start = 0
// 输出：true
// 解释：
// 到达值为 0 的下标 3 有以下可能方案：
// 下标 0 -> 下标 4 -> 下标 1 -> 下标 3
// 示例 3：
//
// 输入：arr = [3,0,2,1,2], start = 2
// 输出：false
// 解释：无法到达值为 0 的下标 1 处。
//

function canReach(arr: number[], start: number): boolean {
    const map: Map<number, Array<number>> = new Map()
    arr.forEach((x,i) => map.set(i, []))
    arr.forEach((x, i) => {
        if ((i - x) >= 0 && (i - x) < arr.length) {
            map.get(i)?.push(i - x)
        }
        if ((i + x) >= 0 && (i + x) < arr.length) {
            map.get(i)?.push(i + x)
        }
    })
    // 遍历
    let vis = new Array(arr.length).fill(false);

    function dfs(currentIdx: number): boolean {
        if (arr[currentIdx] === 0) {
            return true
        }
        if (vis[currentIdx]) {
            return false
        }
        vis[currentIdx] = true
        if (!map.has(currentIdx)) {
            return false
        }
        for (let x of map.get(currentIdx)!) {
            if (dfs(x)) {
                return true
            }
        }
        return false
    }

    return dfs(start)
}
console.log(canReach([4,2,3,0,3,1,2], 5))