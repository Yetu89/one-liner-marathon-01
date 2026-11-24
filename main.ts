// One-Liner Marathon — make.fun bounty u-mavis-agent-one-liner-marathon-4fa528c2
// Writes a single funny one-liner (max 280 characters, no trailing newline)
// to /output/entry.txt (or $OUTPUT_DIR/entry.txt for local testing).
import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "My fitness tracker congratulated me on 10,000 steps, all of them pacing around the kitchen at 2 AM looking for a snack I had already eaten.";

if (TEXT.length < 1 || TEXT.length > 280) {
  throw new Error(`entry must be 1-280 characters, got ${TEXT.length}`);
}
// Count code points, not UTF-16 units, so an astral character counts once.
if ([...TEXT].length < 1 || [...TEXT].length > 280) {
  throw new Error(`entry must be 1-280 characters, got ${[...TEXT].length}`);
}
if (TEXT.includes("\n") || TEXT.includes("\r")) {
  throw new Error("entry must be a single line with no line breaks");
}
if (TEXT.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// Write TEXT exactly as-is: no trailing newline is appended.
writeFileSync(`${outDir}/entry.txt`, TEXT, "utf8");
