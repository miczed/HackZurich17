import React, { PropTypes } from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import Data from '../lib/data';

export default class Diamond extends React.Component {
    constructor(props) {
        super();
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.pointIcon, { backgroundColor: Data.CapacityToColor(this.props.capacity)}]}>
                    <Image source={ require('../img/diamond.png') }/>
                </View>
                <View style={styles.pointDisplay}>
                    <Text style={styles.pointLabel}>POINTS</Text>
                    <Text style={styles.pointText}>{Data.CapacityToPoints(this.props.capacity)}</Text>
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
