import React from 'react';
import { StyleSheet, Text, ScrollView, View, Image} from 'react-native';
import moment from 'moment';
import Data from '../lib/data';
import ConnectionCard from "../components/ConnectionCard";
import * as Animatable from 'react-native-animatable';

export default class ConnectionsScreen extends React.Component {
    constructor(props) {
        super();
        this.state = {pointsArr: [], capacityArr: []};
        this.displayConnection = this.displayConnection.bind(this);
    }
    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    }

    componentWillMount(){
        let capArr = [];
        this.props.data.connections.map(() => {
            capArr.push(this.getRandomInt(0,3));
        });
        this.setState({
            pointsArr: Data.generatePoints(this.props.data.connections,capArr),
            capacityArr: capArr,
        });
    }

    displayConnection(connection, key) {
        return (
            <Animatable.View key={key} animation="fadeInUp" delay={(key+4)*100} duration={300}>
                <ConnectionCard connection={connection} peakPoints={this.state.pointsArr[key]} capacity={this.state.capacityArr[key]}/>
            </Animatable.View>
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
        backgroundColor: '#F8F6F6',
        alignItems: 'center',
        justifyContent: 'center',

        paddingVertical: 15,
    },
    heading: {
        paddingHorizontal: 20,
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
        paddingHorizontal: 20,
    },
    scrollView: {
        alignSelf: 'stretch',
        paddingHorizontal: 20,
    },
    bold: {
        fontWeight: 'bold',
    }
});

