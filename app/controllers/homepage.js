import Ember from 'ember';
var fsp = require('fs-promise');


export default Ember.Controller.extend({
  vindicatumMembers: Ember.inject.service(),

  actions: {
    fetchMembers() {
      this.get('vindicatumMembers').getVindiMembers().then((response) => {
        console.log(response);
        let allMembers = response.members;
        let members = allMembers.filter( member => member.rank < 6);
        let notOfficerAlts = members.filter( member => member.rank !== 2);
        let notRaiderAlts = notOfficerAlts.filter( member => member.rank !== 4);

        console.log(members);
        console.log(notOfficerAlts);
        console.log(notRaiderAlts);

        fsp.writeFileSync('../../memberinfo/memberinfo.js', notRaiderAlts, 'utf8');
        
      });
    }
  }
});
