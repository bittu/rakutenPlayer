var mixpanel = require('mixpanel-browser');

export function init() {
  console.log('Analytics intied')
  mixpanel.init("15310a50e4d60afe5bb2fc0bb1b72534"); // secret id 
}

export function trackEvent(event,eventData) {
  mixpanel.track(event,eventData);
}