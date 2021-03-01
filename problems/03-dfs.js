// Implement a function that takes in the root of a
// binary tree, traverses it in depth-first-search
// order, and returns an array containing the values
// in the order you visited them.
class TreeNode {
    // Your code here
    constructor(val) {
        this.val = val;
        this.right = null;
        this.left = null;
    }
}

function dfs(root) {
    if (!root) return [];
    let stack = [root];
    let res = [];

    while (stack.length) {
        let current = stack.pop();
        res.push(current.val);
        if (current.right) stack.push(current.right);
        if (current.left) stack.push(current.left);
    }
    
    return res;
}

let a = new TreeNode('a');
let b = new TreeNode('b');
let c = new TreeNode('c');
let d = new TreeNode('d');
let e = new TreeNode('e');
let f = new TreeNode('f');
let g = new TreeNode('g');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;
c.right = g;

console.log(dfs(a));

module.exports = { dfs };