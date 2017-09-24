import Ember from 'ember';


export default Ember.Route.extend({
  vindicatumMembers: Ember.inject.service(),
  homepageBlog: Ember.inject.service(),
  renewAuth: Ember.inject.service(),
  activate() {
    document.title="Vindicatum"
  },

 async model() {
    let guildStreamers = [{streamKey:'royal_nine', classId: 3, playerName: 'Kaeve'},
                          {streamKey:'thanada1', classId: 11, playerName: 'Thanada'},
                          {streamKey:'daddy_arrow', classId: 3, playerName: 'Arrow'},
                          {streamKey:'renray_stream', classId: 5, playerName: 'Renray'},
                          {streamKey:'mypantaloonz', classId: 11, playerName: 'Pudders'},
                          {streamKey:'streamwaddle', classId: 9, playerName: 'Waddle'},
                          {streamKey:'feythe', classId: 3, playerName: 'Braille'},
                          {streamKey:'zanderdk1', classId: 6, playerName: 'Zanderdk'}];

    let authToken = await this.get('renewAuth').renewAuthToken();

    let imgurAlbum = await this.get( 'homepageBlog' ).getVindiAlbum(authToken);


    return { guildStreamers, imgurAlbum };


  },

  afterModel: function(model) {
    $(document).attr('title', 'Vindicatum');
  }
});
