import React from 'react';
import { Hello } from './Hello.jsx';
import { Info } from './Info.jsx';

console.log('APP', Date.now());

export const App = () => (
  <div>
    <h1>Welcome to Meteor!</h1>
    <Hello/>
    <Info/>
  </div>
);
