/* The code that shall run is recommended to be typed with * import React from 'react'; * for it to work*/

import React from 'react'; // shall be wrote on every new file that we create
import ReactDOM from 'react-dom'; // add information 
import './index.css'; // added css which we write css in the index css file
import App from './App'; // adding the whole application so that we will be able to mountate  
import registerServiceWorker from './registerServiceWorker';

const rootElement = document.getElementById('root');

/* 
In most cases is the name of a div root in react where the whole application lay, the only place we need to use getElementById which is native(inbyggt) in the javascipt, but here we mount information in a place, we mount a component in the root folder.
*/

ReactDOM.render(<App />, 
rootElement
);
                

/* counter */

registerServiceWorker();

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default
    ReactDOM.render(
      <NextApp />,
      rootElement
    )
  })
    
    }
    
    registerServiceWorker();




