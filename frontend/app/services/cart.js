import Service from '@ember/service';
import Ember from "ember";

export default Service.extend({
  items: Ember.ArrayProxy.create({ content: Ember.A([]) })

});
