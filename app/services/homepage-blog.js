import Ember from 'ember';

export default Ember.Service.extend({

  getVindiAlbum(){

    let userAlbums = Ember.$.ajax({
      url: 'https://api.imgur.com/3/album/y0TxV',
      headers: {
          'Authorization':'Bearer 20f0b7dc6408406edb8ea7faa7ca21f193ae6989'
      },
      method: 'GET'
      });
    return userAlbums;
  }

});
