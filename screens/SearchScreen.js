import React from 'react';
import { StyleSheet, Text, View, TextInput, Image,AlertIOS } from 'react-native';
import Button from 'apsl-react-native-button'
import NotificationsIOS from 'react-native-notifications';
import Data from '../lib/data';

export default class SearchScreen extends React.Component {
    constructor(props) {
        super();
        this.state = {
                from: null,
                to: null,
                loading: false,
        };
    }
    _onPressButton = () => {
        this.setState({loading: true});
        Data.handleSearch(this.state.from,this.state.to).then((response) => {
            this.setState({loading: false});
            this.props.navigator.push({
                screen: 'peakpass.ConnectionsScreen', // unique ID registered with Navigation.registerScreen
                title: "Connections", // navigation bar title of the pushed screen (optional)
                //titleImage: require('../../img/my_image.png'), // iOS only. navigation bar title image instead of the title text of the pushed screen (optional)
                passProps: { data: response.data }, // Object that will be passed as props to the pushed screen (optional)
                animated: true, // does the push have transition animation or does it happen immediately (optional)
                animationType: 'slide', // 'fade' (for both) / 'slide-horizontal' (for android) does the push have different transition animation (optional)
                //backButtonTitle: undefined, // override the back button title (optional)
                //backButtonHidden: false, // hide the back button altogether (optional)
                //navigatorStyle: {}, // override the navigator style for the pushed screen (optional)
                //navigatorButtons: {} // override the nav buttons for the pushed screen (optional)
            });
        }).catch((error) => {
            if (error.response) {
                // The request was made, but the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else {
                console.log(error);
            }

            this.setState({loading: false});
            AlertIOS.alert("Couldn't get connections from the API.","Make sure that you're connected to the internet and please try again.");
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
                <Text style={styles.titleConnections}>Connections</Text>
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
                <Button isLoading={this.state.loading} isDisabled={!this.state.from || !this.state.to} onPress={this._onPressButton} style={styles.submitButton} textStyle={{fontSize: 18}}>
                    Go
                </Button>
                <Image source={require('../img/brands.png')} style={styles.brands} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F6F6',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    titleConnections: {
        textAlign: 'left',
        alignSelf: 'flex-start',
        fontSize: 32,
        paddingTop: 32,
        paddingBottom: 16,
        fontWeight: "500"
    },
    textInput: {
        padding: 15,
        alignSelf: 'stretch',
        borderRadius: 8,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3},
        shadowOpacity: 0.05,
        shadowRadius: 15,
        borderWidth: 1,
        borderColor: "#d7d7d7"
    },
    formLabel: {
        textAlign: 'left',
        alignSelf: 'stretch',
        paddingBottom: 10,
        paddingTop: 10,
        color: '#828282',
    },
    submitButton: {
        borderRadius: 8,
        marginTop: 25,
        backgroundColor: '#BAE1CB',
        borderWidth: 0,
    },
    submitButtonText: {
    },
    brands: {
        alignSelf: 'flex-start',
        marginTop: 'auto',
        marginBottom: 10
    }

});
