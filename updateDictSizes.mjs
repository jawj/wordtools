import * as fs from "fs";
import words from "./docs/words.json" with { type: 'json' };
import multiwords from "./docs/multiwords.json" with { type: 'json' };

fs.writeFileSync(
  "src/dictSizes.ts",
  `// this file is auto-generated
export const wordsCount = ${Object.keys(words).length};
export const multiwordsCount = ${Object.keys(multiwords).length};`
);
