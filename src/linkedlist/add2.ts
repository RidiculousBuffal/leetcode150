import {createLinkedListWithCycle, ListNode} from "./linkListPublic";

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const dummy = new ListNode(0, null)
    let res = dummy
    let flag = 0
    while (l1 && l2) {
        const l1val = l1.val;
        const l2val = l2.val;
        if (l1val + l2val + flag >= 10) {
            res.next = new ListNode(l1val + l2val + flag - 10, null);
            flag = 1;
        } else {
            res.next = new ListNode(l1val + l2val + flag, null);
            flag = 0
        }
        l1 = l1.next;
        l2 = l2.next;
        res = res.next
    }
    while (l1) {
        if (l1.val + flag >= 10) {
            res.next = new ListNode(l1.val + flag - 10)
            flag = 1
        } else {
            res.next = new ListNode(l1.val + flag)
            flag = 0
        }
        l1 = l1.next;
        res = res.next;
    }
    while (l2) {
        if (l2.val + flag >= 10) {
            res.next = new ListNode(l2.val + flag - 10)
            flag = 1
        } else {
            res.next = new ListNode(l2.val + flag)
            flag = 0
        }
        l2 = l2.next;
        res = res.next;
    }
    if (flag == 1) {
        res.next = new ListNode(1);
    }
    return dummy.next
}

const l1 = createLinkedListWithCycle([2, 4, 3], -1)
const l2 = createLinkedListWithCycle([5, 6, 4], -1)
const res = addTwoNumbers(l1, l2)
console.log(res?.getVals())
