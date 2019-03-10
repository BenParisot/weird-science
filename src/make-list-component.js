export function makeStudyList(study) {
    const IMG_BASE_URL = 'https://genelab-data.ndc.nasa.gov';
    const html = `
    <li>
                <img src="${IMG_BASE_URL + study._source['thumbnail']}" alt="">
                <h2><a href="${study._source['Project Link']}">${study._source['Study Title']}</a></h2>
                <h3>Mission Start Date: ${study._source.Mission['Start Date']}</h3>
                <h3>Mission End Date: ${study._source.Mission['End Date']}</h3>
                <h4>Project Type: ${study._source['Project Type']}</h4>
                <p>Study Description: ${study._source['Study Description']}</p>
            </li>`;

    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

const studyListNode = document.getElementById('study-list');

export default function loadList(studies) {
    while(studyListNode.children.length > 0) {
        studyListNode.lastElementChild.remove();
    }
    studies.forEach(study => {
        const studyLI = makeStudyList(study);
        studyListNode.appendChild(studyLI);
    });
}