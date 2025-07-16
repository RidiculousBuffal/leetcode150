import {TreeNode} from "./treePublic";
/*
* 给定一个二叉树 root ，返回其最大深度。

二叉树的 最大深度 是指从根节点到最远叶子节点的最长路径上的节点数。
* */
function maxDepth(root: TreeNode | null): number {
    function _calDepth(root: TreeNode | null, depth: number): number {
        if (root == null) {
            return depth-1 // 这一层是null,之前加的要减去
        }
        const left = _calDepth(root.left, depth + 1)
        const right = _calDepth(root.right, depth + 1)
        return Math.max(left, right)
    }

    if (root == null) {
        return 0
    } else {
        return _calDepth(root, 1)
    }
}

const tree = TreeNode.buildLeetCodeTreeWithLevelOrder([3, 9, 20, null, null, 15, 7])
maxDepth(tree)