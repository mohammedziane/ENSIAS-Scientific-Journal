import 'primeicons/primeicons.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import '../../index.css';


import React, {Component} from 'react';
import {ScrollPanel} from 'primereact/scrollpanel';

class ScrollPannel extends Component {

    render() {
        return (
            <div>
                <div className="content-section implementation scrollpanel-demo">

                            <ScrollPanel style={{width: '100%', height: '200px'}} className="custombar1">
                                <div style={{ padding: '1em', lineHeight: '1.5' }}>
                               
                                Our Journal of Research and Analytical Reviews (OnScience) 
                                is a high quality open access research journal. 
                                OnScience is providing a platform for the researchers, academicians, professional, practitioners and students 
                                to impart and share knowledge in the form of high quality empirical and theoretical research papers, case studies,
                                literature reviews and book reviews. The aim of the journal is to provide platform for diversity of intellectual 
                                pursuit from all corners of the society for enrichment and enhancement of the group readers. The Journal welcomes and 
                                acknowledges high quality theoretical and empirical original research papers, case studies, review papers, 
                                literature reviews, book reviews, conceptual framework, analytical and simulation models, technical note from researchers, 
                                academicians, professional, practitioners and students from all over the world.

                                The journal is being published Quarterly and in the multi-lingual likewise English, Frensh or even arabic.

</div>
                            </ScrollPanel>
                 
                </div>
            </div>
        )
    }
}
export default ScrollPannel;