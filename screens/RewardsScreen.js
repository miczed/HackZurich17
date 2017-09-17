import React from 'react';
import Diamond from "../components/diamond";
import { StyleSheet, Text, Image, View, FlatList } from 'react-native';

export default class RewardsScreen extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            data: []
        };
    }

    componentWillMount(){
        this.addMockRewardsData();
    }

    addMockRewardsData(){

        const award1 = { title: "The Check-In Beginner", peakPoints: 1500, currentScore: 2, maxScore: 5, text: "Check-Ins", image: require('../img/anker.png') };
        const award2 = { title: "PeakPoint Hunter", peakPoints: 2000, currentScore: 23, maxScore: 100, text: "PeakPoints", image: require('../img/bolt.png') };
        const award3 = { title: "Obi-Wan Kenobi", peakPoints: 3500, currentScore: 0, maxScore: 30, text: "Check-Ins", image: require('../img/jet.png') };

        let data = [];
        data.push(award1);
        data.push(award2);
        data.push(award3);

        this.setState({
            data: data,
        });

    }

    renderItem({ item, index }) {
        return (
            <View style={[styles.reward, styles.card,index === 2 && {opacity: 0.3 }]}>

                <Image source={item.image} style={styles.rewardImage} />

                <View style={styles.rewardDescription} >
                    <Text style={styles.rewardDescriptionTitle}>{item.title}</Text>
                    <Text style={styles.rewardDescriptionText}>{item.currentScore} / {item.maxScore} {item.text}</Text>
                </View>

                <Diamond peakPoints={item.peakPoints} style={styles.diamond} />

            </View>
        );
    }

    render() {
        return (
            <View style={styles.container}>

            <FlatList
                data={this.state.data}
                renderItem={this.renderItem}
                keyExtractor={(item, index) => index}
                style={styles.rewards}
            />

            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F6F6',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },

    rewards: {
        flex: 1,
        alignSelf: 'stretch',
    },

    reward: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },

    card: {
        borderRadius: 8,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3},
        shadowOpacity: 0.05,
        shadowRadius: 15,
        paddingVertical: 15,
        paddingHorizontal: 15,
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        alignSelf: 'stretch',
    },

    rewardImage: {
        height: 40,
        width: 40,
        marginRight: 10
    },

    rewardDescription: {
        flexDirection: 'column',
    },

    rewardDescriptionTitle: {
        fontSize: 14,
        fontWeight: '500',
        marginBottom: 3,
        color: '#2b2b2b',
    },

    rewardDescriptionText: {
        color: '#828282',
        fontSize: 12,
    },

    diamond: {
        marginLeft: 'auto',
    }

});
