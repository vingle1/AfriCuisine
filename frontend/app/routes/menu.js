import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    // return this.store.findAll('fmenu')
    return [{
      id: '1',
      name: 'Plaintains',
      desc: 'Made from fried bananas generally sweet in taste.',
      price: '10',
      image: 'https://hispanickitchen.com/wp-content/uploads/2016/06/Tajadas.jpg',
      calories: '400'
    }, {
      id: '2',
      name: 'Fried Tilapia',
      desc: 'Made with fresh fried fish and served with rice.',
      price: '10',
      image: 'https://images2.houstonpress.com/imager/u/original/6418945/mojarrarobb.jpg',
      calories: '1000'
    }, {
      id: '3',
      name: 'Chicken beans',
      desc: 'Made with cooked black beans and fresh cooked chicken.',
      price: '15',
      image: 'http://keeprecipes.com/sites/keeprecipes/files/8644_1318258597_0.jpg',
      calories: '3000'
    }, {
      id: '4',
      name: 'Fufu',
      desc: 'Made by boiling starchy food such as cassava,yams and then pounding them into a dough-like consistency.',
      price: '15',
      image: 'http://keeprecipes.com/sites/keeprecipes/files/8644_1318258597_0.jpg',
      calories: '210'
    },{
      id: '5',
      name: 'Jollof rice',
      desc: 'The most popular rice dish in West Africa, the most common basic ingredients are rice, tomatoes, tomato paste, onion, salt and red pepper.',
      price: '9',
      image: 'https://wazobiaafricankitchen.com/wp-content/uploads/food34.jpg',
      calories: '247'
    }];
  }
});
