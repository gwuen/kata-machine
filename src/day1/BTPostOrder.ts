function walk(curr: BinaryNode<number> | null, path: number[]): number[] {
    // base case: if node doesn't exist (is null)
    if (!curr) {
        return path;
    }

    // recurse (L, R)
    walk(curr.left, path);
    walk(curr.right, path);

    // visit node post-order (N)
    path.push(curr.value);

    // post: return for convenience
    return path;
}

export default function post_order_search(head: BinaryNode<number>): number[] {
    return walk(head, []);
}
