import React from 'react';
import { StyleSheet, Text, ScrollView, View, Image} from 'react-native';
import moment from 'moment';
import Data from '../lib/data';
import Diamond from "../components/diamond";


export default class ConnectionsScreen extends React.Component {
    constructor(props) {
        super();
    }
    displayConnection(connection, key) {
        let capacity = Math.floor(Math.random() * 3);
        return (
            <View key={ key } style={styles.card}>
                <View style={styles.cardRow}>
                    <Text style={styles.trainText}>{connection.sections[0].journey.name}</Text>
                    <Text style={[styles.capacityText ,{ color: Data.CapacityToColor(capacity)}]}>{ Data.CapacityToText(capacity) }</Text>
                    <Text style={styles.platformText}>Pl. { connection.from.platform }</Text>
                </View>
                <View style={[styles.cardRow, { marginBottom: 0 }]}>
                    <Diamond capacity={capacity} />
                    <View style={styles.timetable}>
                        <Text style={styles.timeText}>{ moment(connection.from.departure).format("HH:mm") }</Text>
                        <View style={styles.durationSpacer} />
                        <Text style={styles.durationText}>{ moment(connection.duration.substring(3),"HH:mm:ss").format("HH:mm") }</Text>
                        <View style={styles.durationSpacer} />
                        <Text style={styles.timeText}>{ moment(connection.to.arrival).format("HH:mm") }</Text>
                    </View>
                </View>
            </View>
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
    card: {
        borderRadius: 8,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3},
        shadowOpacity: 0.05,
        shadowRadius: 15,
        padding: 15,
        marginVertical: 7,
        alignSelf: 'stretch',
    },
    bold: {
        fontWeight: 'bold',
    },
    trainText: {
        fontWeight: 'bold',
        fontSize: 12,
        color: '#BDBDBD'
    },
    capacityText: {
        fontWeight: 'bold',
        fontSize: 12,
        textAlign: 'center',
        flex: 1
    },
    cardRow: {
        flexDirection: 'row',
        marginBottom: 10
    },
    platformText : {
        fontWeight: 'bold',
        fontSize: 12,
        marginLeft: 'auto',
        color: 'black'
    },
    pointIcon : {
        borderRadius: 50,
        padding: 6,
        marginRight: 10,
    },
    pointLabel: {
        fontWeight: 'bold',
        fontSize: 8,
        color: '#BDBDBD',
    },
    pointText: {
        fontSize: 14,
    },
    pointDisplay: {
        flexDirection: 'column',
    },
    timeText: {
        fontSize: 18,
        alignSelf: 'center',
    },
    durationSpacer: {
        width: 10,
        height: 2,
        backgroundColor: '#E0E0E0',
        alignSelf: 'center',
        marginHorizontal: 7,
    },
    timetable: {
        marginLeft: 'auto',
        flexDirection: 'row',
    },
    durationText: {
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 14,
        color: '#BDBDBD',

    }
});
