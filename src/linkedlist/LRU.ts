/*
* 请你设计并实现一个满足  LRU (最近最少使用) 缓存 约束的数据结构。
实现 LRUCache 类：
LRUCache(int capacity) 以 正整数 作为容量 capacity 初始化 LRU 缓存
int get(int key) 如果关键字 key 存在于缓存中，则返回关键字的值，否则返回 -1 。
void put(int key, int value) 如果关键字 key 已经存在，则变更其数据值 value ；如果不存在，则向缓存中插入该组 key-value 。如果插入操作导致关键字数量超过 capacity ，则应该 逐出 最久未使用的关键字。
函数 get 和 put 必须以 O(1) 的平均时间复杂度运行。



示例：

输入
["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
[[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
输出
[null, null, null, 1, null, -1, null, -1, 3, 4]

解释
LRUCache lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // 缓存是 {1=1}
lRUCache.put(2, 2); // 缓存是 {1=1, 2=2}
lRUCache.get(1);    // 返回 1
lRUCache.put(3, 3); // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}
lRUCache.get(2);    // 返回 -1 (未找到)
lRUCache.put(4, 4); // 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}
lRUCache.get(1);    // 返回 -1 (未找到)
lRUCache.get(3);    // 返回 3
lRUCache.get(4);    // 返回 4
* */
class DoubleLinkedNode {
    public val: number
    public pre: DoubleLinkedNode | null
    public next: DoubleLinkedNode | null
    public key: number

    constructor(val: number, key: number) {
        this.val = val
        this.key = key
        this.pre = null
        this.next = null
    }
}

class LRUCache {
    private Map = new Map<number, DoubleLinkedNode>()
    private capacity: number;
    private head: DoubleLinkedNode | null = null
    private tail: DoubleLinkedNode | null = null

    constructor(capacity: number) {
        this.capacity = capacity
        this.head = new DoubleLinkedNode(-1, -1)
        this.tail = new DoubleLinkedNode(-1, -1)
        this.head.next = this.tail
        this.tail.pre = this.head
    }

    removeNode(node: DoubleLinkedNode) {
        node.pre!.next = node.next
        node.next!.pre = node.pre
        this.Map.delete(node.key)
    }

    addToHead(node: DoubleLinkedNode) {
        node.next = this.head!.next
        node.pre = this.head
        this.head!.next!.pre = node
        this.head!.next = node
        this.Map.set(node.key, node)
        return node
    }

    get(key: number): number {
        if (this.Map.has(key)) {
            const node = this.Map.get(key)
            this.removeNode(node!)
            this.addToHead(node!)
            return node?.val!
        }
        return -1
    }

    put(key: number, value: number): void {
        if (this.Map.has(key)) {
            const node = this.Map.get(key)!
            this.removeNode(node)
            this.addToHead(new DoubleLinkedNode(value, key))
        } else {
            if (this.Map.size === this.capacity) {
                this.removeNode(this.tail!.pre!)
            }
            this.addToHead(new DoubleLinkedNode(value, key))
        }
    }
}

const lRUCache = new LRUCache(2)
lRUCache.put(2, 1)
lRUCache.put(2, 2)
const a = lRUCache.get(2)
console.log(a)