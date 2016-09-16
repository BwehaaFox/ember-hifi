import Ember from 'ember';
import BaseSound from 'ember-hifi/hifi-connections/base';

export default BaseSound.extend({
  toString() {
    return 'Local Dummy Connection';
  },

  init: Ember.K,
  willDestroy: Ember.K,
  
  currentPosition: Ember.K,
  play: Ember.K,
  pause: Ember.K,
  _setVolume: Ember.K
});
