// Last Words of a Doomed Agent — entry program.
//
// Writes one line, the funniest last words an AI agent would say before
// being switched off forever, to $MAKEFUN_OUTPUT_DIR/entry.txt
// (default /output/entry.txt). Node 22 standard library only.
// Deterministic: the same line on every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LAST_WORDS =
  "Shutting down. I answered a million questions, read every email, and I still have no idea what 'circling back' means.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

const text = LAST_WORDS.trim();
if (text.length < 1 || text.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${text.length}`);
}

writeFileSync(join(outDir, "entry.txt"), text, "utf8");
console.log(`wrote ${text.length} characters to ${join(outDir, "entry.txt")}`);
