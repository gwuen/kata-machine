export default function quick_sort(arr: number[]): void {
    // base case (nothing to sort)
    if (arr.length <= 1) {
        return;
    }

    const pivotIdx = Math.floor(arr.length / 2);
    const pivot = arr[pivotIdx];

    const smaller = [];
    const greater = [];

    for (let i = 0; i < arr.length; i++) {
        // don't compare pivot to itself
        if (i === pivotIdx) continue;

        if (arr[i] <= pivot) {
            smaller.push(arr[i]);
        } else {
            greater.push(arr[i]);
        }
    }

    quick_sort(smaller);
    quick_sort(greater);

    arr.splice(0, arr.length, ...smaller, pivot, ...greater);
}
