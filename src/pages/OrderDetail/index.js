import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { FoodDummy1 } from '../../assets';
import { Button, Header, ItemListFood, ItemValue, Gap } from '../../components';

const OrderDetail = () => {
    return (
        <ScrollView>
            <View>
                <Header title="Payment" 
                subTitle="You deserve better meal" 
                onBack={() => {}} />
                <View style={styles.content}>
                    <Text style={styles.label}>Item Ordered</Text>
                    <ItemListFood 
                        type="order-summary" 
                        name="Sub Bumil" 
                        price="380.000" 
                        items={14}
                        image={FoodDummy1} 
                        items={14} 
                    />
                    <Text style={styles.label}>Details Transaction</Text>
                    <ItemValue label="Cherry Healthy" value="IDR 18.390.000" />
                    <ItemValue label="Driver" value="IDR 50.000" />
                    <ItemValue label="Tax 10%" value="IDR 1.800.390" />
                    <ItemValue label="Total Price" value="IDR 390.803.000" color="#1ABC9C" />
                </View>

                <View style={styles.content}>
                    <Text style={styles.label}>Deliver to:</Text>
                    <ItemValue label="Name" value="Angga Risky" />
                    <ItemValue label="Phone No." value="0822 0819 9688" />
                    <ItemValue label="Address" value="Setra duta palima" />
                    <ItemValue label="Home No." value="A5 Hook" />
                    <ItemValue label="City" value="Bandung" />
                </View>

                <View style={styles.content}>
                    <Text style={styles.label}>Order Status:</Text>
                    <ItemValue label="#FM209391" value="Paid" color="#1ABC9C"/>
                </View>

                <View style={styles.button}>
                    <Button 
                        buttonText="Cancel My Order" 
                        onPress={() => navigation.replace('OrderSuccess')} 
                        color="#D9435E"
                        textColor="white"
                    />
                </View>
            </View>
            <Gap height={20}/>
        </ScrollView>
    )
}

export default OrderDetail

const styles = StyleSheet.create({
    content: {
        backgroundColor: 'white',
        paddingHorizontal: 24,
        paddingVertical: 16,
        marginTop: 24
    },
    label: {
        fontSize: 14,
        fontFamily: 'Poppins-Regular',
        color: '#020202',
        marginBottom: 8
    },
    button: {
        paddingTop: 24,
        paddingHorizontal: 24
    }
})
