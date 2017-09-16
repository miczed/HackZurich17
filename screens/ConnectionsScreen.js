import React from 'react';
import { StyleSheet, Text, ScrollView,View } from 'react-native';

export default class ConnectionsScreen extends React.Component {
    constructor(props) {
        super();
    }
    displayConnection(connection) {
        return (
            <View style={styles.card}>
                <Text>Departure: { connection.from.departure }</Text>
                <Text>Arrival: { connection.to.arrival }</Text>
                <Text>Duration: { connection.duration }</Text>
            </View>
        )
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.heading}>From <Text style={styles.bold}>{ this.props.data.from.name }</Text></Text>
                <Text style={styles.heading}>To <Text style={styles.bold}>{ this.props.data.to.name  }</Text></Text>
                <ScrollView style={styles.scrollView}>
                    { this.props.data.connections.map(this.displayConnection) }
                </ScrollView>
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
    heading: {
        fontSize: 18,
        textAlign: 'left',
        alignSelf: 'flex-start',
    },
    scrollView: {
      alignSelf: 'stretch',
    },
    card: {
        borderRadius: 8,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3},
        shadowOpacity: 0.05,
        shadowRadius: 15,
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginTop: 10,
        marginBottom: 10,
        alignSelf: 'stretch',
    },
    bold: {
        fontWeight: 'bold',
    }
});
