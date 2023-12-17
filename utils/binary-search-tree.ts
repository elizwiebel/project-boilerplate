class BinarySeachTreeNode {
    public value: number;
    public leftNode: BinarySeachTreeNode | null;
    public rightNode: BinarySeachTreeNode | null;

    constructor(value: number) {
        this.value = value;
        this.leftNode = null;
        this.rightNode = null;
    }
}

export class BinarySeachTree {
    public rootNode: BinarySeachTreeNode | null;

    constructor(rootNode?: BinarySeachTreeNode) {
        this.rootNode = rootNode || null;
    }

    public insert(value: number): void {
        const newNode = new BinarySeachTreeNode(value);

        if (this.rootNode === null) {
            this.rootNode = newNode;
        } else {
            this.insertNode(this.rootNode, newNode);
        }
    }

    private insertNode(currentNode: BinarySeachTreeNode, newNode: BinarySeachTreeNode): void {
        if (newNode.value < currentNode.value) {
            if (currentNode.leftNode === null) {
                currentNode.leftNode = newNode;
            } else {
                this.insertNode(currentNode.leftNode, newNode);
            }
        } else {
            if (currentNode.rightNode === null) {
                currentNode.rightNode = newNode;
            } else {
                this.insertNode(currentNode.rightNode, newNode);
            }
        }
    }
}

// TEST CONFIG
// const bst = new BinarySeachTree();

// bst.insert(25);
// bst.insert(10);
// bst.insert(15);
// bst.insert(25);
// bst.insert(45);
// bst.insert(35);

// console.log(bst);
