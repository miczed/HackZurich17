import React from 'react';
import { StyleSheet, Text, ScrollView, View, Image} from 'react-native';
import moment from 'moment';
import Data from '../lib/data';

import ConnectionCard from "../components/ConnectionCard";


export default class ConnectionsScreen extends React.Component {
    constructor(props) {
        super();
        this.state = {pointsArr: []};
        this.displayConnection = this.displayConnection.bind(this);
    }

    componentWillMount(){
        this.setState({pointsArr: Data.generatePoints(this.props.data.connections)})
    }

    displayConnection(connection, key) {
        return (
            <ConnectionCard connection={connection} key={key} peakPoints={this.state.pointsArr[key]}/>
        )
    }
    render() {
        let fromname,toname
        if(this.props.data.from.name) {
            fromname = this.props.data.from.name;
        }
        if(this.props.data.to.name) {
            toname = this.props.data.to.name;
        }
        return (
            <View style={styles.container}>
                <Text style={styles.heading}>From <Text style={styles.bold}>{ fromname }</Text></Text>
                <Text style={styles.heading}>To <Text style={styles.bold}>{ toname }</Text></Text>
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
});

