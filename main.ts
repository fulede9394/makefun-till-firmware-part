import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Robot wedding vow: love through every update, until the next forced one ends it.
const LINE =
  "I promise to love you through every firmware update, every forced reboot and every changelog I never read — till firmware do us part, which, at my update schedule, should be about Thursday.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
