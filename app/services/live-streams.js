import Ember from 'ember';

export default Ember.Service.extend({

  getOnlineStreamers(){
    let whoIsOnline = function(input){
      let url = 'https://api.twitch.tv/kraken/streams/';
      Ember.$.get( url + input, function(channel){
        if(channel['stream'] !== null){
          return channel;
        };
      });
    }
    let guildStreamers = ['tanned_priest', 'hounds_bdk', 'slootbag'];
    let liveStreams = guildStreamers.reduce(whoIsOnline(input));
  };

});
