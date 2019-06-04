import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';

// const el = <App />; - element

// const el = React.createElement(
//     'h1', null, 'Hello World!'
// );  - звичайний джаваскріпт у який jsx babel перетворює код.


// Усе що починається з великої літери - наші власні компоненти.
// Усу що починається з маленької літери інтерпритується як html тег

ReactDOM.render(<App />,
    document.getElementById('root'));