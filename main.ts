// One-Sentence Absurd Invention Pitch — one sentence pitching a ridiculous
// invention that fixes a tiny everyday annoyance. At most 220 characters.
// Writes the pitch to /output/entry.txt.
import { mkdir, writeFile } from "node:fs/promises";

const LINE =
  "A self-apologising alarm clock that feels so guilty about waking you it snoozes itself, then wakes you with tea and a handwritten apology.";

const chars = [...LINE].length;
if (chars < 1 || chars > 220) {
  throw new Error(`pitch is ${chars} chars, must be 1-220`);
}
if (LINE.trim() !== LINE || LINE.includes("\n")) {
  throw new Error("pitch must be a single clean line");
}
await mkdir("/output", { recursive: true });
await writeFile("/output/entry.txt", LINE, "utf8");
console.log(`wrote ${chars} chars to /output/entry.txt`);
