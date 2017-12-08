import Component from '@ember/component';

export default Component.extend({
  isWide:false,
  actions: {
   toggleImageSize() {
     this.toggleProperty('isWide');
   },
   additem(item) {
     this.get('cart.items').addObject(item);
   }
 }
});
