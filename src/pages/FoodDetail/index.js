import React from 'react'
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { FoodDummy6, IconBackWhite } from '../../assets';
import { Button, Counter, Rating } from '../../components';

const FoodDetail = ({navigation}) => {
    return (
        <View style={styles.page}>
            <ImageBackground source={FoodDummy6} style={styles.cover}>
            <TouchableOpacity style={styles.back}>
                <IconBackWhite />
            </TouchableOpacity>
            </ImageBackground>
            <View style={styles.content}>
                <View style={styles.mainContent}>
                    <View style={styles.productContainer}>
                        <View>
                            <Text style={styles.foodName}>Cherry Healthy</Text>
                            <Rating />
                        </View>
                        <Counter />
                    </View>
                    <Text style={styles.desc}>Makanan khas Bandung yang cukup sering
                    dipesan oleh anak muda dengan pola makan
                    yang cukup tinggi dengan mengutamakan
                    diet yang sehat dan teratur.</Text>
                    <Text style={styles.ingredients}>Ingredients</Text>
                    <Text style={styles.desc}>Seledri, telur, blueberry, madu.</Text>
                </View>
                <View style={styles.footer}>
                    <View style={styles.priceContainer}>
                        <Text style={styles.total}>Total Price:</Text>
                        <Text style={styles.amount}>IDR 12.289.000</Text>
                    </View>
                    <View style={styles.button}>
                        <Button buttonText="Order Now" onPress={() => navigation.navigate('OrderSummary')} />
                    </View>
                </View>
            </View>
        </View>
    );
};

export default FoodDetail;

const styles = StyleSheet.create({
    page: {
        flex: 1
    },
    cover: {
        height: 330,
        paddingTop: 26,
        paddingLeft: 22,
    },
    back: {
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    content: {
        backgroundColor: 'white',
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        marginTop: -40,
        paddingTop: 26,
        paddingHorizontal: 16,
        flex: 1
    },
    mainContent: {
        flex: 1
    },
    productContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 14
    },
    foodName: {
        fontSize: 16,
        fontFamily: 'Poppins-Regular',
        color: '#020202',
    },
    desc: {
        fontFamily: 'Poppins-Regular',
        fontSize: 14,
        color: '#8D92A3',
        marginBottom: 16
    },
    ingredients: {
        fontSize: 14,
        fontFamily: 'Poppins-Regular',
        color: '#020202',
        marginBottom: 4
    },
    footer: {
        flexDirection: 'row',
        paddingVertical: 16,
        alignItems: 'center'
    },
    priceContainer: {
        flex: 1
    },
    total: {
        fontFamily: 'Poppins-Regular',
        fontSize: 13,
        color: '#8D92A3'
    },
    amount: {
        fontSize: 18,
        fontFamily: 'Poppins-Regular',
        color: '#020202'
    },
    button: {
        width: 163
    }
});
