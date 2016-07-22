import Ember from 'ember';

export default Ember.Service.extend({

  getVindiAlbum(){
  
    let userAlbums = Ember.$.ajax({
      url: 'https://api.imgur.com/3/album/y0TxV',
      headers: {
          'Authorization':'Bearer 98ea9688a6142d8486dcd39f892efc5c229c9a38'
      },
      method: 'GET'
      });
    return userAlbums;
  }

});
