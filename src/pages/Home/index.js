import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { FoodDummy1, FoodDummy2, FoodDummy3, FoodDummy4 } from '../../assets';
import { FoodCard, Gap, HomeProfile, HomeTab } from '../../components';

const Home = () => {
    return (
        <ScrollView>
            <View style={styles.page}>
                <HomeProfile />
                <View>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <View style={{ flexDirection: 'row', marginVertical: 12 }}>
                            <Gap width={24} />
                            <FoodCard image={FoodDummy1} text={'Cherry Healthy'}/>
                            <FoodCard image={FoodDummy2} text={'Kari Sleman'} />
                            <FoodCard image={FoodDummy3} text={'Kopi Kudda'}/>
                            <FoodCard image={FoodDummy4} text={'Avosalado'} />
                        </View>
                    </ScrollView>
                </View>
                <View style={styles.tabContent}>
                    <HomeTab />
                </View>
            </View>
        </ScrollView>
    );
};

export default Home;

const styles = StyleSheet.create({
    page: {
        flex: 1
    },
    tabContent: {
        flex: 1
    }
});