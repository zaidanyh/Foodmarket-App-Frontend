import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { IcAdd, IcMin } from '../../../assets'

const Counter = () => {
    return (
        <View style={styles.container}>
        <TouchableOpacity>
            <IcMin />
        </TouchableOpacity>
            <Text style={styles.counter}>14</Text>
        <TouchableOpacity>            
            <IcAdd />
        </TouchableOpacity>
        </View>
    )
}

export default Counter;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    counter: {
        fontSize: 16,
        fontFamily: 'Poppins-Regular',
        color: '#020202',
        marginHorizontal: 10
    }
});
