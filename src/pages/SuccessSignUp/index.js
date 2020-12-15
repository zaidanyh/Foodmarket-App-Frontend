import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LogoSuccess } from '../../assets';
import { Button, Gap } from '../../components';

const SuccessSignUp = ({navigation}) => {
    return (
        <View style={styles.page}>
            <LogoSuccess />
            <Gap height={30}/>
            <Text style={styles.title}>Yeay! Complete</Text>
            <Gap height={6}/>
            <Text style={styles.subTitle}>Now you are able to order</Text>
            <Text style={styles.subTitle}>Some foods as a self-reward</Text>
            <Gap height={30}/>
            <View style={styles.buttonFind}>
                <Button 
                    buttonText="Find Foods" 
                    onPress={() => navigation.replace('MainApp')} 
                />
            </View>
        </View>
    );
};

export default SuccessSignUp;

const styles = StyleSheet.create({
    page: {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    title: {
        fontSize:20,
        fontFamily: 'Poppins-Regular',
        color:'#020202'
    },
    subTitle: {
        fontSize:14, fontFamily: 'Poppins-Light', color:'#8D92A3'
    },
    buttonFind: {
        width:'100%',
        paddingHorizontal:80
    }
});