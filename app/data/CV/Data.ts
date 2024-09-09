import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { parse as yamlParse } from 'yaml';
import { CV } from './Schema'

export function loadData(): CV {
    return yamlParse(fs.readFileSync(path.join(path.dirname(fileURLToPath(import.meta.url)), 'data.yaml'), 'utf8'))
}
