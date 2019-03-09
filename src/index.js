import loadList from './make-list-component.js';
import { queryToObject } from './hash-query-component.js';
import './search-component.js';
import { createApiURL } from './make-api-url-component.js';




window.addEventListener('hashchange', () => {
    const existingQuery = window.location.hash.slice(1);
    const queryOptions = queryToObject(existingQuery);
    const corsURL = 'https://cors-anywhere.herokuapp.com/';
    const url = createApiURL(queryOptions);
    const fullURL = corsURL + url;
    console.log(fullURL);
    fetch(fullURL)
        .then(response => response.json())
        .then(body => {
            loadList(body.hits.hits);
        });
});