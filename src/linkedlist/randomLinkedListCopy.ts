import {RandomLinkedListNode} from "./linkListPublic";

function copyRandomList(head: RandomLinkedListNode | null): RandomLinkedListNode | null {
    const dummy = new RandomLinkedListNode(0)
    let res = dummy
    let res_copy = dummy
    let head_copy = head
    const hashMap = new Map()
    while (head) {
        res.next = new RandomLinkedListNode(head.val)
        hashMap.set(head, res.next)
        res = res.next
        head = head.next
    }
    //     now copy the random node
    while (head_copy) {
        if (head_copy.random == null) {
            res_copy.next.random = null
        } else {
            res_copy.next.random = hashMap.get(head_copy.random)
        }
        res_copy = res_copy.next
        head_copy = head_copy.next
    }
    return dummy.next

}