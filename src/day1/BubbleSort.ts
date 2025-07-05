export default function bubble_sort(arr: number[]): void {
    for (let toSort = arr.length; toSort > 1; toSort--) {
        for (let i = 0; i < toSort - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                const tmp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = tmp;
            }
        }
    }
}
