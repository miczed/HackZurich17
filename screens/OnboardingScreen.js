import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class OnboardingScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Onboarding Baby!!!</Text>
                <Text>Changes you make will automatically reload.</Text>
                <Text>Shake your phone to open the developer menu.</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFF00',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
