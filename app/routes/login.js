import Ember from 'ember';

export default Ember.Route.extend({
    actions: {
        azureLogin: function() {
            console.log(this.get('session'));
            this.get('session').authenticate('simple-auth-authenticator:torii', 'azure-oauth2');
            return;
        }
    }
});