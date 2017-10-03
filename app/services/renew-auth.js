import Ember from 'ember';

export default Ember.Service.extend({

  async renewAuthToken(){
    let authToken = await Ember.$.ajax({
      url: 'https://api.imgur.com/oauth2/token',
      data: {
        'client_id': '077e7c5fb98ccd9',
        'client_secret': '0421bab8d04a0b3fdd3817865942ec5ab4e2e05c',
        'refresh_token': '5aa0751f6059fc22a0a04fde304810fe562faced',
        'grant_type': 'refresh_token',
      },
      method: 'POST'
    });
    console.log(authToken, 'hi')
    return authToken.access_token;
  }
  
});
