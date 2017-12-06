import DS from 'ember-data';

export default DS.Model.extend({
  Name of food: DS.attr('string'),
  Description: DS.attr('number'),
  Price: DS.attr('string'),
  Calories: DS.attr('number')
});
