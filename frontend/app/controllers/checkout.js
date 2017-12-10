import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
   removeItem(item) {
     this.get('cart.items').removeObject(item);
     alert("Item deleted from cart");
   },
   clear(){
      this.get('cart').clear()
    }
 }
});
