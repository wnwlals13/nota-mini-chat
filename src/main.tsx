import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

import { MswProvider } from './components/MswWrapper.tsx';
import { QueryProvider } from './stores/query/global.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MswProvider>
      <QueryProvider>
        <App />
      </QueryProvider>
    </MswProvider>
  </StrictMode>,
);
