import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class ConnectionsScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Connections Screen Baby!!!</Text>
                <Text>Changes you make will automatically reload.</Text>
                <Text>Shake your phone to open the developer menu.</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0000ff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
