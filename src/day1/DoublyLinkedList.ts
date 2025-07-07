type Node<T> = {
    value: T,
    prev?: Node<T>,
    next?: Node<T>,
}

export default class DoublyLinkedList<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = this.tail = undefined;
    }

    private getAt(idx: number): Node<T> {
        if (idx < 0 || idx >= this.length) {
            throw new Error(`Index out of bounds: ${idx}`);
        }

        let curr = this.head;
        for (let i = 0; curr && i < idx; i++) {
            curr = curr.next;
        }

        return curr as Node<T>;
    }

    private removeNode(node: Node<T>): T | undefined {
        if (this.length === 0) {
            return undefined;
        }

        this.length--;

        if (this.length === 0) {
            this.head = this.tail = undefined;
            return node.value;
        }

        if (node.prev) {
            node.prev.next = node.next;
        } else {
            this.head = node.next;
        }

        if (node.next) {
            node.next.prev = node.prev;
        } else {
            this.tail = node.prev;
        }

        return node.value;
    }

    prepend(item: T): void {
        const node = { value: item } as Node<T>;

        this.length++;

        if (!this.head) {
            this.head = this.tail = node;
            return;
        }

        node.next = this.head;
        this.head.prev = node;
        this.head = node;
    }

    insertAt(item: T, idx: number): void {
        if (idx === 0) {
            this.prepend(item);
            return;
        }

        if (idx === this.length) {
            this.append(item);
            return;
        }

        const curr = this.getAt(idx);
        const node = { value: item } as Node<T>;

        this.length++;

        node.prev = curr.prev;
        node.next = curr;
        if (curr.prev) curr.prev.next = node;
        curr.prev = node;
    }

    append(item: T): void {
        const node = { value: item } as Node<T>;

        this.length++;

        if (!this.tail) {
            this.head = this.tail = node;
            return;
        }

        node.prev = this.tail;
        this.tail.next = node;
        this.tail = node;
    }

    remove(item: T): T | undefined {
        let curr = this.head;

        while (curr) {
            if (curr.value === item) {
                return this.removeNode(curr);
            }
            curr = curr.next;
        }

        return undefined;
    }

    get(idx: number): T | undefined {
        if (idx < 0 || idx >= this.length) {
            return undefined;
        }

        return this.getAt(idx).value;
    }

    removeAt(idx: number): T | undefined {
        if (idx < 0 || idx >= this.length) {
            return undefined;
        }

        return this.removeNode(this.getAt(idx));
    }
}
