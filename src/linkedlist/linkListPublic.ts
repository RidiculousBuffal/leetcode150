export class ListNode {
    val: number
    next: ListNode | null

    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }

    public getVals() {
        const res = []
        let first = this
        const nodeSet = new Set()
        while (first) {

            if (nodeSet.has(first)) {
                break
            } else {
                nodeSet.add(first)
            }
            res.push(first.val)
            first = first.next
        }
        return res
    }
}

export class RandomLinkedListNode extends ListNode {
    val: number
    next: RandomLinkedListNode | null
    random: RandomLinkedListNode | null

    constructor(val?: number, next?: RandomLinkedListNode, random?: RandomLinkedListNode) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
        this.random = (random === undefined ? null : random)
    }

    public static createRandomLinkedList(arr: [number, number | null][]): RandomLinkedListNode | null {
        if (arr.length === 0) return null;

        // 1. 先生成所有节点，存下引用
        const nodes = arr.map(([val]) => new RandomLinkedListNode(val));

        // 2. 设置next指针
        for (let i = 0; i < nodes.length - 1; i++) {
            nodes[i].next = nodes[i + 1];
        }

        // 3. 设置random指针
        for (let i = 0; i < nodes.length; i++) {
            const randomIdx = arr[i][1];
            nodes[i].random = typeof randomIdx === 'number' ? nodes[randomIdx] : null;
        }

        return nodes[0];
    }
}


export function createLinkedListWithCycle(arr: number[], pos: number): ListNode | null {
    if (arr.length === 0) return null;

    const dummy = new ListNode(0);
    let curr = dummy;
    let cycleEntry: ListNode | null = null;

    for (let i = 0; i < arr.length; i++) {
        curr.next = new ListNode(arr[i]);
        curr = curr.next;
        if (i === pos) {
            cycleEntry = curr; // 记住 pos 位置的节点
        }
    }

    // 造环
    if (pos !== -1 && cycleEntry) {
        curr.next = cycleEntry;
    }

    return dummy.next;
}