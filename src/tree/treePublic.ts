export class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null

    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }

    public static buildLeetCodeTreeWithLevelOrder(arr: (number | null)[]): TreeNode | null {
        if (!arr || arr.length == 0 || arr[0] == null) {
            return null
        }
        const root = new TreeNode(arr[0])
        const queue = [root]
        let index = 1
        while (queue.length > 0 && index < arr.length) {
            const current = queue.shift()!
            // 先搞左子树
            if (index < arr.length) {
                if (arr[index] !== null) {
                    current.left = new TreeNode(arr[index]!)
                    queue.push(current.left)
                }
                index = index + 1
            }
            if (index < arr.length) {
                if (arr[index] !== null) {
                    current.right = new TreeNode(arr[index]!)
                    queue.push(current.right)
                }
                index = index + 1
            }
        }
        return root
    }

    public static buildLeetCodeTreeWithPreOrder(arr: (number | null)[]): TreeNode | null {
        if (!arr || arr.length == 0 || arr[0] == null) {
            return null
        }
        const root = new TreeNode(arr[0])
        root.left = this.buildLeetCodeTreeWithPreOrder(arr.slice(1, arr.length / 2 + 1))
        root.right = this.buildLeetCodeTreeWithPreOrder(arr.slice(arr.length / 2 + 1, arr.length))
        return root
    }
}

const arr = [3, 9, 20, null, null, 15, 7];
const arr1 = [1, 2, 4, null, null, 5, 7, 8, 3, null, null, null, 6, null,null]
const tree = TreeNode.buildLeetCodeTreeWithPreOrder(arr1)
