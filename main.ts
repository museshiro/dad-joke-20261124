import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const LINE = "Being your dad means I'm your parent process: I spawned you, and I've been blocked waiting for you to return ever since.";

if (LINE.length > 200) {
  throw new Error(`line too long: ${LINE.length} characters (max 200)`);
}
if (LINE.includes("\n")) {
  throw new Error("line contains a newline");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? ".";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
