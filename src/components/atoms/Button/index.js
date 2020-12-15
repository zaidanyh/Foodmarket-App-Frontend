import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Button = ({buttonText, color='#FFC700', textColor="black", onPress}) => {
    return (
        <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
            <View style={styles.container(color)}>
                <Text style={styles.text(textColor)}>{buttonText}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default Button;

const styles = StyleSheet.create({
    container: (color) => ({
        backgroundColor: color,
        padding:12,
        borderRadius:8
    }),
    text: (color) => ({
        fontSize:14, 
        fontFamily:'Poppins-Medium', 
        color:color,
        textAlign: 'center'
    })
});