export function searchToQuery(existingQuery, term) {
    const searchParams = new URLSearchParams(existingQuery);
    searchParams.set('term', term);
    searchParams.set('page', 1);
    return searchParams.toString();

}

export function pageToQuery(existingQuery, page) {
    const searchParams = new URLSearchParams(existingQuery);
    searchParams.set('page', page);
    return searchParams.toString();
}

export function queryToObject(existingQuery) {
    const searchParams = new URLSearchParams(existingQuery);
    const term = searchParams.get('term');
    const page = parseInt(searchParams.get('page'));
    return {
        term: term,
        page: page
    };
}