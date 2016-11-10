import Ember from 'ember';


export default Ember.Route.extend({
  vindicatumMembers: Ember.inject.service(),
  liveStreams: Ember.inject.service(),
  homepageBlog: Ember.inject.service(),
  renewAuth: Ember.inject.service(),

 async model() {
    let guildStreamers = [{streamKey:'tanned_priest', classId: 5, playerName: 'Tanned'},
                          {streamKey:'houndsto0th_', classId: 6, playerName: 'Houndstooth'},
                          {streamKey:'orionid_hunter', classID: 3, playerName: 'Orionid'},
                          {streamKey:'draakken', classId: 11, playerName: 'Draakken'},
                          {streamKey:'renray_stream', classId: 5, playerName: 'Renray'},
                          {streamKey:'mypantaloonz', classId: 12, playerName: 'Pudders'},
                          {streamKey:'biometrics1', classId: 3, playerName: 'Zyb'},];
    let activeStreams = [];

    for (let streamer of guildStreamers) {
      let channel = await this.get('liveStreams').getOnlineStreamers(streamer.streamKey).then((response) => {
        response.class = streamer.classId;
        response.playerName = streamer.playerName;

        if (response.stream !== null) {
          activeStreams.push(response);

        }
      });

    }
    let authToken = await this.get('renewAuth').renewAuthToken.access_token;

    let imgurAlbum = await this.get( 'homepageBlog' ).getVindiAlbum(authToken);


    return { activeStreams, imgurAlbum };


  }
});
