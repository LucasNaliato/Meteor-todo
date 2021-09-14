import Vue from 'vue'

import VueMeteorTracker from 'vue-meteor-tracker';

Vue.use(VueMeteorTracker);

import '../imports/ui/plugins'

import App from '../imports/ui/App.vue'

Meteor.startup(() => {
  new Vue({
    el: '#app',
    ...App,
  })
})
