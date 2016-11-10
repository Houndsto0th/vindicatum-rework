import Ember from 'ember';

export default Ember.Service.extend({

  getVindiAlbum(authToken){

    let userAlbums = Ember.$.ajax({
      url: 'https://api.imgur.com/3/album/y0TxV',
      headers: {
          'Authorization':`Bearer ${authToken}`
      },
      method: 'GET'
      });
    return userAlbums;
  }

});
