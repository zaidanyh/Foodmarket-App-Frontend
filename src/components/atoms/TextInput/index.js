import React from 'react';
import { StyleSheet, Text, View, TextInput as TextInputRN } from 'react-native';

const TextInput = (props) => {
    const {label, input} = props
    return (
        <View>
            <Text style={styles.label}>{label}</Text>
            <TextInputRN style={styles.input} placeholder={input} />
        </View>
    );
};

export default TextInput;

const styles = StyleSheet.create({
    label: {
        fontSize:16, 
        fontFamily:'Poppins-Regular', 
        color:'#020202'
    },
    input: {
        borderWidth:1,
        borderColor:'#020202',
        borderRadius:8,
        padding:10,
        fontStyle: 'italic'
    }
});