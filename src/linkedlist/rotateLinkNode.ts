import {ListNode} from "./linkListPublic";

/*
* 假设链表是 `1 -> 2 -> 3 -> 4 -> 5`，k = 2
1. **计算长度**：length = 5
2. **优化k**：k = 2 % 5 = 2
3. **形成环**：`1 -> 2 -> 3 -> 4 -> 5 -> 1`
4. **找新尾节点**：从头开始走 5-2-1=2 步，到达节点3
5. **新头节点**：节点3的下一个节点是节点4
6. **断开环**：将节点3的next置为null

* */
function rotateRight(head: ListNode | null, k: number): ListNode | null {
    if (!head || !head.next || k === 0) {
        return head;
    }
    let length = 1;
    let tail = head;
    while (tail.next) {
        tail = tail.next;
        length++;
    }
    k = k % length
    if (k === 0) {
        return head;
    }

    // 形成环
    tail.next = head
    let newTail = head
    for (let i = 0; i < length - k - 1; i++) {
        newTail = newTail.next!
    }
    let newHead = newTail.next
    newTail.next = null
    return newHead
}