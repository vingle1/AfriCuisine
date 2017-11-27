/*import Component from '@ember/component';

const { Component } = Ember;

export default Component.extend({
  actions: {
    targetButton() {
      alert('Your special request is...');
    }
  }
});*/

import Ember from 'ember';

const { Component } = Ember;

export default Component.extend({
  actions: {
    targetButton() {
      alert('You pressed a target button. -from component');
    }
  }
});
