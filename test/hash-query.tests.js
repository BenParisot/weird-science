const test = QUnit.test;

function searchToQuery(existingQuery, searchTerm) {
    const searchParams = new URLSearchParams(existingQuery);
    searchParams.set('searchTerm', searchTerm);
    return searchParams.toString();

}

function pageToQuery(existingQuery, page) {
    const searchParams = new URLSearchParams(existingQuery);
    searchParams.set('page', page);
    return searchParams.toString();
}
test('set search term to empty hash', assert => {
    const existingQuery = '';
    const searchTerm = 'mouse';

    const expected = 'searchTerm=mouse';

    const result = searchToQuery(existingQuery, searchTerm);

    assert.equal(result, expected);
});

test('set search term to existing hash query', assert => {
    const existingQuery = 'searchTerm=mouse';
    const searchTerm = 'rat';

    const expected = 'searchTerm=rat';

    const result = searchToQuery(existingQuery, searchTerm);
    assert.equal(result, expected);
});

test('set page number to existing hash query', assert => {
    const existingQuery = 'searchTerm=mouse';
    const page = 2;
    const expected = 'searchTerm=mouse&page=2';

    const result = pageToQuery(existingQuery, page);

    assert.equal(result, expected);
});