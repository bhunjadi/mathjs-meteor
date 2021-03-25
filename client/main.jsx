import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { App } from '/imports/ui/App';

// Using import vs require does not change anything
import {evaluate} from 'mathjs';
// const {evaluate} = require('mathjs');

// This is not working in Meteor, but in pure NodeJS it is
// import {evaluate} from 'mathjs/number';

console.log('main.js', Date.now());

Meteor.startup(() => {
  render(<App/>, document.getElementById('react-target'));
});
