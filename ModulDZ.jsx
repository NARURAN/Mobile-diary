import React, { useState } from "react";
import { View, StyleSheet, Image, TouchableOpacity, Text, Modal } from "react-native";

export const ModulDZ = ({item}) =>{
    const {title} = item;
    return(
        <Text>{title}</Text>
    )
}

const styles = StyleSheet.create({
    
    text:{
        marginRight: 'auto',
        marginLeft: 'auto',
        marginTop: '5%',
        fontSize: 32,
    },
    teach:{
        fontSize: 18,
        color: 'black',
        marginTop: 15,
        marginLeft: '5%',
    },
})