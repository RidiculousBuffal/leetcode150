// function minJumps(arr: number[]) {
//     const graph: Map<number, Set<number>> = new Map()
//     const helper: Map<number, number[]> = new Map()
//     arr.forEach((x, i) => {
//         if (!helper.has(x)) {
//             helper.set(x, [i])
//         } else {
//             helper.get(x)?.push(i)
//         }
//     })
//     arr.forEach((x, i) => {
//         const s = new Set<number>()
//         if (i - 1 >= 0) {
//             s.add(i - 1)
//         }
//         if (i + 1 < arr.length) {
//             s.add(i + 1)
//         }
//         helper.get(x)?.forEach(x => {
//             if (helper.has(arr[x])) {
//                 helper.get(arr[x])?.forEach(x => {
//                     if (x != i) {
//                         s.add(x)
//                     }
//                 })
//             }
//         })
//         graph.set(i, s)
//     })
//     const queue: number[] = [0]
//     const size = arr.length
//     // const matrix = Array.from({length: size}, () =>
//     //     new Array(size).fill(Infinity)
//     // );
//     const matrix = new Map<string, number>()
//     for (let i = 0; i < size; i++) {
//         matrix.set(`${i}-${i}`, 0)
//     }
//     let vis = new Array(size).fill(false)
//     while (queue.length > 0) {
//         const x = queue.shift()
//         vis[x!] = true
//         let connection = graph.get(x!)!
//         connection.forEach(k => {
//             if (matrix.has(`${0}-${k}`)) {
//                 matrix.set(`${0}-${k}`, Math.min(matrix.get(`${0}-${k}`)!, matrix.get(`${0}-${x!}`)! + 1))
//             } else {
//                 matrix.set(`${0}-${k}`, matrix.get(`${0}-${x!}`)! + 1)
//             }
//             if (!vis[k]) {
//                 queue.push(k)
//             }
//         })
//     }
//     return matrix.get(`${0}-${size - 1}`)!
// }
function minJumps(arr: number[]) {
    const myMap = new Map<number, Array<number>>()
    for (let i = 0; i < arr.length; i++) {
        if (myMap.has(arr[i])) {
            myMap.get(arr[i])?.push(i)
        } else {
            myMap.set(arr[i], [i])
        }
    }
    const queue = [0]
    const size = arr.length
    let steps = 0
    const vis = new Array(size).fill(false)
    while (queue.length > 0) {
        const len = queue.length
        for(let i = 0; i < len; i++) {
            const x = queue.shift()
            if (x == size - 1) {
                return steps
            }
            const currentValue = arr[x!]
            if (myMap.has(currentValue)) {
                myMap.get(currentValue)?.forEach(y => {
                    if (!vis[y]) {
                        queue.push(y)
                        vis[y] = true
                    }
                })
                myMap.delete(currentValue)
            }
            const next = x! + 1;
            if(next < size && !vis[next]){
                queue.push(next)
                vis[next] = true
            }
            const prev = x! - 1;
            if(prev >= 0 && !vis[prev]){
                queue.push(prev)
                vis[prev] = true
            }
        }
        steps++
    }
    return steps

}

const arr = [100, -23, -23, 404, 100, 23, 23, 23, 3, 404]
console.log(minJumps(arr))