import {createLinkedListWithCycle, ListNode} from "./linkListPublic";

function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
    const arr: ListNode[] = []
    let head_copy = head
    let cnt = 1
    const dummy = new ListNode(0)
    let res = dummy
    const stack: ListNode[] = []
    while (head) {
        if (cnt >= left && cnt <= right) {
            stack.unshift(head)
            arr.push(new ListNode())
        } else {
            arr.push(head)
        }
        cnt++
        head = head.next
    }
    let cnt_copy = 1
    while (head_copy) {
        if (cnt_copy >= left && cnt_copy <= right) {
            res.next = new ListNode(stack.shift().val)
        } else {
            res.next = new ListNode(arr[cnt_copy - 1].val)

        }
        cnt_copy++
        res = res.next
        head_copy = head_copy.next
    }
    return dummy.next
}

const ls = createLinkedListWithCycle([1, 2, 3, 4, 5], -1)
reverseBetween(ls, 2, 4)