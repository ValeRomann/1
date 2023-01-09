import replace from 'gulp-replace'; //search and replace
import plumber from 'gulp-plumber'; //working with errors
import notify from 'gulp-notify'; //Notifications
import browsersync from 'browser-sync'; //local server
import newer from 'gulp-newer'; //check updates
import ifPlugins from 'gulp-if';

export const plugins = {
  replace: replace,
  plumber: plumber,
  notify: notify,
  browsersync: browsersync,
  newer: newer,
  if: ifPlugins
}