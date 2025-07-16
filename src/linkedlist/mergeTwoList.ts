import {createLinkedListWithCycle, ListNode} from "./linkListPublic";

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    if (!(list1 || list2)) {
        return null
    }
    const dummy = new ListNode(0, null)
    let res = dummy
    while (list1 && list2) {
        if (list1.val < list2.val) {
            res.next = new ListNode(list1.val, null)
            list1 = list1.next
        } else {
            res.next = new ListNode(list2.val, null)
            list2 = list2.next
        }
        res = res.next
    }
    while (list1) {
        res.next = new ListNode(list1.val, null)
        list1 = list1.next
        res = res.next
    }
    while (list2) {
        res.next = new ListNode(list2.val, null)
        list2 = list2.next
        res = res.next
    }
    return dummy.next
}

const l1 = createLinkedListWithCycle([-9, 3], -1)
const l2 = createLinkedListWithCycle([5, 7], -1)
const l3 = mergeTwoLists(l1, l2)
console.log(l3?.getVals())