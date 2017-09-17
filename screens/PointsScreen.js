import React from 'react';
import Button from 'apsl-react-native-button'
import Diamond from "../components/diamond";
import { StyleSheet, Text, FlatList, Image, View, Alert, AsyncStorage } from 'react-native';

export default class PointsScreen extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            data: [],
            currentPeakPoints: 2500,
        };

        this.renderItem = this.renderItem.bind(this);
    }

    componentWillMount(){
        this.addMockRewardsData();
        this.getPeakPointsFromLocalStorage();
    }

    getPeakPointsFromLocalStorage() {
        AsyncStorage.getItem("peakPoints").then((value) => {
            if(value != null || value != undefined){
                this.setState({ currentPeakPoints: parseInt(value) });
            }
        }).done();
    }

    addMockRewardsData(){

        const product1 = { description: "Get a 20% discount for your next purchase in any ShopVille Migros.", peakPoints: 1500, image: require('../img/migros.png'), id: 1};
        const product2 = { description: "Get a coupon for a free delicious coffee at your next kkiosk.", peakPoints: 500, image: require('../img/kkiosk.png'), id: 2, bought: true};

        let data = [];
        data.push(product1);
        data.push(product2);

        this.setState({
            data: data,
        });

    }

    buyProduct(id, peakPoints){
        if(this.state.currentPeakPoints >= peakPoints){

            // Save new value in Async Storage and update state
            AsyncStorage.setItem("peakPoints", (this.state.currentPeakPoints - peakPoints).toString() );
            this.setState({currentPeakPoints: this.state.currentPeakPoints - peakPoints});

        }
        else {
            Alert.alert('Not possible, sorry!');
        }
    }

    storeButton(item){
        if (item.bought) {
            return <Button style={styles.boughtButton} textStyle={{fontSize: 12, color: '#503E0D',}} onPress={() => this.viewProduct(item.id)} >Show Coupon</Button>
        }
        else if (this.state.currentPeakPoints - item.peakPoints >= 0){
            return <Button style={styles.buyButton} textStyle={{fontSize: 12, color: '#503E0D',}} onPress={() => this.buyProduct(item.id, item.peakPoints)} >{"Buy now for " + item.peakPoints + " PeakPoints"}</Button>
        }
        else {
            return <Button style={styles.buyButton, styles.buyButtonLocked} textStyle={{fontSize: 12, color: '#828282'}} isDisabled={true} >{"Buy now for " + item.peakPoints + " PeakPoints (Locked)"}</Button>
        }
    }

    renderItem({ item, index }) {
        return (
            <View style={[styles.product, styles.card]}>

                <Image source={item.image} style={styles.productImage} />

                <Text style={styles.productDescription}>{item.description}</Text>

                { (this.state.currentPeakPoints - item.peakPoints >= 0) ?
                    <Button style={styles.buyButton} textStyle={{fontSize: 12, color: '#503E0D',}} onPress={() => this.buyProduct(item.id, item.peakPoints)} >{"Buy now for " + item.peakPoints + " PeakPoints"}</Button> :
                    <Button style={[styles.buyButton, styles.buyButtonLocked]} textStyle={{fontSize: 12, color: '#828282'}} isDisabled={true} >{"Buy now for " + item.peakPoints + " PeakPoints (Locked)"}</Button>
                }
                {this.storeButton(item)}

            </View>
        );
    }

    render() {
        return (

            <View style={styles.container}>

                <View style={styles.yourBalance}>
                    <Text style={styles.yourBalanceText} >You have currently:</Text>
                    <Diamond peakPoints={this.state.currentPeakPoints} style={styles.yourBalanceDiamond} />
                </View>

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
        backgroundColor: '#F8F6F6',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },

    yourBalance: {
        alignItems: 'center',
        flexDirection: 'row',
        marginRight: 20,
        marginLeft: 20,
        marginTop: 30,
        marginBottom: 20,
        alignSelf: 'stretch'
    },

    yourBalanceText: {
        fontSize: 18
    },

    yourBalanceDiamond: {
        marginLeft: 'auto'
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
        marginBottom: 20,
        marginLeft: 20,
        marginRight: 20,
        alignSelf: 'stretch',
    },

    boughtButton: {
        backgroundColor: '#e9f7ef',
        borderWidth: 0,
        fontWeight: '500'
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
