function walk(curr: BinaryNode<number> | null, path: number[]): number[] {
    // base case: if node doesn't exist (is null)
    if (!curr) {
        return path;
    }

    // recurse (L)
    walk(curr.left, path);

    // visit node in-order (N)
    path.push(curr.value);

    // recurse (R)
    walk(curr.right, path);

    // post: return for convenience
    return path;
}

export default function in_order_search(head: BinaryNode<number>): number[] {
    return walk(head, []);
}
