import { getProjectName } from '../../../src/utilities/index.js';

describe('getProjectName - basic functionality', () => {
    it('should return the project name. in title case.', () => {
        const name = getProjectName();
        expect(name).toBe('Quick Start Node');
    });
});