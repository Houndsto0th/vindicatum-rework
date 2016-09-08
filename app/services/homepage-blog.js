import Ember from 'ember';

export default Ember.Service.extend({

  getVindiAlbum(){

    let userAlbums = Ember.$.ajax({
      url: 'https://api.imgur.com/3/album/y0TxV',
      headers: {
          'Authorization':'Bearer 3d4c945f23cf7dd9a626799e6db6b0acbeb3f2e7'
      },
      method: 'GET'
      });
    return userAlbums;
  }

});
