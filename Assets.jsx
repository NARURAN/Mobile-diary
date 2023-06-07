import React, { useState, useEffect } from "react";
import { View, StyleSheet, Image, TouchableOpacity, Text, Modal, TextInput, FlatList, ScrollView, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Menu } from "../Modules/Menu";

import AsyncStorage from '@react-native-async-storage/async-storage';

export const Assets = () =>{
    const [nodes, setNodes] = React.useState('');
    const [notes, setNotes] = useState([]);
    const [modalShedule, setModalShedule] = useState(false)
    const findNotes = async () =>{
        const result = await AsyncStorage.getItem('Assets')
        if (result !== null) setNotes(JSON.parse(result));
    }
    const handleClick = async (nodes) =>{
        const note = {id: Date.now(), title: nodes};
        const updateNotes = [...notes, note]-
        setNotes(updateNotes)
        await AsyncStorage.setItem('Assets', JSON.stringify(updateNotes))
    }
    useEffect(() => {
        findNotes();
    }, []);
    return(
<View style={styles.container}>
            <LinearGradient style={styles.background} colors={['#74e', 'white' ]}>
                <Menu/>
                <ScrollView style={styles.scrollView}>
                    <SafeAreaView style={styles.scrollView}>

                    <LinearGradient colors={['#74e', '#74e' ]} style={styles.buttonClass}>
                        <TouchableOpacity onPress={() => navigation.navigate('')}>
                            <Text style={styles.textClass}>Русский Язык</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                    <LinearGradient colors={['#74e', '#74e' ]} style={styles.buttonClass}>
                        <TouchableOpacity onPress={() => navigation.navigate('')}>
                            <Text style={styles.textClass}>Математика</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                    <LinearGradient colors={['#74e', '#74e' ]} style={styles.buttonClass}>
                        <TouchableOpacity onPress={() => navigation.navigate('')}>
                            <Text style={styles.textClass}>Физика</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                    <LinearGradient colors={['#74e', '#74e' ]} style={styles.buttonClass}>
                        <TouchableOpacity onPress={() => navigation.navigate('')}>
                            <Text style={styles.textClass}>Химия</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                    <LinearGradient colors={['#74e', '#74e' ]} style={styles.buttonClass}>
                        <TouchableOpacity onPress={() => navigation.navigate('')}>
                            <Text style={styles.textClass}>Английский язык</Text>
                        </TouchableOpacity>
                    </LinearGradient>
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
        marginTop: '7%',
        width: '80%',
        height: '15%',
        borderRadius: 35,
        backgroundColor: 'black',
    },
    textClass:{
        color: 'white',
        fontSize: 30,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 'auto',
        marginBottom: 'auto',
    },
    scrollView:{
        height: '75%',
        width: '100%',
    },
})