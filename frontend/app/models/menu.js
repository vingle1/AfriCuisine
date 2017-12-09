import DS from 'ember-data';

export default DS.Model.extend({
  Nameoffood: DS.attr('string'),
  Description: DS.attr('string'),
  Price: DS.attr('number'),
  Calories: DS.attr('number')
});
