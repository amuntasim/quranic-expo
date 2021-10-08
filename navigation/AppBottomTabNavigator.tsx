/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import {Ionicons} from '@expo/vector-icons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import {useContext} from 'react';
import {Text, View} from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import HomeScreen from '../screens/HomeScreen';
import {CartScreen} from '../screens/CartScreen';
import AccountScreen from '../screens/AccountScreen/AccountScreen';
import AccountSettingsScreen from '../screens/AccountScreen/AccountSettingsScreen';
import MyOrdersScreen from "../screens/AccountScreen/MyOrdersScreen";
import AuthContext from "../context/auth";
import CartContext from "../context/cart";
import ChaptersScreen from '../screens/ChaptersScreen';
import MiscScreen from '../screens/MiscScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ChapterDetailScreen from '../screens/ChapterDetailScreen';
import AssessmentListScreen from '../screens/AssessmentListScreen';
import QuranicVerbsScreen from '../screens/QuranicVerbsScreen';


import {BottomTabParamList, HomeParamList, ChaptersParamList, MiscParamList, SettingsParamList} from '../types';


const BottomTab = createBottomTabNavigator<BottomTabParamList>();

const NotificationTabBarIcon = (props: any) => (
    props.notificationCount > 0 ?

        <Text
            style={{
                color: '#FFFFFF',
                position: 'absolute',
                top: 1,
                right: 1,
                margin: -1,
                minWidth: 13,
                height: 13,
                borderRadius: 7,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#FF0000',
                textAlign: "center",
                fontSize: 9
            }}>{props.notificationCount}</Text>
        : null
);

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const HomeStack = createStackNavigator<HomeParamList>();

function HomeNavigator() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{headerTitle: 'Home'}}
            />
        </HomeStack.Navigator>
    );
}

const ChaptersStack = createStackNavigator<ChaptersParamList>();

function ChaptersNavigator() {
    return (
        <ChaptersStack.Navigator>
            <ChaptersStack.Screen
                name="ChaptersScreen"
                component={ChaptersScreen}
                options={{headerTitle: 'Chapters'}}
            />
            <ChaptersStack.Screen
                name="ChapterDetailScreen"
                component={ChapterDetailScreen}
                options={{headerTitle: 'ChapterDetail'}}
            />
        </ChaptersStack.Navigator>
    );
}
const MiscStack = createStackNavigator<MiscParamList>();

function MiscNavigator() {
    return (
        <MiscStack.Navigator>
            <MiscStack.Screen
                name="MiscScreen"
                component={MiscScreen}
                options={{headerTitle: 'Misc'}}
            />
            <MiscStack.Screen
                name="AssessmentListScreen"
                component={AssessmentListScreen}
                options={{headerTitle: 'Assessments'}}
            />
            <MiscStack.Screen
                name="QuranicVerbsScreen"
                component={QuranicVerbsScreen}
                options={{headerTitle: 'Quranic Verbs'}}
            />
        </MiscStack.Navigator>
    );
}
const SettingsStack = createStackNavigator<SettingsParamList>();

function SettingsNavigator(props: any) {
    const languageChanged = (language: any) => {
        console.log("language... ", language)
        props.screenData.reloading()
    }
    const lessonsSourceChanged = (lessonsSource: any) => {
        console.log("lessonsSource... ", lessonsSource)
        props.screenData.reloading()
    }


    return (
        <SettingsStack.Navigator>
            <SettingsStack.Screen
                name="SettingsScreen"
                component={SettingsScreen}
                options={{headerTitle: 'Settings'}}
                initialParams={{languageChanged: languageChanged, lessonsSourceChanged: lessonsSourceChanged}}

            />
        </SettingsStack.Navigator>
    );
}


export default function AppBottomTabNavigator() {
    const colorScheme = useColorScheme();
    const [refreshedAt, setRefreshedAt] = React.useState(Date.now());

    const reloadTabs = () => {
        setRefreshedAt(Date.now())
    }

    return (
        <BottomTab.Navigator
            initialRouteName="Home"
            tabBarOptions={{activeTintColor: Colors[colorScheme].tint}}>
            <BottomTab.Screen
                name="Home"
                component={HomeNavigator}
                options={{
                    tabBarIcon: ({color}) => <TabBarIcon name="ios-home" color={color}/>,
                }}
            />
            <BottomTab.Screen
                name="Chapters"
                component={ChaptersNavigator}
                options={{
                    tabBarIcon: ({color}) => <TabBarIcon name="ios-list" color={color}/>,
                }}
            />
            <BottomTab.Screen
                name="Misc"
                component={MiscNavigator}
                options={{
                    tabBarIcon: ({color}) => <TabBarIcon name="ios-briefcase" color={color}/>,
                }}
            />

            <BottomTab.Screen
                name="Settings"
                children={() => <SettingsNavigator screenData={{reloading: reloadTabs}} />}
                options={{
                    tabBarIcon: ({color}) => <TabBarIcon name="ios-cog" color={color}/>,
                }}
            />

        </BottomTab.Navigator>
    );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
    return <Ionicons size={30} style={{marginBottom: -3}} {...props} />;
}

