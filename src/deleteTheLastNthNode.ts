import {createLinkedListWithCycle, ListNode} from "./linkListPublic";

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    if (head === null) {
        return null;
    }
    if (head.next == null) {
        if (n == 1) {
            return null;
        } else {
            return head;
        }
    }
    let dummy = new ListNode();
    let res = dummy
    let cnt = 0;
    let head_copy: ListNode | null = head;
    while (head) {
        cnt = cnt + 1
        head = head.next
    }
    const skip = cnt - n + 1
    let cnt_copy = 1
    while (head_copy) {
        if (cnt_copy != skip) {
            res.next = new ListNode(head_copy.val);
            res = res.next
        }
        cnt_copy = cnt_copy+1
        head_copy = head_copy.next
    }
    return dummy.next;
};
const ls = createLinkedListWithCycle([1,2,3,4,5],-1)
removeNthFromEnd(ls,2)