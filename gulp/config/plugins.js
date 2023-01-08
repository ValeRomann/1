import replace from 'gulp-replace'; //search and replace
import plumber from 'gulp-plumber'; //working with errors
import notify from 'gulp-notify'; //Notifications
import browsersync from 'browser-sync'; //local server

export const plugins = {
  replace: replace,
  plumber: plumber,
  notify: notify,
  browsersync: browsersync
}