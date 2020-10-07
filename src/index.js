import React from 'react';
import {render} from 'react-dom';
import App from './app';
import {GlobalStyles} from './global-styles';

render(<React.Fragment>
    <GlobalStyles/>
    <App />
</React.Fragment>, document.getElementById('root'));