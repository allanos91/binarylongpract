// Before starting, copy and paste your guided practice work from
// `binary-search-tree.js` into this file
class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }

  class BinarySearchTree {

    constructor() {
      this.root = null
    }

    insert(val, currentNode=this.root) {
      const newNode = new TreeNode(val)
      if (this.root === null) {
        this.root = newNode
        return
      }
      if (val < currentNode.val) {
        if (!currentNode.left) {
          currentNode.left = newNode
        } else {
          this.insert(val, currentNode.left)
        }
      }

      if (val > currentNode.val) {
        if (!currentNode.right) {
          currentNode.right = newNode
        } else {
          this.insert(val, currentNode.right)
        }
        }

    }

    search(val) {
      let tree = this.root
      while (tree) {
        if (val === tree.val) {
          return true
        }
        else if (val < tree.val) {
          tree = tree.left
        }
        else if (val > tree.val) {
          tree = tree.right
        }
      }
      return false
      //tree = this.root) {

      // if (tree === null) return false

      // if (val === tree.val) return true

      // if (val < tree.val) {
      //   return this.search(val, tree.left)
      // }

      // if (val > tree.val) {
      //   return this.search(val, tree.right)
      // }
    }


    preOrderTraversal(currentNode = this.root) {
      if (currentNode.left === null) {
        console.log(currentNode.val)
        if (currentNode.right) {
          return this.preOrderTraversal(currentNode = currentNode.right)
        }
      }
      if (currentNode.left) {
        console.log(this.postOrderTraversal(currentNode = currentNode.left))
      }
    }


    inOrderTraversal(currentNode = this.root) {
        if (!currentNode) {
            return
        }
        this.inOrderTraversal(currentNode.left)
        console.log(currentNode)
        this.inOrderTraversal(currentNode.right)
    }


    postOrderTraversal(currentNode = this.root) {
      // Your code here
    }

      // Breadth First Traversal - Iterative
    breadthFirstTraversal() {
      // Your code here
    }

    // Depth First Traversal - Iterative
    depthFirstTraversal() {
      // Your code here
    }
  }

  module.exports = { BinarySearchTree, TreeNode };


// Your code here
