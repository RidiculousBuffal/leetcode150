import {createLinkedListWithCycle, ListNode} from "./linkListPublic";

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
    let dummy = new ListNode();
    let res = dummy
    let cnt = 1
    const stack: ListNode[] = [];
    while (head) {
        if (cnt <= k) {
            stack.push(new ListNode(head.val))
            head = head.next;
            cnt = cnt + 1;
        } else {
            while (stack.length > 0) {
                res.next = stack.pop()!
                res = res.next
            }
            cnt = 1
        }

    }
    if(cnt>k){
        while (stack.length > 0) {
            res.next = stack.pop()!
            res = res.next
        }
    }else{
        for (let x of stack){
            res.next = new ListNode(x.val)
            res = res.next
        }
    }
    return dummy.next
}
let c = createLinkedListWithCycle([1,2,3,4,5],-1)
reverseKGroup(c,2)