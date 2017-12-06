import DS from 'ember-data';

export default DS.Model.extend({
  Name of food: DS.attr(),
  Description: DS.attr(),
  Price: DS.attr(),
  Calories: DS.attr()
});
