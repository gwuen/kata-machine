const directions = [
    [ 0, -1], // up
    [ 1,  0], // right
    [ 0,  1], // down
    [-1,  0], // left
];

function walk(maze: string[], wall: string, curr: Point, end: Point,
              seen: boolean[][], path: Point[]): boolean {

    // 0. Base cases

    // fell out of the world
    if (curr.x < 0 || curr.x >= maze[0].length ||
        curr.y < 0 || curr.y >= maze.length) {

        return false;
    }

    // suffocated in a wall
    if (maze[curr.y][curr.x] === wall) {
        return false;
    }

    // I've just been in this place before
    if (seen[curr.y][curr.x]) {
        return false;
    }

    // The End
    if (curr.x === end.x && curr.y === end.y) {
        path.push(end);
        return true;
    }

    // 1. Pre
    seen[curr.y][curr.x] = true;
    path.push(curr);

    // 2. Recurse
    for (const [dx, dy] of directions) {
        const [x, y] = [curr.x + dx, curr.y + dy];

        if (walk(maze, wall, { x, y }, end, seen, path)) {
            return true;
        }
    }

    // 3. Post (when the current path fails)
    path.pop();

    return false;
}

export default function solve(
    maze: string[], wall: string, start: Point, end: Point
): Point[] {
    const seen: boolean[][] = [];
    const path: Point[] = [];

    // seen: fill a 2D boolean array
    for (let i = 0; i < maze.length; i++) {
        seen.push(new Array(maze[0].length).fill(false));
    }

    walk(maze, wall, start, end, seen, path);

    return path;
}
