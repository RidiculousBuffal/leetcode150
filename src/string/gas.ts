// 在一条环路上有 n 个加油站，其中第 i 个加油站有汽油 gas[i] 升。
//
// 你有一辆油箱容量无限的的汽车，从第 i 个加油站开往第 i+1 个加油站需要消耗汽油 cost[i] 升。你从其中的一个加油站出发，开始时油箱为空。
//
// 给定两个整数数组 gas 和 cost ，如果你可以按顺序绕环路行驶一周，则返回出发时加油站的编号，否则返回 -1 。如果存在解，则 保证 它是 唯一 的。
//
//
//
// 示例 1:
//
// 输入: gas = [1,2,3,4,5], cost = [3,4,5,1,2]
// 输出: 3
// 解释:
//     从 3 号加油站(索引为 3 处)出发，可获得 4 升汽油。此时油箱有 = 0 + 4 = 4 升汽油
// 开往 4 号加油站，此时油箱有 4 - 1 + 5 = 8 升汽油
// 开往 0 号加油站，此时油箱有 8 - 2 + 1 = 7 升汽油
// 开往 1 号加油站，此时油箱有 7 - 3 + 2 = 6 升汽油
// 开往 2 号加油站，此时油箱有 6 - 4 + 3 = 5 升汽油
// 开往 3 号加油站，你需要消耗 5 升汽油，正好足够你返回到 3 号加油站。
// 因此，3 可为起始索引。
// 示例 2:
//
// 输入: gas = [2,3,4], cost = [3,4,3]
// 输出: -1
// 解释:
//     你不能从 0 号或 1 号加油站出发，因为没有足够的汽油可以让你行驶到下一个加油站。
// 我们从 2 号加油站出发，可以获得 4 升汽油。 此时油箱有 = 0 + 4 = 4 升汽油
// 开往 0 号加油站，此时油箱有 4 - 3 + 2 = 3 升汽油
// 开往 1 号加油站，此时油箱有 3 - 3 + 3 = 3 升汽油
// 你无法返回 2 号加油站，因为返程需要消耗 4 升汽油，但是你的油箱只有 3 升汽油。
// 因此，无论怎样，你都不可能绕环路行驶一周。
//


function canCompleteCircuit(gas: number[], cost: number[]): number {
    let gas_sum = gas.reduce((a, b) => a + b, 0)
    let cost_sum = cost.reduce((a, b) => a + b, 0)
    if (gas_sum < cost_sum) {
        return -1
    }

    function round(idx: number): [number, number] {
        let cnt = 0;
        let current_gas = 0

        while (cnt < gas.length) {
            current_gas = current_gas + gas[idx] - cost[idx]
            if (current_gas < 0) {
                return [-1, idx];
            }
            idx = (idx + 1) % gas.length;
            cnt = cnt + 1;
        }
        return [1, idx];
    }

    for (let i = 0; i < gas.length; i++) {
        let idx = round(i)
        if (idx[0] != -1 && idx[1] == i) {
            return i;
        } else {
            i = idx[1]
        }
    }
    return -1;
}

console.log(canCompleteCircuit([2,3,4], [3, 4, 3]))