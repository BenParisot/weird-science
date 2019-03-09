const test = QUnit.test;

const BASE_URL = 'https://genelab-data.ndc.nasa.gov/genelab/data/search?';

function createApiURL(queryOptions) {
    const url = new URL(BASE_URL);
    url.searchParams.set('term', queryOptions.term);
    return url.toString();
}

test('create api url from query options', assert => {
    const queryOptions = {
        term: 'mouse liver',
        page: 2
    };
    
    const expected = 'https://genelab-data.ndc.nasa.gov/genelab/data/search?term=mouse+liver';

    const result = createApiURL(queryOptions);

    assert.equal(result, expected);
});