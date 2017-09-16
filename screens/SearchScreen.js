import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Button from 'apsl-react-native-button'
import NotificationsIOS from 'react-native-notifications';

export default class SearchScreen extends React.Component {
    _onPressButton = () => {
        this.props.navigator.push({
            screen: 'peakpass.ConnectionsScreen', // unique ID registered with Navigation.registerScreen
            title: "Connections", // navigation bar title of the pushed screen (optional)
            //titleImage: require('../../img/my_image.png'), // iOS only. navigation bar title image instead of the title text of the pushed screen (optional)
            //passProps: {}, // Object that will be passed as props to the pushed screen (optional)
            animated: true, // does the push have transition animation or does it happen immediately (optional)
            animationType: 'slide', // 'fade' (for both) / 'slide-horizontal' (for android) does the push have different transition animation (optional)
            //backButtonTitle: undefined, // override the back button title (optional)
            //backButtonHidden: false, // hide the back button altogether (optional)
            //navigatorStyle: {}, // override the navigator style for the pushed screen (optional)
            //navigatorButtons: {} // override the nav buttons for the pushed screen (optional)
        });
    }

    _triggerNotif = () => {

        let localNotification = NotificationsIOS.localNotification({
            alertBody: "Local notificiation!",
            alertTitle: "Local Notification Title",
            silent: false,
            userInfo: { type: 'checkin' }
        });
        console.log(localNotification);
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.formLabel}>From:</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="Zurich HB"
                    onChangeText={(from) => this.setState({from})}
                />
                <Text style={styles.formLabel}>To:</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="Bern"
                    onChangeText={(to) => this.setState({to})}
                />
                <Button onPress={this._triggerNotif} style={styles.submitButton} textStyle={{fontSize: 18}}>
                    GO
                </Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9F9FB',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    textInput: {
        height: 40,
        padding: 10,
        alignSelf: 'stretch',
        borderRadius: 8,
        backgroundColor: '#fff',
    },
    formLabel: {
        textAlign: 'left',
        alignSelf: 'stretch',
        paddingBottom: 10,
        paddingTop: 10,
    },
    submitButton: {
        borderRadius: 8,
        marginTop: 20,
        backgroundColor: '#BAE1CB',
        borderWidth: 0,
    },
    submitButtonText: {
    }
});
