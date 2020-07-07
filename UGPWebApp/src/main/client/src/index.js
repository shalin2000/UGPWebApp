import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import DisplayDept from './DisplayDept';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import RoutePath from './RoutePath';

ReactDOM.render(
  <RoutePath />, document.getElementById('root')
);
serviceWorker.unregister();
