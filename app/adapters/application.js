import DS from 'ember-data';

export default DS.FixtureAdapter;

// LocalStorage Adapter
// -------------------------------------------------
// import App from '../app';
// import DS from 'ember-data';
// 
// App.ApplicationSerializer = DS.LSSerializer.extend();
// export default DS.LSAdapter.extend({
//     namespace: 'Scamp'
// });
// 
// #################################################
// 
// Rest Adapter, calling http://[HOST]/api/model/id
// -------------------------------------------------
// import App from '../app';
// import DS from 'ember-data';
// 
// export default DS.RESTAdapter.extend({
//     namespace: 'api'
// });

// Want to use fixutes instead of the mock rest api?
// Uncomment the line below and comment out the
// DS.RestAdapter above!
// -------------------------------------------------
// export default DS.FixtureAdapter.extend();
