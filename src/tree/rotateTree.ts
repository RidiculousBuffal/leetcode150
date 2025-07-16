// 给你一棵二叉树的根节点 root ，翻转这棵二叉树，并返回其根节点。

import {TreeNode} from "./treePublic";

function invertTree(root: TreeNode | null): TreeNode | null {
    if (root == null) {
        return null
    } else {
        const l = root.left
        root.left = root.right
        root.right = l
        invertTree(root.left)
        invertTree(root.right)
        return root
    }
}