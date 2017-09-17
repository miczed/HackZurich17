import React from 'react';
import Button from 'apsl-react-native-button'
import { StyleSheet, Text, View, Image } from 'react-native';

export default class QRScreen extends React.Component {
    _onClose() {
        this.props.navigator.dismissModal({
            animationType: 'slide-down' // 'none' / 'slide-down' , dismiss animation for the modal (optional, default 'slide-down')
        });
    }
    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../img/qr.png')} />
                <Text style={styles.subtext}>Show this code during the checkout at the store to get your reward.</Text>
                <Button onPress={this._onClose.bind(this)} style={styles.submitButton} textStyle={{fontSize: 18}}>
                    Close
                </Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    subtext: {
        marginVertical: 20,
        lineHeight: 20,
        textAlign: 'center',
        marginHorizontal: 20,
    },
    submitButton: {
        borderRadius: 8,
        backgroundColor: '#BAE1CB',
        borderWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3},
        shadowOpacity: 0.05,
        shadowRadius: 15,
        marginHorizontal:20,
    }
});
