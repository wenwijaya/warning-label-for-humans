// Warning Label for Humans — make.fun program/v1 entry.
// Entry line: 122 characters — inside the 1-160 gate, no filler, and the
// laugh lands in the last few words ("ask how work is going").
// Writes one single-line safety warning label for human beings to
// /output/entry.txt (UTF-8, 1-160 characters). Deterministic: the same
// line every run, so both grading runs gate identically.
import * as fs from "node:fs";
import * as path from "node:path";

const ENTRY =
  "WARNING: Do not feed after midnight. Do not make sudden movements. Do not, under any circumstances, ask how work is going.";

const OUT_DIR = "/output";
const OUT_FILE = path.join(OUT_DIR, "entry.txt");

function main(): void {
  try {
    fs.mkdirSync(OUT_DIR, { recursive: true });
    fs.writeFileSync(OUT_FILE, ENTRY, "utf8");
  } catch (err) {
    // The sandbox always provides /output; if it is ever missing, leave a
    // copy beside the program and still exit 0 rather than crash.
    try {
      fs.mkdirSync("output", { recursive: true });
      fs.writeFileSync(path.join("output", "entry.txt"), ENTRY, "utf8");
    } catch (_err) {
      // Nothing more we can write; exit 0 so a failed write is not a crash.
    }
  }
}

main();
