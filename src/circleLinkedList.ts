import {createLinkedListWithCycle, ListNode} from "./linkListPublic";

function hasCycle(head: ListNode | null): boolean {
    if (head == null || head.next == null) {
        return false;
    }
    let l1: ListNode | null = head
    let l2 = head.next;
    while (l1 != l2) {
        if (l2 == null || l2.next == null) {
            return false;
        }
        if (l1 == null) {
            return false;
        }
        l1 = l1.next
        l2 = l2.next.next;
    }
    return true
}

const list = createLinkedListWithCycle([3, 2, 0, -4], 1)
console.log(hasCycle(list))