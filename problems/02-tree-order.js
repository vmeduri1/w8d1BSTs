// Implement a function that takes the root of a Binary Tree
// and returns an array containing the values from a pre-order
// traversal.
function preOrderArray(root) {
    // Your code here
    if (!root) {
        return [];
    }
    return [root.val, ...preOrderArray(root.left), ...preOrderArray(root.right)];
}

// Implement a function that takes the root of a Binary Tree
// and returns an array containing the values from an in-order
// traversal.
function inOrderArray(root) {
    // Your code here
    if (!root) {
        return [];
    }
    return [...inOrderArray(root.left), root.val, ...inOrderArray(root.right)];
}

// Implement a function that takes the root of a Binary Tree
// and returns an array containing the values from a post-order
// traversal.
function postOrderArray(root) {
    // Your code here
}


module.exports = {
  preOrderArray,
  inOrderArray,
  postOrderArray
};
