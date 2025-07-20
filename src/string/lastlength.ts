function lengthOfLastWord(s: string) {
    return s.split(' ').filter(x=>x!='').pop()?.length ?? 0
}
console.log(lengthOfLastWord('hello world    '))