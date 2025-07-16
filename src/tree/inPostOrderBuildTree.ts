import {TreeNode} from "./treePublic";

/*
* ## 算法原理
**关键思路**：
1. **后序遍历的最后一个元素就是根节点**（因为后序遍历顺序是：左子树 → 右子树 → 根节点）
2. **在中序遍历中找到根节点的位置**，可以将树分为左子树和右子树
3. **递归构建**左子树和右子树

## 具体步骤
1. 从后序遍历数组的**最后一个元素**获取根节点
2. 在中序遍历数组中找到根节点的位置
3. 根据根节点位置将中序遍历数组分为：
    - 左子树的中序遍历
    - 右子树的中序遍历

4. 根据左子树节点数量，将后序遍历数组分为：
    - 左子树的后序遍历
    - 右子树的后序遍历

5. 递归构建左子树和右子树

*
* */
function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
    if (postorder.length === 0) {
        return null
    }
    const inorderMap = new Map<number, number>()
    const postorderMap = new Map<number, number>()
    for (let i = 0; i < inorder.length; i++) {
        inorderMap.set(inorder[i], i)
    }
    for (let i = 0; i < postorder.length; i++) {
        postorderMap.set(postorder[i], i)
    }

    function build(inorderStart: number, inorderEnd: number): TreeNode | null {
        if (inorderStart > inorderEnd) {
            return null
        }
        const rootVal = postorder[Math.max(...inorder.slice(inorderStart,inorderEnd+1).map(x=>postorderMap.get(x)) as number[])]
        const root = new TreeNode(rootVal)
        const rootIndex = inorderMap.get(rootVal)!
        root.left = build(inorderStart, rootIndex - 1)
        root.right = build(rootIndex + 1, inorderEnd)
        return root
    }

    return build(0, inorder.length - 1)
}

const inorder = [9, 3, 15, 20, 7]
const postorder = [9, 15, 7, 20, 3]
buildTree(inorder, postorder)