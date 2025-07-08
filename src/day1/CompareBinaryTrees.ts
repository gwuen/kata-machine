export default function compare(a: BinaryNode<number> | null, b: BinaryNode<number> | null): boolean {
    // both nodes do not exist
    if (a === null && b === null) {
        return true;
    }

    // only one node does not exist
    if (a === null || b === null) {
        return false;
    }

    // the node's values are not equal
    if (a.value !== b.value) {
        return false;
    }

    return compare(a.left, b.left) && compare(a.right, b.right);
}
