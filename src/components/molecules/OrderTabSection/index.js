import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import { ItemListFood } from '..';
import { FoodDummy1, FoodDummy2, FoodDummy3, FoodDummy4 } from '../../../assets';
import { useNavigation } from '@react-navigation/native';


const renderTabBar = (props) => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: '#020202', height: 3, width: '15%', marginHorizontal: '3%' }}
      style={{ backgroundColor: 'white', elevation: 0, shadowOpacity: 0, borderBottomColor: '#F2F2F2', borderBottomWidth: 1}}
      tabStyle={{ width: 'auto' }}
      renderLabel={({ route, focused }) => (
            <Text style={{ 
                color: focused ? '#020202' : '#8D92A3', 
                fontFamily: 'Poppins-Medium'
                }}>
                {route.title}
            </Text>
        )}
    />
);

const InProgress = () => {
    const navigation = useNavigation();
    return (
        <View style={{ paddingTop: 8, paddingHorizontal: 24 }}>
            <ItemListFood 
                image={FoodDummy3} 
                onPress={() => navigation.navigate('FoodDetail')} 
                items={3}
                price="2.000.000"
                type="in-progress"
                name="Sop Bumil"
            />
            <ItemListFood 
                image={FoodDummy1} 
                onPress={() => navigation.navigate('FoodDetail')} 
                items={3}
                price="2.000.000"
                type="in-progress"
                name="Sop Bumil"
            />
            <ItemListFood 
                image={FoodDummy4} 
                onPress={() => navigation.navigate('FoodDetail')}
                items={3}
                price="2.000.000"
                type="in-progress"
                name="Sop Bumil"
            />
            <ItemListFood 
                image={FoodDummy2} 
                onPress={() => navigation.navigate('FoodDetail')}
                items={3}
                price="2.000.000"
                type="in-progress"
                name="Sop Bumil"
            />
        </View>
    );
};
   
const PastOrders = () => {
    const navigation = useNavigation();
    return (
        <View style={{ paddingTop: 8, paddingHorizontal: 24 }}>
            <ItemListFood 
                image={FoodDummy4} 
                onPress={() => navigation.navigate('FoodDetail')} 
                rating={3}
                items={3}
                price="2.000.000"
                type="past-orders"
                name="Sop Bumil"
                date="Jun 12, 14:00"
            />
            <ItemListFood image={FoodDummy3} 
                onPress={() => navigation.navigate('FoodDetail')} 
                rating={3}
                items={3}
                price="2.000.000"
                type="past-orders"
                name="Sop Bumil"
                date="Jun 12, 14:00"
                status="Cancel"
            />
            <ItemListFood image={FoodDummy2} 
                onPress={() => navigation.navigate('FoodDetail')} 
                rating={3}
                items={3}
                price="2.000.000"
                type="past-orders"
                name="Sop Bumil"
                date="Jun 12, 14:00"
            />
            <ItemListFood image={FoodDummy1} 
                onPress={() => navigation.navigate('FoodDetail')} 
                rating={3}
                items={3}
                price="2.000.000"
                type="past-orders"
                name="Sop Bumil"
                date="Jun 12, 14:00"
                status="Cancel"
            />
        </View>
    );
};
   
const initialLayout = { width: Dimensions.get('window').width };

const OrderTabSection = () => {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'In Progress' },
        { key: 'second', title: 'Past Orders' }
    ]);
 
    const renderScene = SceneMap({
        first: InProgress,
        second: PastOrders
    });
    return (
        <TabView
            renderTabBar={renderTabBar}
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={initialLayout} 
            style={{ backgroundColor: 'white' }}
        />
    )
}

export default OrderTabSection

const styles = StyleSheet.create({});
