import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import { ListFood } from '..';
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

const NewTast = () => {
    const navigation = useNavigation();
    return (
        <View style={{ paddingTop: 8 }}>
            <ListFood image={FoodDummy3} onPress={() => navigation.navigate('FoodDetail')}/>
            <ListFood image={FoodDummy1} onPress={() => navigation.navigate('FoodDetail')}/>
            <ListFood image={FoodDummy4} onPress={() => navigation.navigate('FoodDetail')}/>
            <ListFood image={FoodDummy2} onPress={() => navigation.navigate('FoodDetail')}/>
        </View>
    );
};
   
const Popular = () => {
    const navigation = useNavigation();
    return (
        <View style={{ paddingTop: 8 }}>
            <ListFood image={FoodDummy4} onPress={() => navigation.navigate('FoodDetail')}/>
            <ListFood image={FoodDummy3} onPress={() => navigation.navigate('FoodDetail')}/>
            <ListFood image={FoodDummy2} onPress={() => navigation.navigate('FoodDetail')}/>
            <ListFood image={FoodDummy1} onPress={() => navigation.navigate('FoodDetail')}/>
        </View>
    );
};

const Recommended = () => {
    const navigation = useNavigation();
    return (
        <View style={{ paddingTop: 8 }}>
            <ListFood image={FoodDummy1} onPress={() => navigation.navigate('FoodDetail')}/>
            <ListFood image={FoodDummy2} onPress={() => navigation.navigate('FoodDetail')}/>
            <ListFood image={FoodDummy3} onPress={() => navigation.navigate('FoodDetail')}/>
            <ListFood image={FoodDummy4} onPress={() => navigation.navigate('FoodDetail')}/>
        </View>
    );
}
   
const initialLayout = { width: Dimensions.get('window').width };

const HomeTabSection = () => {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'New Taste' },
        { key: 'second', title: 'Popular' },
        { key: 'third', title: 'Recommended' }
    ]);
 
    const renderScene = SceneMap({
        first: NewTast,
        second: Popular,
        third: Recommended,
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

export default HomeTabSection

const styles = StyleSheet.create({});
