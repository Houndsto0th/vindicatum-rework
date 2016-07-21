import Ember from 'ember';

export default Ember.Service.extend({

  getOnlineStreamers(){
    let url = 'https://api.twitch.tv/kraken/streams/';
    let guildStreamers = ['tanned_priest', 'hounds_bdk', 'legendarylea'];
    guildStreamers.forEach((streamSuffix) => {
      let channel = Ember.$.get( url + streamSuffix );
      console.log(channel);
    });

  }

});
