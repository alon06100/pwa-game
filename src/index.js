import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root';
import './manifest.json';

import './styles/style.scss';
import '@fortawesome/fontawesome-free/css/all.css';
import 'react-circular-progressbar/dist/styles.css';

require('./media/icons/icon-192x192.png');
require('./media/icons/icon-512x512.png');
require('./media/icons/favicon-32x32.png');
require('./media/ios-assets/apple-touch-icon.png');
require('./media/ios-assets/iphone5_splash.png');
require('./media/ios-assets/iphone6_splash.png');
require('./media/ios-assets/iphoneplus_splash.png');
require('./media/ios-assets/iphonex_splash.png');
require('./media/ios-assets/iphonexr_splash.png');
require('./media/ios-assets/iphonexsmax_splash.png');

ReactDOM.render(<Root />, document.getElementById('root'));
