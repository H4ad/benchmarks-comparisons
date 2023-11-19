import { readFile, readdir, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const currentFolder = resolve(fileURLToPath(import.meta.url), '..');
const benches = await readdir(`${currentFolder}/benchs`);

for (const bench of benches) {
  const tools = await readdir(`${currentFolder}/benchs/${bench}`);
  let results = `# ${bench}`;

  for (const tool of tools) {
    if (!tool.endsWith('.log'))
      continue;

    results += `\n\n## ${tool}\n\n`;
    results += '```txt\n';
    results += await readFile(`${currentFolder}/benchs/${bench}/${tool}`, 'utf-8');
    results += '```';
  }

  await writeFile(`${currentFolder}/benchs/${bench}/README.md`, results);
}
