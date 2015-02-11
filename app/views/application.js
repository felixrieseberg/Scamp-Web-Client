import Ember from 'ember';

export default Ember.View.extend({

    sidebarOpen: true,
    userDropdownOpen: false,
    notificationsDropdownOpen: false,

    init: function () {
        this._super();
        Ember.$(window).on('resize', Ember.run.bind(this, this.handleResize));
    },

    handleResize: function () {
        var mq = window.matchMedia('only screen and (max-width: 560px)');
        console.log(mq);
        this.set('sidebarOpen', !mq.matches);
    },

    actions: {
        toggleSidebar: function () {
            this.toggleProperty('sidebarOpen');
        },

        toggleUserDropdown: function () {
            this.toggleProperty('userDropdownOpen');
        },

        toggleNotificationsDropdown: function () {
            this.toggleProperty('notificationsDropdownOpen');
        }
    }

});
