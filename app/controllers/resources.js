import Ember from 'ember';

export default Ember.Controller.extend({
    breadCrumb: 'Resources',
    groupsSorting: ['title:asc'],
    groupsLookup: Ember.computed.sort('groups', 'groupsSorting'),

    actions: {
        addResource: function () {
            var name = this.get('rName'),
                state = this.get('rState'),
                remaining = this.get('rRemaining'),
                groupString = this.get('rGroup').get('id'),
                group = parseInt(groupString);

            console.log(group);

            var newResource = this.store.createRecord('resource', {
                name: name,
                state: state,
                remaining: remaining
            });

            this.store.find('group', group).then(function (foundGroup) {
                newResource.set('group', foundGroup);
                newResource.save();
            });
        }
    }
});
