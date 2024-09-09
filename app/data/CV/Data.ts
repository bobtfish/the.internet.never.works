import * as fs from 'fs';
import * as path from 'path';
import * as currentPath from "./currentPath.cjs";
import { parse as yamlParse } from 'yaml';
import { CV } from './Schema'

export function loadData(): CV {
    return yamlParse(fs.readFileSync(path.join(currentPath.default, 'data.yaml'), 'utf8'))
}
