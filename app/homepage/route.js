import Ember from 'ember';


export default Ember.Route.extend({
  vindicatumMembers: Ember.inject.service(),
  liveStreams: Ember.inject.service(),

 async model() {
    let guildStreamers = [{streamKey:'tanned_priest', classId: 5}, 
                          {streamKey:'houndsto0th_'}, 
                          {streamKey:'legendarylea'}, 
                          {streamKey:'slootbag', classId: 1}];
    let activeStreams = [];

    for (let streamer of guildStreamers) {
      let channel = await this.get('liveStreams').getOnlineStreamers(streamer.streamKey).then((response) => {
        response.class = streamer.classId;
        
        if (response.stream !== null) {
          activeStreams.push(response);

        }
      });

    }

    let memberData = await this.get('vindicatumMembers').getVindiMembers().then((response) => {
      let allMembers = response.members;
      let members = allMembers.filter( member => member.rank < 6);
      let raidersNoOfficerAltsIncluded = members.filter( member => member.rank !== 2);
      let raidersNoAltsIncluded = raidersNoOfficerAltsIncluded.filter( member => member.rank !== 4);
      
      return { raidersNoAltsIncluded };
    });
    
    
    return { memberData, activeStreams };
    
    
  }
});
