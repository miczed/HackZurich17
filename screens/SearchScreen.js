import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from 'apsl-react-native-button'


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

    render() {
        return (
            <View style={styles.container}>
                <Text>Search Screen Baby!!!</Text>
                <Text>Changes you make will automatically reload.</Text>
                <Text>Shake your phone to open the developer menu.</Text>
                <Button onPress={this._onPressButton} style={{backgroundColor: 'red'}} textStyle={{fontSize: 18}}>
                    Show me your genitals
                </Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
