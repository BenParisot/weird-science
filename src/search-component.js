import { searchToQuery } from './hash-query-component.js';

const searchNode = document.getElementById('search-form');

searchNode.addEventListener('submit', event => {
    event.preventDefault();
    const formData = new FormData(searchNode);
    const searchTerm = formData.get('search-input');
    const existingQuery = window.location.hash.slice(1);
    const query = searchToQuery(existingQuery, searchTerm);
    window.location.hash = query;
});