import './html-equal.js';
import { makeStudyList } from '../src/make-list-component.js';

const test = QUnit.test;

test('make list of studies from html template', assert => {
    const study = {
        _source: {
            'Study Title': 'Rodent Research-3-CASIS: Mouse liver transcriptomic proteomic and epigenomic data',
            'thumbnail': '/genelab/img/GLDS137__study_image.png',
            'Project Link': 'https://lsda.jsc.nasa.gov/scripts/experiment/exper.aspx?exp_index=1857',
            Mission: {
                'Start Date': '08-Apr-2016',
                'End Date': '11-May-2016'
            },
            'Project Type': 'Spaceflight Study',
            'Study Description': 'The Rodent Research-3 (RR-3) mission was sponsored by the pharmaceutical company Eli Lilly and Co. and the Center for the Advancement of Science in Space to study the effectiveness of a potential countermeasure for the loss of muscle and bone mass that occurs during spaceflight. Twenty BALB/c 18-weeks old female mice (ten controls and ten treated) were flown to the ISS and housed in the Rodent Habitat for 39-42 days. Twenty mice of similar age sex and strain were used for ground controls housed in identical hardware and matching ISS environmental conditions. Basal controls were housed in standard vivarium cages. Spaceflight ground controls and basal groups had blood collected then were euthanized had one hind limb removed and finally whole carcasses were stored at -80 C until dissection. All mice in this data set received only the control/sham injection.'
        }
    };

    const expected = `
    <li>
        <section id="li-img">
            <img src="https://genelab-data.ndc.nasa.gov/genelab/img/GLDS137__study_image.png" alt="">
        </section>
        <section id="li-info">
            <h2><a href="https://lsda.jsc.nasa.gov/scripts/experiment/exper.aspx?exp_index=1857">Rodent Research-3-CASIS: Mouse liver transcriptomic proteomic and epigenomic data</a></h2>
            <h3>Mission Start Date: 08-Apr-2016</h3>
            <h3>Mission End Date: 11-May-2016</h3>
            <h4>Project Type: Spaceflight Study</h4>
            <p>Study Description: The Rodent Research-3 (RR-3) mission was sponsored by the pharmaceutical company Eli Lilly and Co. and the Center for the Advancement of Science in Space to study the effectiveness of a potential countermeasure for the loss of muscle and bone mass that occurs during spaceflight. Twenty BALB/c 18-weeks old female mice (ten controls and ten treated) were flown to the ISS and housed in the Rodent Habitat for 39-42 days. Twenty mice of similar age sex and strain were used for ground controls housed in identical hardware and matching ISS environmental conditions. Basal controls were housed in standard vivarium cages. Spaceflight ground controls and basal groups had blood collected then were euthanized had one hind limb removed and finally whole carcasses were stored at -80 C until dissection. All mice in this data set received only the control/sham injection.</p>
        </section>
            </li>`;

    const result = makeStudyList(study);

    assert.htmlEqual(result, expected);
});