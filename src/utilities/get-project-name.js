import { readFileSync } from 'node:fs';
import { join,dirname } from 'node:path';
import { fileURLToPath} from 'node:url';

import { toTitleCase } from './string-utilities.js';

// Read the project name from package.json and capitalize it
export function getProjectName() {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const packageJsonPath = join(__dirname, '../../package.json');
    const packageData = readFileSync(packageJsonPath, 'utf8');
    const projectName = JSON.parse(packageData).name;
    return toTitleCase(projectName, '-');
};