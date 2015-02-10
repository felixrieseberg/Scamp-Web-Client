import DS from 'ember-data';

var Resource = DS.Model.extend({
    name: DS.attr('string'),
    ip: DS.attr('string'),
    healthy: DS.attr('boolean')
});

export default Resource;