let mp_: Map<number, string> = new Map()
mp_.set(1, 'I')
mp_.set(4, 'IV')
mp_.set(5, 'V')
mp_.set(9, 'IX')
mp_.set(10, 'X')
mp_.set(40, 'XL')
mp_.set(50, 'L')
mp_.set(90, 'XC')
mp_.set(100, 'C')
mp_.set(400, 'CD')
mp_.set(500, 'D')
mp_.set(900, 'CM')
mp_.set(1000, 'M')

function intToRoman(num: number): string {
    let ans = ''
    while (num > 0) {
        if (num >= 1000) {
            ans = ans + mp_.get(1000)
            num = num - 1000
        } else if (num >= 900) {
            ans = ans + mp_.get(900)
            num = num - 900
        } else if (num >= 500) {
            ans = ans + mp_.get(500)
            num = num - 500
        } else if (num >= 400) {
            ans = ans + mp_.get(400)
            num = num - 400
        } else if (num >= 100) {
            ans = ans + mp_.get(100)
            num = num - 100
        } else if (num >= 90) {
            ans = ans + mp_.get(90)
            num = num - 90
        } else if (num >= 50) {
            ans = ans + mp_.get(50)
            num = num - 50
        } else if (num >= 40) {
            ans = ans + mp_.get(40)
            num = num - 40
        } else if (num >= 10) {
            ans = ans + mp_.get(10)
            num = num - 10
        } else if (num >= 9) {
            ans = ans + mp_.get(9)
            num = num - 9
        } else if (num >= 5) {
            ans = ans + mp_.get(5)
            num = num - 5
        } else if (num >= 4) {
            ans = ans + mp_.get(4)
            num = num - 4
        } else if (num >= 1) {
            ans = ans + mp_.get(1)
            num = num - 1
        }

    }
    return ans
}
console.log(intToRoman(1994))