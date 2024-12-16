import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

import { MswProvider } from './components/MswWrapper.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MswProvider>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </MswProvider>
  </StrictMode>,
);
