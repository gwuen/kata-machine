export default function two_crystal_balls(breaks: boolean[]): number {
    const jumpLen = Math.floor(Math.sqrt(breaks.length));

    let i;
    for (i = jumpLen; i < breaks.length; i += jumpLen) {
        if (breaks[i]) {
            break;
        }
    }

    for (let j = i - jumpLen; j <= i; j++) {
        if (breaks[j]) {
            return j;
        }
    }

    return -1;
}
