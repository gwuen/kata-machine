export default function bfs(head: BinaryNode<number>, needle: number): boolean {
    const q: BinaryNode<number>[] = [head];

    while (q.length) {
        // dequeue first node in queue
        const curr = q.shift() as BinaryNode<number>;

        if (curr.value === needle) {
            return true;
        }

        // enqueue left child
        if (curr.left) {
            q.push(curr.left);
        }

        // enqueue right child
        if (curr.right) {
            q.push(curr.right);
        }
    }

    return false;
}
