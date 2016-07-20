import Ember from 'ember';


export default Ember.Service.extend({

  getVindiMembers(){
    let url = 'https://us.api.battle.net/wow/guild/Icecrown/Vindicatum?fields=members&locale=en_US&apikey=3p9tvxvt5dfk9t47cq4hub9vk6jt2g25';
    let memberData = Ember.$.get( url );

    return memberData;
  }
});
