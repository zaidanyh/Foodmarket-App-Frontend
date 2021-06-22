import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import { ItemListMenu } from '..';
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

const Account = () => {
    const navigation = useNavigation();
    return (
        <View style={{ paddingTop: 8, paddingHorizontal: 24 }}>
            <ItemListMenu name="Edit Profile"/>
            <ItemListMenu name="Home Address"/>
            <ItemListMenu name="Security"/>
            <ItemListMenu name="Payments"/>
        </View>
    );
};
   
const FoodMarket = () => {
    const navigation = useNavigation();
    return (
        <View style={{ paddingTop: 8, paddingHorizontal: 24 }}>
            <ItemListMenu name="Rate App"/>
            <ItemListMenu name="Help Center"/>
            <ItemListMenu name="Privacy & Policy"/>
            <ItemListMenu name="Terms & Conditions"/>
        </View>
    );
};
   
const initialLayout = { width: Dimensions.get('window').width };

const ProfileTabSection = () => {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'Account' },
        { key: 'second', title: 'FoodMarket' }
    ]);
 
    const renderScene = SceneMap({
        first: Account,
        second: FoodMarket
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

export default ProfileTabSection

const styles = StyleSheet.create({});
