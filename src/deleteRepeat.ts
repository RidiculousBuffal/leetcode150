import {createLinkedListWithCycle, ListNode} from "./linkListPublic";

function deleteDuplicates(head: ListNode | null): ListNode | null {
    if (head === null) {
        return null
    }
    if (head.next === null) {
        return head
    }
    let slow: ListNode | null = head
    let fast: ListNode | null = head.next
    let dummy = new ListNode()
    let res = dummy
    const set = new Set()
    while (slow) {
        if ((fast && slow.val != fast.val && !set.has(slow.val)) || (slow == fast && !set.has(slow.val))) {
            res.next = new ListNode(slow.val)
            res = res.next
        } else {
            set.add(slow.val)
        }
        slow = slow.next
        if (fast && fast.next) {
            fast = fast.next
        }
    }
    return dummy.next
}

const ls = createLinkedListWithCycle([1, 2, 3, 3, 4, 4, 5], -1)
deleteDuplicates(ls)