import Ember from 'ember';

export default Ember.Component.extend({
  sideMenu: Ember.inject.service(),

  actions: {
    openSideMenu() {
      if (this.get('sideMenu').progress == 100) {
        this.get('sideMenu').close();
      } else {
        this.get("sideMenu").open();
      }
    }
  }
});
