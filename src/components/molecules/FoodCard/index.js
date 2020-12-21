import React from 'react';
import { Image, StyleSheet, Text, View} from 'react-native';
import { Rating } from '..';

const FoodCard = ({image, text}) => {
    return (
        <View style={styles.container}>
            <Image source={image} style={{ width: 200, height: 140, resizeMode: 'cover' }} />
            <View style={{ padding: 12 }}>
                <Text style={styles.text}>{text}</Text>
                <Rating />
            </View>
        </View>
    );
};

export default FoodCard;

const styles = StyleSheet.create({
    container: {
        width: 200,
        backgroundColor: 'white',
        borderRadius: 8,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 7},
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 14,
        overflow: 'hidden',
        marginRight: 24,
    },
    text: {
        fontSize: 16,
        fontFamily: 'Poppins-Regular',
        color: '#020202',
    },
});