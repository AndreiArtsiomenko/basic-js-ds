const {
    NotImplementedError
} = require('../extensions/index.js');

const {
    Node
} = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */

class BinarySearchTree {
    constructor() {
        this.rootHead = null;
    }

    root() {
        return this.rootHead
    }

    add(data) {
        function addNodeTree(node, data) {
            if (!node) {
                return new Node(data);
            }
            if (data === node.data) {
                return node;
            }
            if (data < node.data) {
                node.left = addNodeTree(node.left, data)
            } else {
                node.right = addNodeTree(node.right, data)
            }
            return node;
        }

        this.rootHead = addNodeTree(this.rootHead, data)
    }

    has(data) {
        function searchNodeTree(node, data) {
            if (!node) {
                return false;
            }
            if (data === node.data) {
                return true
            }

            return (data < node.data) ? searchNodeTree(node.left, data) : searchNodeTree(node.right, data);
        }

        return searchNodeTree(this.rootHead, data)
    }

    find(data) {
        function searchNodeTree(node, data) {
            if (!node) {
                return null;
            }
            if (data === node.data) {
                return node;
            }

            return (data < node.data) ? searchNodeTree(node.left, data) : searchNodeTree(node.right, data);
        }

        return searchNodeTree(this.rootHead, data)
    }

    remove(data) {
        function removeNode(node, data) {
            if (!node) {
                return null;
            }

            if (data < node.data) {
                node.left = removeNode(node.left, data);
                return node;
            } else if (data > node.data) {
                node.right = removeNode(node.right, data);
                return node;
            } else {
                if (!node.left && !node.right) {
                    return null
                }
                if (!node.left) {
                    node = node.right;
                    return node;
                }
                if (!node.right) {
                    node = node.left;
                    return node;
                }
                let maxLeft = node.left;
                while (maxLeft.right) {
                    maxLeft = maxLeft.right;
                }
                node.data = maxLeft.data
                node.left = removeNode(node.left, maxLeft.data)

                return node;
            }
        }

        this.rootHead = removeNode(this.rootHead, data)
    }

    min() {
        if (!this.rootHead) {
            return null;
        }
        let nodeMin = this.rootHead;
        while (nodeMin.left) {
            nodeMin = nodeMin.left
        }

        return nodeMin.data
    }

    max() {
        if (!this.rootHead) {
            return null;
        }
        let nodeMax = this.rootHead;
        while (nodeMax.right) {
            nodeMax = nodeMax.right
        }

        return nodeMax.data
    }
}

module.exports = {
    BinarySearchTree
};