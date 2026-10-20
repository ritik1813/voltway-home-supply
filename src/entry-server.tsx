import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import App from './App.tsx';

// Used at build time by scripts/build-pages.mjs to pre-render the home page into dist/index.html.
export function render(): string {
  return renderToString(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}
