import Ember from 'ember';

export default Ember.ObjectController.extend({
    remainingBarStyle: function () {
        let remaining = this.get('remaining') * 100;
        return `width:${remaining}%`;
    }.property('remaining')
});
