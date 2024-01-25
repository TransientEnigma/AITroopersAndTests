import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

it('Should display AI Troopers heading', () => {
  render(
    <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
  );

  let aiTroopersHeadings = document.querySelectorAll('body h1');
  let aiTroopersFirstTextHeading = aiTroopersHeadings[0].textContent;
  expect(aiTroopersFirstTextHeading).toEqual('AI Troopers');
});
