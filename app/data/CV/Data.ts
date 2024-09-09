import * as fs from 'fs';
import * as path from 'path';
import { parse as yamlParse } from 'yaml';
import { CV } from './Schema'

export function loadData(): CV {
    return yamlParse(fs.readFileSync(path.join(__dirname, 'data.yaml'), 'utf8'))
}
