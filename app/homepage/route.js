import Ember from 'ember';


export default Ember.Route.extend({
  vindicatumMembers: Ember.inject.service(),
  homepageBlog: Ember.inject.service(),
  renewAuth: Ember.inject.service(),
  activate() {
    document.title="Vindicatum"
  },
  
 async model() {
    let guildStreamers = [{streamKey:'tanned_priest', classId: 5, playerName: 'Tanned'},
                          {streamKey:'orionid_hunter', classId: 3, playerName: 'Orionid'},
                          {streamKey:'draakken', classId: 11, playerName: 'Draakken'},
                          {streamKey:'renray_stream', classId: 5, playerName: 'Renray'},
                          {streamKey:'mypantaloonz', classId: 12, playerName: 'Pudders'},
                          {streamKey:'biometrics1', classId: 3, playerName: 'Zyb'},];
    
    let authToken = await this.get('renewAuth').renewAuthToken();

    let imgurAlbum = await this.get( 'homepageBlog' ).getVindiAlbum(authToken);


    return { guildStreamers, imgurAlbum };


  }
});
