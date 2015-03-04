import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
    model: function () {
        return Ember.Object.create({
            resources: this.store.find('resource'),
            groups: this.store.find('group')
        });
    },

    setupController: function (controller, model) {
        this._super(controller, model);

        controller.set('resources', model.get('resources'));
        controller.set('groups', model.get('groups'));

        // Set various general info things
        controller.set('averageUtilization', 87);
    }
});
