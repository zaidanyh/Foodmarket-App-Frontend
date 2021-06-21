import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { EmptyHistory } from '../../../assets';
import { Button, Gap } from '../../atoms';
import { useNavigation } from '@react-navigation/native';

const EmptyOrder = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.page}>
            <EmptyHistory />
            <Gap height={30}/>
            <Text style={styles.title}>Ouch! Hungry</Text>
            <Gap height={6}/>
            <Text style={styles.subTitle}>Seems like you have not</Text>
            <Text style={styles.subTitle}>ordered any food yet</Text>
            <Gap height={30}/>
            <View style={styles.buttonFind}>
                <Button 
                    buttonText="Find Foods" 
                    onPress={() => navigation.replace('MainApp')} 
                />
            </View>
        </View>
    )
}

export default EmptyOrder;

const styles = StyleSheet.create({
    page: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: 'white'
    },
    title: {
        fontSize:20,
        fontFamily: 'Poppins-Regular',
        color:'#020202'
    },
    subTitle: {
        fontSize:14, 
        fontFamily: 'Poppins-Light', 
        color:'#8D92A3'
    },
    buttonFind: {
        width:'100%',
        paddingHorizontal:80
    }
})
