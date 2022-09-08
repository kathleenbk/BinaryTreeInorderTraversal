// Given the root of a binary tree, return the inorder traversal of its nodes' values.



// Example 1:
// Input: root = [1,null,2,3]
// Output: [1,3,2]

// Example 2:
// Input: root = []
// Output: []

// Example 3:
// Input: root = [1]
// Output: [1]

// Constraints:
// The number of nodes in the tree is in the range [0, 100].
// -100 <= Node.val <= 100

// Follow up: Recursive solution is trivial, could you do it iteratively?

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

var inorderTraversal = function (root) {
    if (root === null) return [];  //edge case, if input is empty

    let output = [];

    var traverseRecursive = function (node) {
        if(node.left) traverseRecursive(node.left); //if there is a node.left, run the function with node.left instead of just node-- and so on
        output.push(node.val);

        if(node.right) traverseRecursive(node.right); // ^^
    };

    traverseRecursive(root); //runs the above function

    return output;
};