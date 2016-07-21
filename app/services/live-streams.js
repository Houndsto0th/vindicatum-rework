import Ember from 'ember';

export default Ember.Service.extend({

  async getOnlineStreamers(){
    let url = 'https://api.twitch.tv/kraken/streams/';
    let guildStreamers = ['tanned_priest', 'houndsto0th_', 'legendarylea'];
    let onlineStreamers = guildStreamers.map((streamSuffix) => {
      let thisStream = null;
      let channel = Ember.$.get( url + streamSuffix ).then((response) => {
        thisStream = response.stream;
      });
      if( thisStream !== null ) {
        return thisStream
      } else {
        return null;
      }
    });
    return onlineStreamers
  }

});
