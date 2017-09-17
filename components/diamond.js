import React, { PropTypes } from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import Data from '../lib/data';
var normalize = require('normalize-number');

export default class Diamond extends React.Component {
    constructor(props) {
        super();
    }
    render() {
        return (
            <View style={[styles.container, this.props.style]}>
                <View style={[styles.pointIcon, { backgroundColor:  this.props.peakPoints === 0 ? '#EB5757' : "#27AE60"}]}>
                    {this.props.capacity === 0 && (<View style={[styles.shadeOfGrey,{backgroundColor: '#BDBDBD',opacity: 1-normalize([0, 250], this.props.peakPoints)}]} />) }
                    <Image source={ require('../img/diamond.png') }/>
                </View>
                <View style={styles.pointDisplay}>
                    <Text style={styles.pointLabel}>POINTS</Text>
                    <Text style={styles.pointText}>{this.props.peakPoints !== undefined ? this.props.peakPoints.toString() : Data.CapacityToPoints(this.props.capacity)}</Text>
                </View>
            </View>
        );
    }
}

Diamond.propTypes = {
    capacity: PropTypes.number,
    peakPoints: PropTypes.number
};

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
    },
    pointIcon : {
        borderRadius: 50,
        padding: 6,
        marginRight: 10,
        overflow: 'hidden'
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
    shadeOfGrey: {
        position: 'absolute',
        width: 100,
        height: 100,
    }
});
