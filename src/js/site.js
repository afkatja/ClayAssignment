require('../sass/assignment.scss');
import injectTapEventPlugin from 'react-tap-event-plugin';
import 'whatwg-fetch';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();
require('./app.js');
