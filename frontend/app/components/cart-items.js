import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  //will load the service in file /app/services/shopping-cart.js
  cart: service('shopping-cart')
});
