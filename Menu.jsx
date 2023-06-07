import React, { useState } from "react";
import { View, StyleSheet, Image, TouchableOpacity, Text, Modal } from "react-native";
import { MenuAll } from "../Components/Menu/MenuAll";

export const Menu = () =>{
    const [modalMenu, setModalMenu] = useState(false);
    return(
        <View style={styles.container}>
            <Modal
            animationType="fade" 
            transparent={true}
            visible={modalMenu}
            onRequestClose={() => {
                setModalMenu(!modalMenu);
            }}
            >
                    <View style={styles.modal}>

                        <MenuAll/>
                        <TouchableOpacity style={styles.modalClose} onPress={()=>{setModalMenu(!modalMenu)}}></TouchableOpacity>
                    </View>
                    
            </Modal>
            <TouchableOpacity style={styles.Menu} onPress={()=>{setModalMenu(!modalMenu)}}>
                <Image style={styles.MenuPng} source={require('../UI/Img/Menu.png')}/>
            </TouchableOpacity>
            <Text style={styles.TextSchoole}>School</Text>
            <Image style={styles.img} source={require('../UI/Img/school.png')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: 75,
        backgroundColor: '#74e',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    Menu:{
        width:39,
        height: '40%',
    },
    MenuPng:{
        width:'100%',
        height: '100%',

    },
    TextSchoole:{
        fontSize: 32,
        color: 'white',
        fontWeight: '600',
        marginLeft: '20%',
        marginRight: '20%',
    },
    img:{
        width: 50,
        height: '60%',
    },
    modal:{
        flex: 1,
        flexDirection: 'row',
    },
    modalClose:{
        width: '30%',
        height: '100%',
    },  
})