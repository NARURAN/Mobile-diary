import React from "react";
import { Text, TouchableOpacity, StyleSheet, View, ScrollView, SafeAreaView } from "react-native";
import {LinearGradient} from 'expo-linear-gradient';
import { Menu } from "../Modules/Menu";
import { useNavigation } from '@react-navigation/native';

export const MainPages = () =>{
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
            <LinearGradient style={styles.background} colors={['#74e', 'white' ]}>
                <Menu/>
                <ScrollView style={styles.scrollView}>
                    <SafeAreaView style={styles.scrollView}>
                    </SafeAreaView>
                </ScrollView>
            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: '100%',
    },
    buttonClass:{
        marginLeft: '10%',
        marginTop: '5%',
        width: '80%',
        height: '6%',
        borderRadius: 35,
        backgroundColor: 'black',
    },
    textClass:{
        color: 'white',
        fontSize: 28,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 'auto',
        marginBottom: 'auto',
    },
    scrollView:{
        height: '100%',
    },
})