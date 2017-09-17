import React, { PropTypes } from 'react';
import { StyleSheet, Text, View, Image, AlertIOS, TouchableHighlight} from 'react-native';
import Data from '../lib/data';
import Diamond from "../components/diamond";
import moment from 'moment';
import Button from 'apsl-react-native-button'
import Collapsible from 'react-native-collapsible';
import Geo from "../lib/geo";

export default class ConnectionCard extends React.Component {
    constructor(props) {
        super();
        this.state =  {
            expanded    : false,
            checkingIn : false,
            checkedIn : false,
        }
    }
    toggle(){
        if(!this.didTrainLeave()) {
            this.setState({
                expanded : !this.state.expanded  //Step 2
            });
        }
    }
    didTrainLeave() {
        let now = Math.floor(Date.now()/1000);
        let departure_time = this.props.connection.from.departureTimestamp;
        let threshold_max = departure_time + (60 * 5);
        return now > threshold_max;
    }
    checkIn() {
        this.setState({checkingIn: true });
        let now = Math.floor(Date.now()/1000);
        let departure_time = this.props.connection.from.departureTimestamp;
        let threshold_min = departure_time - 5 * 60;
        let threshold_max = departure_time + (60 * 5);
        console.log(now,threshold_max);
        if( !this.didTrainLeave() ) { // did the train leave already?
            if(now > threshold_min ) { // are we close to departure?
                Geo.getUserLocation((data) => {
                    if(Geo.isCloseToPlace(data.coords.latitude,data.coords.longitude,this.props.connection.from.location.coordinate.x,this.props.connection.from.location.coordinate.y)) {
                        this.setState({
                            checkedIn: true,
                            checkingIn: false,
                        });
                        AlertIOS.alert("🎉 Check-in Succesful 🎉","You've earned +50 Points");
                    } else {
                        this.setState({
                            checkedIn: false,
                            checkingIn: false,
                        });
                        AlertIOS.alert("Check-in Failed",  "You have to be at the trainstation / in the train to check in.");
                    }
                },(error) => {
                    this.setState({
                        checkedIn: false,
                        checkingIn: false,
                    });
                    AlertIOS.alert("Check-in Failed",  "Couldn't get your current location. Please make sure that you set the permissions");

                });
            } else {
                this.setState({
                    checkedIn: false,
                    checkingIn: false,
                });
                AlertIOS.alert("Check-in Failed",  "You cannot check-in more than 5 minutes before the departure of the train.");

                // TODO: create push notif when train leaves
            }
        } else {
            this.setState({
                checkingIn: false,
                checkedIn: false,
            });
            AlertIOS.alert("Check-in Failed", "This train has already left. You cannot check-in to it.");
        }
    }
    render() {
        let productname;
        if(this.props.connection.journey) {
           productname =  this.props.connection.journey.name;
        } else if(this.props.connection.sections && this.props.connection.sections[0].journey) {
           productname =  this.props.connection.sections[0].journey.name;
        }
        return (
            <TouchableHighlight style={[styles.card,this.didTrainLeave() && {opacity: 0.2}]} onPress={this.toggle.bind(this)} underlayColor="#fff">
                <View >
                    <View style={styles.cardRow}>
                        <Text style={styles.trainText}>{ productname }</Text>
                        <Text style={[styles.capacityText ,{ color: Data.CapacityToColor(this.props.capacity)}]}>{ Data.CapacityToText(this.props.capacity) }</Text>
                        <Text style={styles.platformText}>Pl. { this.props.connection.from.platform }</Text>
                    </View>
                    <View style={[styles.cardRow, { marginBottom: 0 }]}>
                        <Diamond capacity={this.props.capacity} peakPoints={this.props.peakPoints}/>
                        <View style={styles.timetable}>
                            <Text style={styles.timeText}>{ moment(this.props.connection.from.departure).format("HH:mm") }</Text>
                            <View style={styles.durationSpacer} />
                            <Text style={styles.durationText}>{ moment(this.props.connection.duration.substring(3),"HH:mm:ss").format("HH:mm") }</Text>
                            <View style={styles.durationSpacer} />
                            <Text style={styles.timeText}>{ moment(this.props.connection.to.arrival).format("HH:mm") }</Text>
                        </View>
                    </View>
                    <Collapsible collapsed={!this.state.expanded}>
                        <Button isLoading={this.state.checkingIn} style={styles.checkinButton} textStyle={{fontSize: 12, color: '#95663D'}} onPress={this.checkIn.bind(this)}>
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
    },
});
