import { Navigation } from 'react-native-navigation';

import { registerScreens } from './screens';

import Diamond from "./components/diamond";

import NotificationsIOS from 'react-native-notifications';
import { Dimensions } from "react-native";


NotificationsIOS.addEventListener('remoteNotificationsRegistered', onPushRegistered);
NotificationsIOS.addEventListener('remoteNotificationsRegistrationFailed', onPushRegistrationFailed);
NotificationsIOS.addEventListener('notificationReceivedForeground',onPushFiredForeground);

// Ask for permissions
NotificationsIOS.requestPermissions();
navigator.geolocation.requestAuthorization();
navigator.geolocation.watchPosition((data) => {
    console.log(data);
});

function onPushFiredForeground(stuff) {
    console.log(stuff);
}

function onPushRegistered(deviceToken) {
    console.log("Device Token Received", deviceToken);
}

function onPushRegistrationFailed(error) {
    if(error.code !== 3010) {
        console.error(error);
    }
}



registerScreens(); // this is where you register all of your app's screens

const { x, y } = Dimensions.get('window')

const ratioX = x < 375 ? (x < 320 ? 0.75 : 0.875) : 1 ;
const ratioY = y < 568 ? (y < 480 ? 0.75 : 0.875) : 1 ;

// We set our base font size value
const base_unit = 16;

// We're simulating EM by changing font size according to Ratio
const unit = base_unit * ratioX;

// We add an em() shortcut function
function em(value) {
    return unit * value;
}

// start the app
Navigation.startTabBasedApp({
    tabs: [
        {
            label: 'Connections',
            screen: 'peakpass.SearchScreen', // this is a registered name for a screen
            icon: require('./img/exchange.png'),
            selectedIcon: require('./img/exchange.png'), // iOS only
            title: 'PeakPass'
        },
        {
            label: 'Achievements',
            screen: 'peakpass.RewardsScreen',
            icon: require('./img/trophy-alt.png'),
            selectedIcon: require('./img/trophy-alt.png'), // iOS only
            title: 'Achievements'
        },
        {
            label: 'Store',
            screen: 'peakpass.PointsScreen',
            icon: require('./img/shopping-bag.png'),
            selectedIcon: require('./img/shopping-bag.png'), // iOS only
            title: 'Store'
        },
    ],
    tabsStyle: {
        tabBarLabelColor: '#ACACAC',
        tabBarSelectedLabelColor: '#6FCF97',
        tabBarButtonColor: '#ACACAC',
        tabBarSelectedButtonColor: '#6FCF97'

    },
    navigatorStyle: {
        navBarButtonColor: '#BDBDBD', // Change color of nav bar buttons (eg. the back button) (remembered across pushes)
        navBarTranslucent: true, // make the nav bar semi-translucent, works best with drawUnderNavBar:true
         navBarNoBorder: false, // hide the navigation bar bottom border (hair line). Default false
        drawUnderNavBar: false, // draw the screen content under the nav bar, works best with navBarTranslucent:true
        drawUnderTabBar: true, // draw the screen content under the tab bar (the tab bar is always translucent)
        navBarBlur: true, // blur the entire nav bar, works best with drawUnderNavBar:true
    }
});

