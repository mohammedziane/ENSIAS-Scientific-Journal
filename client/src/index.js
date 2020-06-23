import React, { Fragment, useEffect } from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import * as synctractor from 'synctractor';
synctractor.init();
synctractor.monitorFetch();
synctractor.monitorTimeout((_, t) => t !== 11000); 


ReactDOM.render(<App />, document.getElementById('root'));
