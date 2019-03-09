const test = QUnit.test;
import { searchToQuery, pageToQuery, queryToObject } from '../src/hash-query-component.js';

test('set search term to empty hash', assert => {
    const existingQuery = '';
    const term = 'mouse';

    const expected = 'term=mouse&page=1';

    const result = searchToQuery(existingQuery, term);

    assert.equal(result, expected);
});

test('set search term to existing hash query', assert => {
    const existingQuery = 'term=mouse&page=1';
    const term = 'rat';

    const expected = 'term=rat&page=1';

    const result = searchToQuery(existingQuery, term);
    assert.equal(result, expected);
});

test('set page number to existing hash query', assert => {
    const existingQuery = 'term=mouse&page=1';
    const page = 2;
    const expected = 'term=mouse&page=2';

    const result = pageToQuery(existingQuery, page);

    assert.equal(result, expected);
});

test('get object info from query', assert => {
    const existingQuery = 'term=mouse&page=2';

    const expected = {
        term: 'mouse',
        page: 2
    };

    const result = queryToObject(existingQuery);
    assert.deepEqual(result, expected);
});