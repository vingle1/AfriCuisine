import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('Menu');
  this.route('checkout');
  this.route('notfound'), { path: '/*path'};
});

export default Router;
