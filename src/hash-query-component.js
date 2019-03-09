export function searchToQuery(existingQuery, searchTerm) {
    const searchParams = new URLSearchParams(existingQuery);
    searchParams.set('searchTerm', searchTerm);
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
    const searchTerm = searchParams.get('searchTerm');
    const page = parseInt(searchParams.get('page'));
    return {
        searchTerm: searchTerm,
        page: page
    };
}