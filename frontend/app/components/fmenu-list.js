import Component from '@ember/component';

export default Component.extend({
  actions: {
    showFood_item(food_item) {
      alert("Added to Cart - " + food_item);
    }
  }
});
