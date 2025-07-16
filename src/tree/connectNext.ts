import {TreeNode} from "./treePublic";

class _Node extends TreeNode {
    val: number
    left: _Node | null
    right: _Node | null
    next: _Node | null

    constructor(val?: number, left?: _Node, right?: _Node, next?: _Node) {
        super(val, left, right)
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
        this.next = (next === undefined ? null : next)
    }
}

function connect(root: _Node | null): _Node | null {
    if (!root) {
        return null
    }
    const queue = [root]
    while (queue.length > 0) {
        const length = queue.length
        for (let i = 0; i < length; i++) {
            if (i + 1 < queue.length) {
                queue[i].next = queue[i + 1]
            } else
                queue[i].next = null
        }

        for (let i = 0; i < length; i++) {
            if (queue[0].left != null) {
                queue.push(queue[0].left!)
            }
            if (queue[0].right != null) {
                queue.push(queue[0].right!)
            }
            queue.shift()
        }
    }
    return root
}

const tree = TreeNode.buildLeetCodeTreeWithLevelOrder([1, 2, 3, 4, 5, null, 7])
connect(tree as _Node)