import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  desc: DS.attr('string'),
	price: DS.attr('number'),
  calories: DS.attr('number'),
});
