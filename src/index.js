/* den koden som körs rekommenderas att vara skriven med import React from 'react'; för att den ska funka/ the code that runs need to be typed this way to work*/

import React from 'react'; // ska skrivas på varje ny fil som vi skapar
import ReactDOM from 'react-dom'; // lägga till informationen 
import './index.css'; // lagt till css om vi skriver css i index css filen
import App from './App'; // lägger till hela vår application för att vi ska kunna montera  
import registerServiceWorker from './registerServiceWorker';

const rootElement = document.getElementById('root');

/* för det mesta heter en div root i react där all application ligger, ända stället vi behöver använda getElementById som är inbyggt i javascript, men här monterar vi informationen på något ställe. Vi monterar en komponent i root mappen */

ReactDOM.render(<App />, 
rootElement
);
                
/* för det mesta heter en div root i react där all application ligger, ända stället vi behöver använda getElementById som är inbyggt i javascript, men här monterar vi informationen på något ställe. Vi monterar en komponent i root mappen */
registerServiceWorker();
