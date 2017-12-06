import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    // return ['Plaintains', 'Fried Tilapia', 'Chicken beans', 'Fufu', 'Jollof rice'];
    return this.store.findAll('fmenu')
  }
});
