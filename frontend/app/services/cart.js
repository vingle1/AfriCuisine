import Service from '@ember/service';
import Ember from "ember";

export default Service.extend({
  items: Ember.ArrayProxy.create({ content: Ember.A([]) }),

  monsterPrices: Ember.computed.mapBy('items', 'price'),
  total: Ember.computed.sum('monsterPrices'),

  clear(){
    this.get('items').clear()
  },
  centsTotal: Ember.computed('total', function(){
    return this.get('total') * 100;
  })
});
