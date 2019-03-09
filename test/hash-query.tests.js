const test = QUnit.test;
import { searchToQuery, pageToQuery, queryToObject } from '../src/hash-query-component.js';

test('set search term to empty hash', assert => {
    const existingQuery = '';
    const searchTerm = 'mouse';

    const expected = 'searchTerm=mouse&page=1';

    const result = searchToQuery(existingQuery, searchTerm);

    assert.equal(result, expected);
});

test('set search term to existing hash query', assert => {
    const existingQuery = 'searchTerm=mouse&page=1';
    const searchTerm = 'rat';

    const expected = 'searchTerm=rat&page=1';

    const result = searchToQuery(existingQuery, searchTerm);
    assert.equal(result, expected);
});

test('set page number to existing hash query', assert => {
    const existingQuery = 'searchTerm=mouse&page=1';
    const page = 2;
    const expected = 'searchTerm=mouse&page=2';

    const result = pageToQuery(existingQuery, page);

    assert.equal(result, expected);
});

test('get object info from query', assert => {
    const existingQuery = 'searchTerm=mouse&page=2';

    const expected = {
        searchTerm: 'mouse',
        page: 2
    };

    const result = queryToObject(existingQuery);
    assert.deepEqual(result, expected);
});