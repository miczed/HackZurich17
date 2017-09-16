import React, { PropTypes } from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import Data from '../lib/data';

export default class Diamond extends React.Component {
    constructor(props) {
        super();
    }
    render() {
        return (
            <View style={[styles.container, this.props.style]}>
                <View style={[styles.pointIcon, { backgroundColor: this.props.peakPoints ? "#27AE60" : Data.CapacityToColor(this.props.capacity)}]}>
                    <Image source={ require('../img/diamond.png') }/>
                </View>
                <View style={styles.pointDisplay}>
                    <Text style={styles.pointLabel}>POINTS</Text>
                    <Text style={styles.pointText}>{this.props.peakPoints ? this.props.peakPoints : Data.CapacityToPoints(this.props.capacity)}</Text>
                </View>
            </View>
        );
    }
}

Diamond.propTypes = {
    capacity: PropTypes.number
};

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
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
});
