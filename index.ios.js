import { Navigation } from 'react-native-navigation';

import { registerScreens } from './screens';

import NotificationsIOS from 'react-native-notifications';


NotificationsIOS.addEventListener('remoteNotificationsRegistered', onPushRegistered);
NotificationsIOS.addEventListener('remoteNotificationsRegistrationFailed', onPushRegistrationFailed);
NotificationsIOS.addEventListener('notificationReceivedForeground',onPushFiredForeground);

// Ask for permissions
NotificationsIOS.requestPermissions();
navigator.geolocation.requestAuthorization();
navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);

function onGeoSuccess(data) {
    console.log(data);
}

function onGeoError(data) {
    console.error(data);
}

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

// start the app
Navigation.startTabBasedApp({
    tabs: [
        {
            label: 'Connections',
            screen: 'peakpass.SearchScreen', // this is a registered name for a screen
            icon: require('./img/exchange.png'),
            selectedIcon: require('./img/exchange.png'), // iOS only
            title: 'Connections'
        },
        {
            label: 'Points',
            screen: 'peakpass.PointsScreen',
            icon: require('./img/trophy-alt.png'),
            selectedIcon: require('./img/trophy-alt.png'), // iOS only
            title: 'Points'
        },
        {
            label: 'Rewards',
            screen: 'peakpass.RewardsScreen',
            icon: require('./img/shopping-bag.png'),
            selectedIcon: require('./img/shopping-bag.png'), // iOS only
            title: 'Rewards'
        }
    ],
    tabsStyle: {
        tabBarLabelColor: '#ACACAC',
        tabBarSelectedLabelColor: '#6FCF97',
        tabBarButtonColor: '#ACACAC',
        tabBarSelectedButtonColor: '#6FCF97'

    }
});

