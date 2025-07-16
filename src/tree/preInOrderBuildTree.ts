import {TreeNode} from "./treePublic";
/*
* 给定两个整数数组 preorder 和 inorder ，其中 preorder 是二叉树的先序遍历， inorder 是同一棵树的中序遍历，请构造二叉树并返回其根节点。
* */
// function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
//     if (preorder.length == 0) {
//         return null
//     }
//     const root_val = preorder[0]
//     const root_val_in_inorder = inorder.indexOf(root_val)
//     const left_arr = inorder.slice(0, root_val_in_inorder)
//     const right_arr = inorder.slice(root_val_in_inorder + 1)
//     const root = new TreeNode(root_val)
//     if (left_arr.length > 0) {
//         root.left = buildTree(preorder.filter(x => left_arr.indexOf(x) != -1), left_arr)
//     } else {
//         root.left = null
//     }
//     if (right_arr.length > 0) {
//         root.right = buildTree(preorder.filter(x => right_arr.indexOf(x) != -1), right_arr)
//     } else {
//         root.right = null
//     }
//     return root
// }
function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    if (preorder.length === 0) return null;

    // 创建中序遍历的值到索引的映射，避免重复使用indexOf
    const inorderMap = new Map<number, number>();
    for (let i = 0; i < inorder.length; i++) {
        inorderMap.set(inorder[i], i);
    }

    let preorderIndex = 0;

    function build(inorderStart: number, inorderEnd: number): TreeNode | null {
        if (inorderStart > inorderEnd) return null;

        // 当前根节点的值
        const rootVal = preorder[preorderIndex++];
        const root = new TreeNode(rootVal);

        // 找到根节点在中序遍历中的位置
        const rootIndex = inorderMap.get(rootVal)!;

        // 先构建左子树，再构建右子树（重要：顺序不能颠倒）
        root.left = build(inorderStart, rootIndex - 1);
        root.right = build(rootIndex + 1, inorderEnd);

        return root;
    }

    return build(0, inorder.length - 1);
}

const preorder = [3, 9, 20, 15, 7]
const inorder = [9, 3, 15, 20, 7]
buildTree(preorder,inorder)
