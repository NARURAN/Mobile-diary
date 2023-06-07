import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, Alert } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const TeachersBack = ({item, notes, setNotes}) =>{

    const {title} = item;
    const displayDeleteAlert = () => {
        Alert.alert('Удалить','Вы точно хотите удалить данного учителя?', 
        [
            {
                text: 'Отмена',
                onPress: () =>{ console.log('Отмена')}
            },
            {
                text: 'Удалить',
                onPress: () => {{deletNote()}}

            },
            ],
            {
                cancelable: true,
            }
        );
    }

    const deletNote = async () =>{
        const result = await AsyncStorage.getItem('Teachers');
        let notes = []
        if (result !== null) notes = JSON.parse(result)
        const newNotes = notes.filter(n => n.id !== item.id)
        await AsyncStorage.setItem('Teachers', JSON.stringify(newNotes))
    }
    
    
    
    return(
        <View>
            <LinearGradient style={styles.container} colors={['#74e',  '#8fb4ff' ]}>
                <Text style={styles.text}>{title}</Text>
                <TouchableOpacity onPress={displayDeleteAlert} style={styles.button}><Image style={styles.img}source={require('../../UI/Img/close.png')}/></TouchableOpacity>
            </LinearGradient>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        width: '100%',
        backgroundColor: '#74e',
        marginTop: '1%',
        display: 'flex',
        verticalAlign: 'top',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: 'white',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    text:{
        fontSize: 32,
        color: 'white',
        paddingLeft: 20,
        width: '85%',
        paddingTop: 10,
        paddingBottom: 10,
    },
    button:{
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: '5%',
        marginTop: 'auto',
        marginBottom: 'auto',
        marginLeft: 'auto',
        marginRight: '5%',
    },
    img:{
        width: 35,
        height: 35,
        marginTop: 'auto',
        marginBottom: 'auto',
        marginLeft: 'auto',
        marginRight: 'auto',
    }
})