import React from 'react';
import Button from 'apsl-react-native-button'
import { StyleSheet, Text, FlatList, Image, View } from 'react-native';

export default class PointsScreen extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            data: [],
            currentPeakPoints: 2000,
        };

        this.renderItem = this.renderItem.bind(this);
    }

    componentWillMount(){
        this.addMockRewardsData();
    }

    addMockRewardsData(){

        const product1 = { description: "Get a 20% discount for your next purchase in any ShopVille Migros.", peakPoints: 2500, image: require('../img/migros.png') };
        const product2 = { description: "Get a coupon for a free delicious coffee at your next kkiosk.", peakPoints: 1500, image: require('../img/kkiosk.png') };

        let data = [];
        data.push(product1);
        data.push(product2);

        this.setState({
            data: data,
        });

    }

    renderItem({ item, index }) {
        return (
            <View style={[styles.product, styles.card]}>

                <Image source={item.image} style={styles.productImage} />

                <Text style={styles.productDescription}>{item.description}</Text>

                { (this.state.currentPeakPoints - item.peakPoints > 0) ?
                    <Button style={styles.buyButton} textStyle={{fontSize: 12, color: '#503E0D',}} >{"Buy now for " + item.peakPoints + "PeakPoints"}</Button> :
                    <Button style={styles.buyButton, styles.buyButtonLocked} textStyle={{fontSize: 12, color: '#828282'}} >{"Buy now for " + item.peakPoints + " PeakPoints (Locked)"}</Button>
                }

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
                    style={styles.products}
                />

            </View>

        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#F9F9FB',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },


    products: {
        flex: 1,
        alignSelf: 'stretch',
    },

    product: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
    },

    productImage: {
        alignSelf: 'flex-start',
        marginBottom: 20,
    },

    productDescription: {
        marginBottom: 20,
        fontSize: 14,
        color: '#666666'
    },

    card: {
        borderRadius: 8,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3},
        shadowOpacity: 0.05,
        shadowRadius: 15,
        paddingVertical: 20,
        paddingHorizontal: 20,
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        alignSelf: 'stretch',
    },

    buyButton: {
        backgroundColor: '#fbefc9',
        borderRadius: 8,
        borderWidth: 0,
        paddingVertical: 10,
        paddingHorizontal: 15,
    },

    buyButtonLocked: {
        borderWidth: 0,
        backgroundColor: '#f2f2f2',
    },

});
