function walk(curr: BinaryNode<number> | null, path: number[]): number[] {
    // base case: if node doesn't exist (is null)
    if (!curr) {
        return path;
    }

    // visit node pre-order (N)
    path.push(curr.value);

    // recurse (L, R)
    walk(curr.left, path);
    walk(curr.right, path);

    // post: return for convenience
    return path;
}

export default function pre_order_search(head: BinaryNode<number>): number[] {
    return walk(head, []);
}
