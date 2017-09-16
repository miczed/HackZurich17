import React, { PropTypes } from 'react';
import { StyleSheet, Text, View, Image, Animated, TouchableHighlight} from 'react-native';
import Data from '../lib/data';
import Diamond from "../components/diamond";
import moment from 'moment';
import Button from 'apsl-react-native-button'
import Collapsible from 'react-native-collapsible';

export default class ConnectionCard extends React.Component {
    constructor(props) {
        super();
        this.state =  {
            capacity : Math.floor(Math.random() * 3),
            expanded    : false,
        }
    }
    toggle(){
        this.setState({
            expanded : !this.state.expanded  //Step 2
        });
    }

    render() {
        return (


                    <TouchableHighlight style={styles.card} onPress={this.toggle.bind(this)} underlayColor="#fff">
                        <View>
                            <View style={styles.cardRow}>
                                <Text style={styles.trainText}>{this.props.connection.sections[0].journey.name}</Text>
                                <Text style={[styles.capacityText ,{ color: Data.CapacityToColor(this.state.capacity)}]}>{ Data.CapacityToText(this.state.capacity) }</Text>
                                <Text style={styles.platformText}>Pl. { this.props.connection.from.platform }</Text>
                            </View>
                            <View style={[styles.cardRow, { marginBottom: 0 }]}>
                                <Diamond capacity={this.state.capacity} />
                                <View style={styles.timetable}>
                                    <Text style={styles.timeText}>{ moment(this.props.connection.from.departure).format("HH:mm") }</Text>
                                    <View style={styles.durationSpacer} />
                                    <Text style={styles.durationText}>{ moment(this.props.connection.duration.substring(3),"HH:mm:ss").format("HH:mm") }</Text>
                                    <View style={styles.durationSpacer} />
                                    <Text style={styles.timeText}>{ moment(this.props.connection.to.arrival).format("HH:mm") }</Text>
                                </View>
                            </View>
                            <Collapsible collapsed={!this.state.expanded}>
                                <Button style={styles.checkinButton} textStyle={{fontSize: 12, color: '#95663D'}}>
                                    Check In
                                </Button>
                            </Collapsible>
                        </View>
                    </TouchableHighlight>
        );
    }
}

ConnectionCard.propTypes = {
    connection: PropTypes.object
};

const styles = StyleSheet.create({
    container: {

    },
    body: {

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
        overflow: 'hidden',
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
    },
    checkinButton: {
        borderWidth: 0,
        backgroundColor: '#FBEFC9',
        marginTop: 15,
        height: 30,
        marginBottom: 0,
    }
});
