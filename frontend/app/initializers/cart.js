export function initialize(application) {
  application.inject('controller', 'cart', 'service:cart');
  application.inject('component', 'cart', 'service:cart');
}

export default {
  initialize
};
