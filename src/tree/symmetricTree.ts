import {TreeNode} from "./treePublic";

function isSymmetric(root: TreeNode | null): boolean {
    if (root == null) {
        return true
    }
    const left_ = root.left
    const right_ = root.right

    function _cmp(left: TreeNode | null, right: TreeNode | null): boolean {
        if (left == null && right == null) {
            return true
        }
        if (left != null && right == null) {
            return false
        }
        if (left == null && right != null) {
            return false
        }
        if (left != null && right != null) {
            return left.val == right.val && _cmp(left.left, right.right) && _cmp(left.right, right.left)
        }
        return false
    }

    return _cmp(left_, right_)
}