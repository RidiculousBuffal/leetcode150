let mp: Map<string, number> = new Map()
mp.set('I', 1)
mp.set('V', 5)
mp.set('X', 10)
mp.set('L', 50)
mp.set('C', 100)
mp.set('D', 500)
mp.set('M', 1000)

function romanToInt(s: string): number {
    let ans = 0
    ans = ans + (mp.get(s[0]) as number)
    for (let i = 1; i < s.length; i++) {
        if ((mp.get(s[i - 1]) as number) < (mp.get(s[i]) as number)) {
            ans = ans - (mp.get(s[i - 1]) as number) +(mp.get(s[i]) as number - (mp.get(s[i - 1]) as number))
        } else {
            ans = ans + (mp.get(s[i]) as number)
        }
    }
    return ans
}
console.log(romanToInt('IV'))