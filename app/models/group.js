import DS from 'ember-data';

var Group = DS.Model.extend({
    name: DS.attr('string'),
    resources: DS.hasMany('resource', {inverse: 'group', async: true})
});

Group.reopenClass({
  FIXTURES: [
    { id: 1, name: 'Physics 101', resources: [1,2] },
    { id: 2, name: 'Digitial Presence', resources: [3,4] }
  ]
});

export default Group;