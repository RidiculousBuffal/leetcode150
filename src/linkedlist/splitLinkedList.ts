/**
 * 给你一个链表的头节点 head 和一个特定值 x ，请你对链表进行分隔，使得所有 小于 x 的节点都出现在 大于或等于 x 的节点之前。
 *
 * 你应当 保留 两个分区中每个节点的初始相对位置。
 *
 *
 */
import {ListNode} from "./linkListPublic";

function partition(head: ListNode | null, x: number): ListNode | null {
    const small = []
    const big = []
    let dummy = new ListNode()
    let res = dummy
    while (head) {
        if (head.val < x) {
            small.push(head)
        } else {
            big.push(head)
        }
        head = head.next
    }
    for (let x of small) {
        res.next = new ListNode(x.val)
        res = res.next
    }
    for (let x of big) {
        res.next = new ListNode(x.val)
        res = res.next
    }
    return dummy.next
}