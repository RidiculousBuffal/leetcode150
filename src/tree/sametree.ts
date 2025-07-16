/*
* 给你两棵二叉树的根节点 p 和 q ，编写一个函数来检验这两棵树是否相同。

如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。
* */
import {TreeNode} from "./treePublic";

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean | undefined {
    if (p == null && q == null) {
        return true
    }
    if (p == null && q != null) {
        return false
    }
    if (p != null && q == null) {
        return false
    }

    if (p != null && q != null) {
        return p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
    }
}

const tree1 = TreeNode.buildLeetCodeTreeWithLevelOrder([1, 2, 3])
const tree2 = TreeNode.buildLeetCodeTreeWithLevelOrder([1, 2, 3])

console.log(isSameTree(tree1, tree2))