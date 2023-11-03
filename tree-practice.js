const { BinarySearchTree, TreeNode } = require('./binary-search-tree.js');
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

// Practice problems on binary trees

function findMinBST (rootNode) {
  while (rootNode.left) {
    rootNode = rootNode.left
  }
  return rootNode.val
}

function findMaxBST (rootNode) {
  while (rootNode.right) {
    rootNode = rootNode.right
  }
  return rootNode.val
}

function findMinBT (rootNode) {
  let queue = [rootNode]
  let min = rootNode.val
  while (queue.length) {
    let currNode = queue.pop()
    if (currNode.val < min) {
      min = currNode.val
    }
    if (currNode.left) {
      queue.push(currNode.left)
    }

    if (currNode.right) {
      queue.push(currNode.right)
    }
  }
  return min
}

function findMaxBT (rootNode) {
  let queue = [rootNode]
  let max = rootNode.val
  while (queue.length) {
    let currNode = queue.shift()
    if (currNode.val > max) {
      max = currNode.val
    }
    if (currNode.left) {
      queue.push(currNode.left)
    }

    if (currNode.right) {
      queue.push(currNode.right)
    }
  }
  return max
}

function getHeight (rootNode) {
  let count = -1
  let queue = [rootNode]
  let arr2 = []
  if (!rootNode) {
    return -1
  }
  if (!rootNode.left && !rootNode.right) {
    return 0
  }
  while (queue.length) {
    count += 1
    queue.forEach(currNode => {
      if (currNode.left) {
        arr2.push(currNode.left)
      }
      if (currNode.right) {
        arr2.push(currNode.right)
      }
    })
    queue = arr2
    arr2 = []
  }
  return count
}

function balancedTree (rootNode) {
  let rVal = getHeight(rootNode.right)
  let lVal = getHeight(rootNode.left)

  let stack = [rootNode]
  while (stack.length) {
    let currNode = stack.pop()
    let rVal = getHeight(currNode.right)
    let lVal = getHeight(currNode.left)
    diff = Math.abs(rVal - lVal)
    if (diff > 1) {
      return false
    }
    if (currNode.right) {
      stack.push(currNode.right)
    }
    if (currNode.left) {
      stack.push(currNode.left)
    }
  }
  return true
  // console.log(lVal, rVal)
}

function countNodes (rootNode) {
  let queue = [rootNode]
  let count = 0
  while (queue.length) {
    count += 1
    let currNode = queue.shift()
    if (currNode.left) {
      queue.push(currNode.left)
    }
    if (currNode.right) {
      queue.push(currNode.right)
    }
  }
  return count
}

function getParentNode (rootNode, target) {
  let queue = [rootNode]
  if (target === rootNode.val) {
    return null
  }
  while (queue.length) {
    let currNode = queue.shift()
    if (currNode.left ) {
      if (currNode.left.val === target) {
        return currNode
      }
    }
    if (currNode.right) {
      if (currNode.right.val === target) {
        return currNode
      }
    }
    if (currNode.right) {
      queue.push(currNode.right)
    }
    if (currNode.left) {
      queue.push(currNode.left)
    }
  }
}

function inOrderPredecessor (rootNode, target) {
  // Your code here
}

function deleteNodeBST(rootNode, target) {
  // Do a traversal to find the node. Keep track of the parent

  // Undefined if the target cannot be found

  // Set target based on parent

  // Case 0: Zero children and no parent:
  //   return null

  // Case 1: Zero children:
  //   Set the parent that points to it to null

  // Case 2: Two children:
  //  Set the value to its in-order predecessor, then delete the predecessor
  //  Replace target node with the left most child on its right side,
  //  or the right most child on its left side.
  //  Then delete the child that it was replaced with.

  // Case 3: One child:
  //   Make the parent point to the child

}

// btRootBig = new TreeNode(13);
//     btRootBig.left = new TreeNode(2);
//     btRootBig.right = new TreeNode(3);
//     btRootBig.left.left = new TreeNode(4);
//     btRootBig.left.right = new TreeNode(5);
//     btRootBig.right.right = new TreeNode(6);
//     btRootBig.left.left.left = new TreeNode(7);
//     btRootBig.left.right.left = new TreeNode(8);
//     btRootBig.left.right.right = new TreeNode(9);
//     btRootBig.right.right.right = new TreeNode(10);
//     btRootBig.left.right.right.left = new TreeNode(11);
//     btRootBig.right.right.right.right = new TreeNode(12);
//     btRootBig.right.right.right.right.left = new TreeNode(1);
//     console.log(getHeight(btRootBig))

module.exports = {
    findMinBST,
    findMaxBST,
    findMinBT,
    findMaxBT,
    getHeight,
    countNodes,
    balancedTree,
    getParentNode,
    inOrderPredecessor,
    deleteNodeBST
}
