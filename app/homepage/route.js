import Ember from 'ember';


export default Ember.Route.extend({
  vindicatumMembers: Ember.inject.service(),
  liveStreams: Ember.inject.service(),
  
 async model() {
    let activeStreams = await this.get('liveStreams').getOnlineStreamers();
    
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
