import Ember from 'ember';

export default Ember.Controller.extend({
    breadCrumb: 'Dashboard',

    info: function() {
        console.log(this.get('infos'));
        return this.get('infos');
    }.property('infos')
});
