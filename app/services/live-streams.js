import Ember from 'ember';

export default Ember.Service.extend({


  getOnlineStreamers(streamSuffix){
    let url = 'https://api.twitch.tv/kraken/streams/';
    let channel = Ember.$.get( url + streamSuffix );

    return channel
  }
});
