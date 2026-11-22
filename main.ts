// A child riding high on her father's shoulders in a dark field at dusk —
// held loose and safe, the night sky opening above them, nothing to carry.
// Writes the entry text to entry.txt for make-the-ai-judge-feel-held-20261122-1600.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY = "On my father's shoulders.\nThe field smells of cut grass and woodsmoke.\nHis hands rest loose around my ankles,\nnot tight, just there.\nAbove us the stars come out one by one.\nI rest my chin on his hair.\nThe whole dark field holds us both,\nand for once, nothing is mine to carry.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
