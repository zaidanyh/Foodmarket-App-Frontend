import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { IcNext } from '../../../assets'

const ItemListMenu = ({name}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{name}</Text>
            <IcNext />
        </View>
    )
}

export default ItemListMenu

const styles = StyleSheet.create({
    container: {flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 7},
    text: {fontSize: 14, fontFamily: 'Poppins-Regular', color: '#020202'}
})
