import * as React from 'react';
import {useContext, useEffect, useMemo, useRef, useState} from 'react';
import Styles from '../components/Styles';

import {Text, View} from '../components/Themed';
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {Alert, FlatList, Modal} from "react-native";
import api from "../services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AuthContext from "../context/auth";
import {ListItem, SearchBar} from "react-native-elements";
import ProductDetail from "../components/ProductDetail";

export default function HomeScreen(props: any) {
    return (
        <View style={Styles.container}>
            <Text style={Styles.text}>Home...</Text>
        </View>
    );
}
