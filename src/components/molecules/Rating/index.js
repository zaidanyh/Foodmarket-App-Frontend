import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { IcStarOff, IcStarOn } from '../../../assets';

const Rating = () => {
    return (
        <View style={{ flexDirection: 'row' }}>
            <View style={{ flexDirection: 'row' }}>
                <IcStarOn />
                <IcStarOn />
                <IcStarOn />
                <IcStarOn />
                <IcStarOff />
            </View>
            <Text>4.5</Text>
        </View>
    )
}

export default Rating

const styles = StyleSheet.create({});
