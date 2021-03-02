// Implement a function that takes in the root of a
// binary tree, traverses it in depth-first-search
// order, and returns an array containing the values
// in the order you visited them.
function bfs(root){
    // Your code here
    if (!root) return [];
    let res = [];
    let queue = [root];

    while (queue.length) {
        let current = queue.shift();
        res.push(current.val);
        if (current.left) queue.push(current.left);
        if (current.right) queue.push(current.right);
    }
    return res;
}

module.exports = { bfs };
