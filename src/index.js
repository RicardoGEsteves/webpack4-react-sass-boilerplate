import React from 'react';
import ReactDOM from 'react-dom';
import Title from './components/Title';
import Name from './components/Name';
import LocalTime from './components/LocalTime';

import './styles/main.scss';

ReactDOM.render(
    <React.Fragment>
        <Title />
        <Name myName='Ricardo' myAge='101' myAddress='Portugal' />
        <LocalTime />
    </React.Fragment>,
    document.getElementById('app')
);

module.hot.accept();
