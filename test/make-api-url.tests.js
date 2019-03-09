import { createApiURL } from '../src/make-api-url-component.js';

const test = QUnit.test;

test('create api url from query options', assert => {
    const queryOptions = {
        term: 'mouse liver',
        page: 2
    };
    
    const expected = 'https://genelab-data.ndc.nasa.gov/genelab/data/search?term=mouse+liver';

    const result = createApiURL(queryOptions);

    assert.equal(result, expected);
});