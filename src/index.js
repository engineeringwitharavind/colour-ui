import React from 'react';
import { createRoot } from 'react-dom/client';
import { StyleSheetManager } from 'styled-components';
import GlobalStyles from '../src/components/App/GlobalStyles';
import App from '../src/components/App/App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <StyleSheetManager disableVendorPrefixes>
      <React.Fragment>
        <GlobalStyles />
        <App />
      </React.Fragment>
    </StyleSheetManager>
  </React.StrictMode>
);
