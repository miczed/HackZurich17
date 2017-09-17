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
        AsyncStorage.setItem("peakPoints", "5000" );
    }

    getPeakPointsFromLocalStorage() {
        AsyncStorage.getItem("peakPoints").then((value) => {
            if(value != null || value != undefined){
                this.setState({ currentPeakPoints: parseInt(value) });
            }
        }).done();
    }

    addMockRewardsData(){

        const product1 = { description: "Get a 20% discount for your next purchase in any ShopVille Migros.", peakPoints: 2500, image: require('../img/migros.png'), id: 1};
        const product2 = { description: "Get a coupon for a free delicious coffee at your next kkiosk.", peakPoints: 1500, image: require('../img/kkiosk.png'), id: 2};

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
            this.props.navigator.showModal({
                screen: "peakpass.QRScreen", // unique ID registered with Navigation.registerScreen
                title: "20% Discount", // title of the screen as appears in the nav bar (optional)
                passProps: {}, // simple serializable object that will pass as props to the modal (optional)
                navigatorStyle: {}, // override the navigator style for the screen, see "Styling the navigator" below (optional)
                animationType: 'slide-up' // 'none' / 'slide-up' , appear animation for the modal (optional, default 'slide-up')
            });
        }
        else {
            Alert.alert('😢 Not enough PeakPoints 😢',"You need " + (peakPoints - this.state.currentPeakPoints) + " more PeakPoints to get this reward. Why don\'t you catch the next train and collect some points?");
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
