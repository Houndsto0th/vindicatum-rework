import Ember from 'ember';

export default Ember.Component.extend({
  liveStreams: Ember.inject.service(),
  activeStreams: [],
  async didReceiveAttrs() {
    this._super(...arguments);
    this.set('activeStreams', []);
    if (this.get('guildStreamers')) {
      let streams = await this.getActiveStreams();
      this.set('activeStreams', streams);
      
    }
  },
  
  async getActiveStreams() {
    let streams = [];
    
    for (let streamer of this.get('guildStreamers')) {
      let channel = await this.get('liveStreams').getOnlineStreamers(streamer.streamKey).then((response) => {
        response.class = streamer.classId;
        response.playerName = streamer.playerName;

        if (response.stream !== null) {
          streams.push(response);
        }
      });

    }
    return streams;
  }
});
