const {NotImplementedError} = require('../extensions/index.js');
const {Node} = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootElement = null;
  }

  root() {
    return this.rootElement;
  }

  add(data) {
    const newNode = new Node(data);

    if (this.rootElement === null) {
      this.rootElement = newNode;
    } else {
      let current = this.rootElement;
      while (current !== null) {
        if (data > current.data) {
          if (current.right === null) {
            current.right = newNode;
            break;
          } else {
            current = current.right;
          }
        } else {
          if (current.left === null) {
            current.left = newNode;
            break;
          } else {
            current = current.left;
          }
        }
      }
    }
  }

  has(data) {
    let current = this.rootElement;

    if (current === null) {
      return false;
    }

    while (current !== null) {
      if (current.data === data) {
        return true;
      } else if (data > current.data) {
        if (current.right === null) {
          return current.data === data;
        } else {
          current = current.right;
        }
      } else {
        if (current.left === null) {
          return current.data === data;
        } else {
          current = current.left;
        }
      }
    }
  }

  find(data) {
    let current = this.rootElement;

    if (current === null) {
      return null;
    }

    while (current !== null) {
      if (current.data === data) {
        return current;
      } else if (data > current.data) {
        if (current.right === null) {
          return null;
        } else {
          current = current.right;
        }
      } else {
        if (current.left === null) {
          return null;
        } else {
          current = current.left;
        }
      }
    }
  }

  remove(data) {
    if (this.rootElement === null) {
      return;
    }

    let found = false;
    let current = this.rootElement;
    let parent = null;

    while (!found && current !== null) {
      if (data < current.data) {
        parent = current;
        current = current.left;

      } else if (data > current.data) {
        parent = current;
        current = current.right;
      } else {
        found = true;
      }
    }

    if (!found) {
      return;
    }

    const nodeToRemove = current;
    let replacement = null;

    if ((nodeToRemove.left !== null) && (nodeToRemove.right !== null)) {

      replacement = nodeToRemove.left;

      let replacementParent = nodeToRemove;

      while (replacement.right !== null) {
        replacementParent = replacement;
        replacement = replacement.right;
      }

      replacement.right = nodeToRemove.right;
      if (replacementParent !== nodeToRemove) {
        replacementParent.right = replacement.left;
        replacement.left = nodeToRemove.left;
      }

    } else if (nodeToRemove.left !== null) {
      replacement = nodeToRemove.left;
    } else if (nodeToRemove.right !== null) {
      replacement = nodeToRemove.right;
    }

    if (nodeToRemove === this.rootElement) {
      this.rootElement = replacement;
    } else {
      if (nodeToRemove.data < parent.data) {
        parent.left = replacement;
      } else {
        parent.right = replacement;
      }
    }
  }

  min() {
    let current = this.rootElement;

    if (current === null) {
      return null;
    }

    while (current !== null) {
      if (current.left === null) {
        return current.data;
      } else {
        current = current.left;
      }
    }

    return current.data;
  }

  max() {
    let current = this.rootElement;

    if (current === null) {
      return null;
    }

    while (current !== null) {
      if (current.right === null) {
        return current.data;
      } else {
        current = current.right;
      }
    }

    return current.data;
  }
}

module.exports = {
  BinarySearchTree
};