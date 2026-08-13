# TypeScript DSA Practice

This workspace uses strict TypeScript. Keep each algorithm or data structure in
its own `.ts` file so completed exercises remain available for review.

## First-time setup

Install the local TypeScript tools:

```powershell
npm install
```

## Project structure

Group exercises by topic as the workspace grows:

```text
sorting/
  bubble-sort.ts
  selection-sort.ts
arrays/
strings/
linked-lists/
stacks-and-queues/
trees/
graphs/
dynamic-programming/
```

Only create folders and files when you start those topics.

## Create an exercise

1. Create or choose a topic folder.
2. Add one `.ts` file per exercise, such as `sorting/selection-sort.ts`.
3. Write the implementation and test inputs in that file.

Example:

```ts
function selectionSort(numbers: number[]): number[] {
  // Implement the algorithm here.
  return numbers;
}

const input = [5, 2, 8, 1, 3];

console.log("Input:", input);
console.log("Result:", selectionSort(input));
```

## Run the current file in VS Code

1. Open the `.ts` exercise file.
2. Press `F5`.
3. Select **Run Current TypeScript File** if prompted.
4. View the output in the integrated terminal.

The debugger runs whichever TypeScript file is active in the editor.

## Run a file from the terminal

Pass the file path to the `run` script:

```powershell
npm run run -- sorting/bubble-sort.ts
```

Replace the path to run another exercise.

## Check all exercises

Run the TypeScript compiler without creating JavaScript output:

```powershell
npm run check
```

This project uses strict type checking. Resolve all reported errors to keep the
entire practice workspace valid.

## Testing ideas

For algorithms that accept collections, try an empty collection, one value,
duplicates, negative numbers, already sorted input, and reverse-sorted input.
Also check whether the function should mutate its input or return a new value.
