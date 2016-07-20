import Ember from 'ember';

export default Ember.Service.extend({

  getOnlineStreamers(){
    whoIsOnline(string){
      Ember.$.get( url + string, function(channel){
        if(channel['stream'] !== null){
          return string;
        }
      });
    }
    let url = 'https://api.twitch.tv/kraken/streams/';
    let guildStreamers = ['tanned_priest', 'hounds_bdk', 'legendarylea'];
    let liveStreams = guildStreamers.reduce(whoIsOnline());
    console.log(liveStreams)
  }

});
