import Ember from 'ember';

export default Ember.Service.extend({

  getOnlineStreamers(streamSuffix){
    let endPoint = 'https://api.twitch.tv/kraken/streams/';
    let channel = Ember.$.ajax({
      url: `${endPoint}${streamSuffix}`,
      headers: {
        'Client-ID': 'apj2e8404ayavskb88lxqm7d7tmuoi8'
      },
      method: 'GET'
    });
    return channel;
  }
});
