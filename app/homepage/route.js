import Ember from 'ember';


export default Ember.Route.extend({
  vindicatumMembers: Ember.inject.service(),
  liveStreams: Ember.inject.service(),
  homepageBlog: Ember.inject.service(),

 async model() {
    let guildStreamers = [{streamKey:'tanned_priest', classId: 5},
                          {streamKey:'houndsto0th_', classId: 6},
                          {streamKey:'facial_sh0tzz', classID: 3},
                          {streamKey:'draakken', classId: 11},
                          {streamKey:'cedx10', classId: 5},
                          {streamKey:'mypantaloonz', classId: 12},
                          {streamKey:'biometrics1', classId: 3}];
    let activeStreams = [];

    for (let streamer of guildStreamers) {
      let channel = await this.get('liveStreams').getOnlineStreamers(streamer.streamKey).then((response) => {
        response.class = streamer.classId;

        if (response.stream !== null) {
          activeStreams.push(response);

        }
      });

    }

    let imgurAlbum = await this.get( 'homepageBlog' ).getVindiAlbum();

    let memberData = await this.get('vindicatumMembers').getVindiMembers().then((response) => {
      let allMembers = response.members;
      let members = allMembers.filter( member => member.rank < 6);
      let raidersNoOfficerAltsIncluded = members.filter( member => member.rank !== 2);
      let raidersNoAltsIncluded = raidersNoOfficerAltsIncluded.filter( member => member.rank !== 4);

      return { raidersNoAltsIncluded };
    });


    return { memberData, activeStreams, imgurAlbum };


  }
});
