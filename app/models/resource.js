import DS from 'ember-data';

var Resource = DS.Model.extend({
    name: DS.attr('string'),
    state: DS.attr('string'),
    remaining: DS.attr('number'),
    group: DS.belongsTo('group', { async: true })
});

Resource.reopenClass({
  FIXTURES: [
    { id: 1, name: 'Data Lab', state: 'Stopped', remaining: 0.5, group: 1 },
    { id: 2, name: 'Physics', state: 'Allocated', remaining: 0.4, group: 1 },
    { id: 3, name: 'Applied Math', state: 'Running', remaining: 0.8, group: 2 },
    { id: 4, name: 'Student Website', state: 'Running', remaining: 0.2, group: 2 }
  ]
});

export default Resource;