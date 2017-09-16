import React from 'react';
import { StyleSheet, Text, ScrollView, View, Image} from 'react-native';
import moment from 'moment';
import Data from '../lib/data';

import ConnectionCard from "../components/ConnectionCard";


export default class ConnectionsScreen extends React.Component {
    constructor(props) {
        super();
    }
    displayConnection(connection, key) {
        return (
            <ConnectionCard connection={connection} key={key}/>
        )
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.heading}>From <Text style={styles.bold}>{ this.props.data.from.name }</Text></Text>
                <Text style={styles.heading}>To <Text style={styles.bold}>{ this.props.data.to.name }</Text></Text>
                <Text style={styles.subheading}>{moment().format("dddd, MMMM Do YYYY, H:mm ")}</Text>
                <ScrollView style={styles.scrollView}>
                    { this.props.data.connections.map(this.displayConnection) }
                </ScrollView>
                {Data.generatePoints(this.props.data.connections)}
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
        paddingHorizontal: 20,
        paddingVertical: 15,
    },
    heading: {
        fontSize: 18,
        textAlign: 'left',
        alignSelf: 'flex-start',

    },
    subheading: {
        color: '#828282',
        fontSize: 14,
        textAlign: 'left',
        alignSelf: 'flex-start',
        marginBottom: 10,
        marginTop: 5,
    },
    scrollView: {
        alignSelf: 'stretch',
    },
});

