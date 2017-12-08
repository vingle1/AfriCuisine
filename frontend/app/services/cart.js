import Service from '@ember/service';

export default Service.extend({
  items: Ember.ArrayProxy.create({ content: Ember.A(['test1','test2','test3']) })

});
