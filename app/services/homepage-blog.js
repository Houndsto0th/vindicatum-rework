import Ember from 'ember';

export default Ember.Service.extend({

  getVindiAlbum(authToken){

    let userAlbums = Ember.$.ajax({
      url: 'https://api.imgur.com/3/album/y0TxV',
      headers: {
          'Authorization':`Bearer ${authToken}`,
          'Access-Control-Allow-Origin': 'http://vindicatum.com'
      },
      method: 'GET'
      });
    return userAlbums;
  }

});
