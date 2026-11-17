import fs from "fs";
import path from "path";

export function getFileSource(filePath: string): string {
  try {
    const fullPath = path.join(process.cwd(), filePath);
    return fs.readFileSync(fullPath, "utf-8");
  } catch {
    return `// Could not read file at ${filePath}`;
  }
}
