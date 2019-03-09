export function makeStudyList(study) {
    const html = `
    <li>
                <h2>${study._source['Study Title']}</h2>
                <h3>Mission Start Date: ${study._source.Mission['Start Date']}</h3>
                <h3>Mission End Date: ${study._source.Mission['End Date']}</h3>
                <p>Project Type: ${study._source['Project Type']}</p>
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