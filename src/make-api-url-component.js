const BASE_URL = 'https://genelab-data.ndc.nasa.gov/genelab/data/search?';

export function createApiURL(queryOptions) {
    const url = new URL(BASE_URL);
    url.searchParams.set('term', queryOptions.term);
    return url.toString();
}